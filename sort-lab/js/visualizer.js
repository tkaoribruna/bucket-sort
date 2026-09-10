/* ==========================================================
   visualizer.js
   Demo interativo do módulo Bucket Sort: 4 fases navegáveis
   (array original -> scatter -> sort -> gather).

   Se algum dia isso virar um componente compartilhado entre
   módulos, o ponto de entrada é bucketVisualizer() — basta
   generalizar BUCKET_COUNT e a lógica de bucketing para
   receber o algoritmo como parâmetro.
   ========================================================== */

try {
  (function bucketVisualizer(){
    const stageEl = document.getElementById('vizStage');
    if (!stageEl) return; // esta página não tem o visualizador

    const BUCKET_COUNT = 5;
    let currentArray = [11,9,21,8,17,19,13,1,24,12];
    let step = 0; // 0..3

    const phaseLabel = document.getElementById('vizPhaseLabel');
    const dotsEl = document.getElementById('vizDots');
    const hintEl = document.getElementById('vizHint');
    const prevBtn = document.getElementById('vizPrevBtn');
    const nextBtn = document.getElementById('vizNextBtn');
    const shuffleBtn = document.getElementById('vizShuffleBtn');

    const PHASES = [
      { title:'Array original', hint:'Este é o array de entrada, sem nenhuma organização.' },
      { title:'Scatter — distribuição nos baldes', hint:'Cada valor é mapeado para um balde de acordo com seu intervalo.' },
      { title:'Sort — ordenação interna', hint:'Cada balde é ordenado individualmente, de forma independente.' },
      { title:'Gather — array final', hint:'Os baldes são concatenados em ordem, formando o resultado ordenado.' },
    ];

    function computeBuckets(arr){
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const range = (max - min + 1) / BUCKET_COUNT;
      const buckets = Array.from({length:BUCKET_COUNT}, ()=>[]);
      const ranges = [];
      for (let i=0;i<BUCKET_COUNT;i++){
        const start = Math.round(min + i*range);
        const end = i === BUCKET_COUNT-1 ? max : Math.round(min + (i+1)*range);
        ranges.push([start,end]);
      }
      arr.forEach(v=>{
        let idx = Math.floor((v-min)/range);
        if (idx >= BUCKET_COUNT) idx = BUCKET_COUNT-1;
        buckets[idx].push(v);
      });
      return { buckets, ranges };
    }

    function renderDots(){
      dotsEl.innerHTML = PHASES.map((_,i)=>`<button data-step="${i}" class="${i===step?'active':''}" aria-label="Fase ${i+1}"></button>`).join('');
    }

    function render(){
      phaseLabel.textContent = `Fase ${step+1} de 4 — ${PHASES[step].title}`;
      hintEl.textContent = PHASES[step].hint;
      renderDots();
      prevBtn.disabled = step === 0;
      nextBtn.textContent = step === 3 ? 'Reiniciar fases ↺' : 'Próximo →';

      const { buckets, ranges } = computeBuckets(currentArray);

      if (step === 0){
        stageEl.innerHTML = `<div class="viz-row">${currentArray.map(v=>`<div class="viz-chip">${v}</div>`).join('')}</div>`;
      } else if (step === 1){
        stageEl.innerHTML = `<div class="viz-buckets">${buckets.map((b,i)=>`
          <div class="viz-bucket">
            <div class="items">${b.map(v=>`<div class="viz-chip">${v}</div>`).join('')}</div>
            <div class="range">${ranges[i][0]}–${ranges[i][1]}</div>
          </div>`).join('')}</div>`;
      } else if (step === 2){
        stageEl.innerHTML = `<div class="viz-buckets">${buckets.map((b,i)=>`
          <div class="viz-bucket sorted">
            <div class="items">${[...b].sort((a,c)=>a-c).map(v=>`<div class="viz-chip">${v}</div>`).join('')}</div>
            <div class="range">${ranges[i][0]}–${ranges[i][1]}</div>
          </div>`).join('')}</div>`;
      } else {
        const sorted = buckets.flatMap(b=>[...b].sort((a,c)=>a-c));
        stageEl.innerHTML = `<div class="viz-final">
          <span class="success">✓ array ordenado</span>
          <div class="viz-row">${sorted.map(v=>`<div class="viz-chip">${v}</div>`).join('')}</div>
        </div>`;
      }
    }

    nextBtn.addEventListener('click', ()=>{
      step = step === 3 ? 0 : step + 1;
      render();
    });
    prevBtn.addEventListener('click', ()=>{
      if (step > 0){ step -= 1; render(); }
    });
    dotsEl.addEventListener('click', (e)=>{
      if (e.target.dataset.step !== undefined){
        step = Number(e.target.dataset.step);
        render();
      }
    });
    shuffleBtn.addEventListener('click', ()=>{
      const n = 8 + Math.floor(Math.random()*4);
      currentArray = Array.from({length:n}, ()=>1 + Math.floor(Math.random()*90));
      step = 0;
      render();
    });

    render();
  })();
} catch(e){ console.error('visualizer failed:', e); }
