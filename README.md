# LP Petra Sinter | QH4 Growth

Landing page B2B da **Petra Sinter**, distribuidora 100% focada em lâminas sinterizadas e ultracompactos em chapa inteira, com sede e showroom em Praia Grande/SP.

## Contexto do cliente

| Item | Dado |
|---|---|
| Empresa | Petra Sinter, CNPJ 63.397.049/0001-40 |
| Produto QH4 | Projeto Stones (otimização de LP, GMN prata, tráfego em 1 plataforma, criativos, 8 posts) |
| Contrato | 08/10/2026 a 08/12/2026, renovação manual |
| Decisor | João Vitor Rolim, sócio e diretor comercial |
| Contato secundário | Pâmella Rolim Duarte (criou logo, site, LP e Instagram; quer participar do onboarding) |
| WhatsApp dos anúncios | (13) 98874-4942 (do briefing) |
| Público | B2B: marmorarias (prioridade), arquitetos, designers, construtoras. Não é marmoraria e não vende para consumidor final |
| Concorrentes citados | Lamtec, Fatto Di Pietra, Alicante, Cosentino, CS3 Granitos |
| Urgência | Gerar venda antes da Black Friday |

## Identidade visual aplicada

| Token | Hex | Uso |
|---|---|---|
| Preto mármore | `#161615` | Fundo escuro principal, mesmo preto das barras do símbolo |
| Preto 2 | `#1D1D1B` | Seção de tecnologia |
| Ouro do veio | `#B79662` | Acento; botões com degradê metálico `#A8864F > #D8BE8A > #B08D55`, como o dourado do logo |
| Ouro claro | `#D8BE8A` | Números do hero, hover e destaques no escuro |
| Pó de chapa | `#F5F4F1` | Fundo claro das seções de catálogo e garantia |
| Branco | `#FFFFFF` | Fundo claro e texto no escuro |

- **Tipografia:** Montserrat (títulos), por ser a família mais próxima das letras do logo, como o cliente pediu no briefing; Inter (texto). Se a Pâmella confirmar a fonte exata do logo, troque no `<link>` do Google Fonts e na variável `--f-tit`.
- **Fundo:** mesclado, como marcado no briefing (hero, tecnologia, formulário e rodapé escuros; modelo B2B, catálogo, passos, públicos, garantia e FAQ claros).
- **Logo:** `assets/img/logo-petra-sinter.png` (grafite) e `logo-petra-sinter-branco.png` (branco com ouro), gerados a partir dos PDFs da pasta Logo.
- **Elemento assinatura (v2):** o hero usa a lâmina Ouro Negro do próprio catálogo em tela cheia, preto com veio dourado, que é a mesma linguagem das barras do símbolo. A mesma textura aparece no selo de garantia e a Zênite Noturno no fundo do formulário. O ângulo das barras do logo aparece nos marcadores, nos números do passo a passo e no selo.

## Histórico

- v1 (15/10/2026): fundo grafite e hero com as três barras do símbolo mostrando lâminas.
- v2 (15/10/2026): revisão do Malta. Headline trocada, fundo grafite substituído por preto mármore com veio dourado, seguindo a identidade do cliente.

## Estrutura da página

1. Hero: "Lâminas sinterizadas de alto padrão, com estoque a pronta entrega." (headline definida pelo Malta na revisão; a linha acima dela cita "para marmorarias") + coluna com 1 dia útil, 10 anos e 31 padrões
2. Somos distribuidora, não marmoraria (deixa o modelo B2B claro nos primeiros segundos, pedido do briefing)
3. Catálogo Classic com os 31 padrões, filtro por tom e toque para ver a lâmina aplicada no ambiente; cada padrão tem botão de WhatsApp com o nome e código
4. Do pedido à bancada pronta (4 passos)
5. Por que lâmina sinterizada + acabamentos (polido, fosco, acetinado suave, rústico)
6. Showroom imersivo em Praia Grande
7. Para marmorarias, arquitetos e construtoras
8. Garantia de 10 anos (resumo fiel do certificado-garantia.pdf)
9. Faixa Black November B2B (lista de prioridade)
10. Formulário de lead
11. FAQ (8 perguntas, só com fatos do briefing e do certificado)
12. Rodapé com "Desenvolvido pro QH4 Growth"

## O que trocar antes de subir

- [ ] **GTM:** trocar `GTM-XXXXXXX` em `index.html` (2 lugares) e `obrigado.html`. Enquanto tiver XXXX o script não carrega.
- [ ] **Domínio/canonical:** todos os links absolutos usam `https://lp-petra-sinter.vercel.app/` como provisório. Trocar em `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD), `robots.txt` e `sitemap.xml` quando o domínio final estiver definido.
- [ ] **Apps Script (opcional):** colar a URL do Web App em `assets/js/main.js` (`CONFIG.appsScriptUrl`). Vazio, o formulário manda a mensagem completa direto para o WhatsApp.
- [ ] **Remover a faixa Black November** depois de novembro (seção `#black-november` no `index.html`).

## Pendências de briefing (validar com o cliente)

