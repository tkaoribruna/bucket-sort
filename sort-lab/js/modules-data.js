/* ==========================================================
   modules-data.js
   Registro central dos módulos que aparecem na home.

   COMO ADICIONAR UM NOVO ALGORITMO:
   1. Acrescente um objeto novo no array MODULES abaixo, com
      "available: true" e um "id" (vira a rota, ex: #/quick-sort).
   2. Em index.html, copie o bloco <main id="view-module"> do
      Bucket Sort, troque o id para "view-<seu-id>" e adapte
      o conteúdo (título, textos, tabela de complexidade etc).
   3. Em js/router.js, adicione uma condição para essa rota
      mostrar a <main> correspondente.

   O visualizador, as abas de código e a galeria de slides
   (visualizer.js, code-tabs.js, slides-gallery.js) já
   funcionam por seletor de classe/id, então continuam
   funcionando em módulos novos desde que você reaproveite as
   mesmas classes CSS.
   ========================================================== */

const MODULES = [
  { id:'bucket-sort',    name:'Bucket Sort',    blurb:'Distribua, ordene e junte — o método scatter-gather explicado passo a passo.', available:true },
  { id:'selection-sort', name:'Selection Sort', blurb:'Seleciona o menor elemento restante a cada passagem pelo array.', available:false },
  { id:'insertion-sort', name:'Insertion Sort', blurb:'Constrói a sequência ordenada um elemento de cada vez.', available:false },
  { id:'quick-sort',     name:'Quick Sort',     blurb:'Particiona o array em torno de um pivô e recorre.', available:false },
  { id:'merge-sort',     name:'Merge Sort',     blurb:'Divide, ordena as metades e mescla os resultados.', available:false },
  { id:'heap-sort',      name:'Heap Sort',      blurb:'Usa uma heap binária para extrair o maior elemento por vez.', available:false },
];
