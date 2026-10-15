/* Petra Sinter | LP B2B | QH4 Growth */
(function () {
  'use strict';

  var CONFIG = {
    whatsapp: '5513988744942',
    // Cole aqui a URL do Web App do Google Apps Script para salvar os leads.
    // Vazio = o formulario monta a mensagem completa e envia direto para o WhatsApp.
    appsScriptUrl: ''
  };

  var MSG = {
    geral: 'Olá! Vim pelo site e quero consultar estoque e condição das lâminas sinterizadas da Petra Sinter.',
    catalogo: 'Olá! Quero receber o catálogo de lâminas sinterizadas da Petra Sinter em PDF.',
    showroom: 'Olá! Quero agendar uma visita ao showroom da Petra Sinter em Praia Grande.',
    marmoraria: 'Olá! Tenho uma marmoraria e quero ser parceira da Petra Sinter.',
    arquiteto: 'Olá! Sou arquiteto(a)/designer e quero o catálogo da Petra Sinter para especificação.',
    construtora: 'Olá! Sou de uma construtora e quero falar sobre lâminas sinterizadas para a minha obra.',
    black: 'Olá! Quero entrar na lista de prioridade da Black November B2B da Petra Sinter.',
    modelo: 'Olá! Quero consultar estoque e condição da lâmina {modelo}.'
  };

  var dl = window.dataLayer = window.dataLayer || [];
  function waUrl(text) { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text); }

  /* links de WhatsApp */
  document.querySelectorAll('.js-wa').forEach(function (a) {
    var tipo = a.getAttribute('data-wa') || 'geral';
    var txt = (MSG[tipo] || MSG.geral).replace('{modelo}', a.getAttribute('data-modelo') || '');
    a.href = waUrl(txt);
    a.target = '_blank';
    a.rel = 'noopener';
    a.addEventListener('click', function () {
      dl.push({ event: 'whatsapp_click', wa_tipo: tipo, wa_local: a.getAttribute('data-local') || '', wa_modelo: a.getAttribute('data-modelo') || '' });
    });
  });

  /* ano */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* topo solido */
  var topo = document.getElementById('topo');
  function onScroll() { topo.classList.toggle('is-solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* reveal */
  var revs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revs.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* parallax leve: fundo de marmore do hero e foto do showroom */
  var heroBg = document.querySelector('.hero__bg');
  var showImg = document.querySelector('.showroom__img');
  if (!reduz && (heroBg || showImg)) {
    var tick = false;
    window.addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (heroBg && y < 1000) heroBg.style.transform = 'scaleX(-1) translateY(' + (y * 0.12) + 'px)';
        if (showImg && window.innerWidth > 600) {
          var r = showImg.parentElement.getBoundingClientRect();
          if (r.bottom > 0 && r.top < window.innerHeight) {
            showImg.style.transform = 'translateY(' + ((r.top + r.height / 2 - window.innerHeight / 2) * -0.08) + 'px)';
          }
        }
        tick = false;
      });
    }, { passive: true });
  }

  /* catalogo: filtro, ver todos, toque para ver aplicada */
  var pecas = Array.prototype.slice.call(document.querySelectorAll('.peca'));
  var verTodos = document.getElementById('verTodos');
  var LIMITE = 12, aberto = false, filtroAtual = 'todos';
  function aplica() {
    var n = 0;
    pecas.forEach(function (p) {
      var ok = filtroAtual === 'todos' || p.getAttribute('data-fam') === filtroAtual;
      p.hidden = !ok;
      if (ok) { n++; p.classList.toggle('is-oculta', filtroAtual === 'todos' && !aberto && n > LIMITE); }
      else p.classList.remove('is-oculta');
    });
    if (verTodos) verTodos.parentElement.querySelector('#verTodos').style.display = (filtroAtual === 'todos' && !aberto) ? '' : 'none';
  }
  document.querySelectorAll('.filtro').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.filtro').forEach(function (x) { x.classList.remove('is-on'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true');
      filtroAtual = b.getAttribute('data-f');
      aplica();
      dl.push({ event: 'catalogo_filtro', filtro: filtroAtual });
    });
  });
  if (verTodos) verTodos.addEventListener('click', function () {
    aberto = true; verTodos.setAttribute('aria-expanded', 'true'); aplica();
    dl.push({ event: 'catalogo_ver_todos' });
  });
  aplica();
  document.querySelectorAll('.peca__foto').forEach(function (b) {
    b.addEventListener('click', function () {
      var on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) dl.push({ event: 'catalogo_ver_aplicada', modelo: b.closest('.peca').querySelector('.peca__nome').textContent.trim() });
    });
  });

  /* faq */
  document.querySelectorAll('.pergunta').forEach(function (d) {
    d.addEventListener('toggle', function () { if (d.open) dl.push({ event: 'faq_open', pergunta: d.querySelector('summary').textContent }); });
  });

  /* formulario */
  var form = document.getElementById('formLead');
  if (form) {
    var btn = document.getElementById('btnEnviar');
    var aviso = document.getElementById('formAviso');
    var tel = document.getElementById('f-whats');
    tel.addEventListener('input', function () {
      var d = tel.value.replace(/\D/g, '').slice(0, 11), v = d;
      if (d.length > 2) v = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length > 6) v = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length === 11 ? 7 : 6) + '-' + d.slice(d.length === 11 ? 7 : 6);
      tel.value = v;
    });
    tel.addEventListener('blur', function () { tel.classList.toggle('is-erro', tel.value !== '' && !tel.checkValidity()); });
    var iniciou = false;
    function valida() {
      var ok = form.checkValidity();
      btn.disabled = !ok;
      aviso.textContent = ok ? 'Tudo certo. Ao enviar, o WhatsApp abre com os seus dados.' : 'Preencha os campos para liberar o envio.';
      if (!iniciou) { iniciou = true; dl.push({ event: 'form_start' }); }
    }
    form.addEventListener('input', valida);
    form.addEventListener('change', valida);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { valida(); return; }
      var f = new FormData(form);
      var dados = {
        nome: f.get('nome'), whatsapp: f.get('whatsapp'), empresa: f.get('empresa'),
        perfil: f.get('perfil'), cidade: f.get('cidade'), interesse: f.get('interesse') || '',
        origem: 'LP Petra Sinter', pagina: location.href, data: new Date().toLocaleString('pt-BR')
      };
      dl.push({ event: 'form_submit', lead_perfil: dados.perfil, lead_cidade: dados.cidade });
      btn.disabled = true; btn.textContent = 'Enviando...';

      if (CONFIG.appsScriptUrl) {
        fetch(CONFIG.appsScriptUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(dados) })
          .catch(function () {})
          .then(function () { location.href = 'obrigado.html'; });
        return;
      }
      var txt = 'Olá! Acabei de preencher o formulário no site da Petra Sinter.\n\n' +
        '*Nome:* ' + dados.nome + '\n' +
        '*WhatsApp:* ' + dados.whatsapp + '\n' +
        '*Empresa:* ' + dados.empresa + '\n' +
        '*Perfil:* ' + dados.perfil + '\n' +
        '*Cidade:* ' + dados.cidade +
        (dados.interesse ? '\n*Interesse:* ' + dados.interesse : '') +
        '\n\nQuero saber estoque e condição.';
      window.open(waUrl(txt), '_blank', 'noopener');
      location.href = 'obrigado.html?via=whatsapp';
    });
  }
})();
