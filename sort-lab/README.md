# sort/lab

Site de estudo modular sobre algoritmos de ordenação. Hoje só o módulo
**Bucket Sort** está completo; a estrutura já foi pensada para você
acrescentar Selection Sort, Insertion Sort, Quick Sort etc. sem
refazer nada do que já existe.

Não tem build, bundler nem dependências — é HTML/CSS/JS puro. Para
rodar, basta abrir `index.html` no navegador (ou servir a pasta com
qualquer servidor estático, se preferir testar o upload de slides
com `file://` desabilitado por algum navegador mais restritivo).

## Estrutura de pastas

```
sort-lab/
├── index.html              markup de todas as páginas (home + módulo)
├── css/
│   ├── variables.css        cores, fontes, espaçamentos — tokens do design
│   ├── base.css              reset, tipografia base, acessibilidade, blobs
│   ├── components.css        botões (peças pequenas reaproveitadas)
│   ├── layout.css            cabeçalho, navegação, rodapé
│   ├── home.css               hero, tira de barras animada, grade de módulos
│   ├── module.css             subnav, hero do módulo, seções de conteúdo
│   ├── visualizer.css         o demo interativo "como funciona"
│   ├── code.css                abas de código + cores de sintaxe
│   ├── slides.css              galeria de slides + lightbox
│   └── responsive.css          todos os @media juntos, por último
├── js/
│   ├── modules-data.js        registro dos módulos (o que aparece na home)
│   ├── router.js               roteamento por hash + render da grade
│   ├── hero-bars.js            animação decorativa da home
│   ├── visualizer.js           lógica do demo interativo do Bucket Sort
│   ├── code-tabs.js            alternância JS/Python + copiar código
│   └── slides-gallery.js       grade de slides, lightbox, upload
└── assets/
    └── slides/                 as imagens dos slides originais (.jpg)
```

Cada arquivo CSS/JS faz uma coisa só. Se for mexer em alguma parte
específica, o nome do arquivo já indica onde procurar.

## Como adicionar um novo módulo (ex: Quick Sort)

1. **`js/modules-data.js`** — troque `available:false` para `true` no
   objeto do algoritmo dentro do array `MODULES`.
2. **`index.html`** — duplique o bloco inteiro
   `<main id="view-module">...</main>` do Bucket Sort, troque o `id`
   para algo como `view-quick-sort` e reescreva os textos, a tabela
   de complexidade, os cards de prós/contras etc. As classes CSS
   (`.block`, `.concept-card`, `.flow-card`, `.trait-card`,
   `.app-card`, `.complexity-table`, `.ref-item`...) já têm estilo
   pronto — reaproveite-as.
3. **`js/router.js`** — na função `route()`, adicione a condição para
   a nova rota mostrar a `<main>` certa (hoje só existe a condição
   para `bucket-sort`).
4. Se o novo módulo também tiver um demo interativo ou galeria de
   slides, reaproveite os ids `vizStage`/`vizDots`/etc. e
   `slidesGrid`/`slideUploadInput` — `visualizer.js` e
   `slides-gallery.js` já leem esses ids automaticamente, em
   qualquer página onde eles existam.

## Como trocar os slides do Bucket Sort

Troque os arquivos em `assets/slides/` (mantendo os nomes, ou
atualizando a lista `DEFAULT_SLIDES` no topo de
`js/slides-gallery.js`). O botão "+ Adicionar slide" na página deixa
o visitante anexar imagens extras, mas isso fica só na memória da
aba — não é salvo em nenhum servidor.

## Referências usadas no conteúdo do Bucket Sort

- CORMEN, T. H.; LEISERSON, C. E.; RIVEST, R. L.; STEIN, C. *Introduction to Algorithms*. 4. ed. MIT Press, 2022.
- KNUTH, D. E. *The Art of Computer Programming, Volume 3: Sorting and Searching*. 2. ed. Addison-Wesley, 1998.
- SEDGEWICK, R.; WAYNE, K. *Algorithms*. 4. ed. Addison-Wesley, 2011.
- [Bucket sort — Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
- [Bucket Sort — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/bucket-sort-2/)
