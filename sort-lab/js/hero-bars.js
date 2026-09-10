/* ==========================================================
   hero-bars.js
   Tira de barras decorativa no topo da home — só embaralha
   alturas aleatórias em loop. Puramente visual.
   ========================================================== */

try {
  (function heroBars(){
    const strip = document.getElementById('heroBars');
    if (!strip) return;

    const count = 22;
    const bars = [];
    for (let i=0;i<count;i++){
      const bar = document.createElement('div');
      bar.className = 'bar';
      strip.appendChild(bar);
      bars.push(bar);
    }

    const prefersReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    function shuffle(){
      bars.forEach(b => { b.style.height = (8 + Math.random()*96) + '%'; });
    }
    shuffle();

    if (!prefersReduced){
      setInterval(shuffle, 2600);
    }
  })();
} catch(e){ console.error('hero-bars failed:', e); }
