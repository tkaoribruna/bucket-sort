/* ==========================================================
   code-tabs.js
   Alterna entre as abas de linguagem na seção "Código-fonte"
   e copia o snippet ativo para a área de transferência.
   ========================================================== */

try {
  (function codeTabs(){
    const tabs = document.querySelectorAll('.code-tab');
    if (!tabs.length) return;

    const blocks = document.querySelectorAll('.code-block');
    const fileName = document.getElementById('codeFileName');
    const names = { js:'bucket-sort.js', py:'bucket_sort.py' };

    tabs.forEach(tab=>{
      tab.addEventListener('click', ()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        blocks.forEach(b=>b.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`.code-block[data-lang="${tab.dataset.lang}"]`).classList.add('active');
        if (fileName) fileName.textContent = names[tab.dataset.lang] || '';
      });
    });

    const copyBtn = document.getElementById('copyCodeBtn');
    if (copyBtn){
      copyBtn.addEventListener('click', (e)=>{
        const active = document.querySelector('.code-block.active pre');
        if (!active || !navigator.clipboard) return;
        navigator.clipboard.writeText(active.innerText).then(()=>{
          const btn = e.target;
          const original = btn.textContent;
          btn.textContent = 'Copiado ✓';
          setTimeout(()=>{ btn.textContent = original; }, 1600);
        });
      });
    }
  })();
} catch(e){ console.error('code-tabs failed:', e); }