- **Endereço do showroom:** o briefing fala em sede e showroom em Praia Grande, mas o site atual mostra Rua Amador Bueno 38, conj. 54 A, Centro, Santos. A LP usa só "Praia Grande, SP". Confirmar o endereço para colocar no rodapé, no JSON-LD e no GMN.
- **Foto real do showroom:** a seção do showroom usa uma imagem de ambiente do catálogo (Calacatta Gold). Trocar por foto real do espaço quando houver.
- **Preço:** a LP fala em "preço de distribuidor" e "importação direta", com base no resumo do contrato (primeira linha com preço abaixo do mercado). Não cita valores nem país de origem. Validar se o cliente quer citar a origem.
- **Abrangência:** a entrega em 1 dia útil está limitada à Baixada Santista e Litoral, como no briefing. Para outras regiões a LP direciona ao comercial. A meta de dominar o estado de SP pode virar copy quando a logística estiver definida.
- **Acabamento por padrão:** não há no material a relação de acabamento de cada lâmina, então a LP não atribui acabamento por modelo.
- **Grafite Puro:** a pasta não traz o código (só "紫灰岩"). Aparece sem código. Confirmar.
- **Coleção Premium:** o site atual cita uma coleção Premium, mas não vieram fotos nem catálogo. Pode entrar como nova seção quando chegar o material.
- **Informações do site atual que ficaram de fora** por não estarem no briefing: "35 anos de comércio exterior" e "estabilidade até 700 °C". Se o cliente confirmar, podem entrar na seção de tecnologia.
- **Depoimentos:** não há avaliações no GMN ainda (link de avaliação enviado no briefing), então a LP não tem depoimentos.

## Estrutura da pasta

```
LP-Petra-Sinter/
├── index.html
├── obrigado.html          (página de obrigado, redireciona ao WhatsApp em 4 s)
├── 404.html               (erro personalizado)
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── vercel.json            (cache de assets, headers de segurança, noindex no obrigado)
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
        ├── catalogo/      (62 imagens: textura + ambiente dos 31 padrões, WebP 720x540)
        ├── hero-*.webp    (texturas de fundo em 2400 px e versão mobile)
        ├── chapa-*.webp   (chapas inteiras no cavalete, 1400 e 760 px)
        ├── ambiente-*.webp
        ├── logo-petra-sinter*.png, favicon e ícones
        └── og-petra-sinter.jpg (1200x630)
```

Peso total das imagens: cerca de 2 MB, todas otimizadas a partir das fotos originais (que tinham até 19 MB cada). Só as 4 primeiras do catálogo carregam de imediato; o resto é lazy load.

## Stack e comportamento

- HTML, CSS e JS puros, sem build. Sobe direto na Vercel (arrastar a pasta ou `vercel --prod`).
- Botão flutuante de WhatsApp fixo no canto direito.
- Todos os links `.js-wa` montam a mensagem certa pelo contexto (geral, catálogo, showroom, marmoraria, arquiteto, construtora, Black November ou o modelo clicado).
- Formulário: botão nasce desabilitado e só libera com todos os obrigatórios válidos (`checkValidity` em todo input/change); máscara de WhatsApp. Sem Apps Script: abre o WhatsApp com todos os campos preenchidos e leva para `obrigado.html?via=whatsapp`. Com Apps Script: envia o JSON, abre `obrigado.html` e redireciona ao WhatsApp com "Olá, acabei de preencher o formulário no site. Aguardo mais informações."
- Animações: troca de lâminas no hero, parallax leve no hero e no showroom, scroll reveal, microinterações em botões, links e catálogo. Tudo desligado com `prefers-reduced-motion`.

## Eventos de rastreamento (dataLayer)

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | Qualquer botão de WhatsApp | `wa_tipo`, `wa_local`, `wa_modelo` |
| `form_start` | Primeira interação no formulário | |
| `form_submit` | Envio do formulário | `lead_perfil`, `lead_cidade` |
| `lead_obrigado` | Carregou a página de obrigado | |
| `catalogo_filtro` | Clique em filtro de tom | `filtro` |
| `catalogo_ver_todos` | Abriu os 31 padrões | |
| `catalogo_ver_aplicada` | Tocou no padrão para ver aplicado | `modelo` |
| `faq_open` | Abriu uma pergunta | `pergunta` |

Sugestão de conversão principal no Google Ads/Meta: `form_submit` e `whatsapp_click`.

## Checklist de entrega

- [x] SEO: title e description com nicho e cidade, H1 único, hierarquia de títulos, alt em todas as imagens
- [x] JSON-LD: HomeAndConstructionBusiness/WholesaleStore + FAQPage
- [x] Open Graph completo + Twitter Card + imagem 1200x630
- [x] Canonical (provisório, ver pendências)
- [x] robots.txt e sitemap.xml
- [x] site.webmanifest, favicon e apple-touch-icon
- [x] vercel.json
- [x] Página de obrigado
- [x] Página 404 personalizada
- [x] width/height em todas as imagens (CLS) e preload da imagem do hero
- [x] Botão flutuante de WhatsApp
- [x] Responsivo testado em 1440 px e 390 px, sem rolagem horizontal e sem erro de console
- [x] Sem dados inventados: tudo vem do briefing, do certificado de garantia e da pasta de fotos

## Fonte do conteúdo

- Formulário "QH4 | Briefing + Site v2" respondido por João Vitor Rolim
- Resumo de contrato enviado pelo Malta (15/10/2026)
- `Garantia/certificado-garantia.pdf`, `icones-acabamentos.pdf`, pasta `Logo/` e `Fotos - Catalogo Classic/` (31 padrões)
- Site atual petrasinter.com.br (paleta e contatos para comparação)
