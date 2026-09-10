/* ==========================================================
   router.js
   Duas responsabilidades bem separadas:
   1) renderModuleGrid()  -> desenha os cards da home a partir
      de MODULES (definido em modules-data.js).
   2) route()              -> roteamento simples por hash da URL,
      trocando qual <main> fica visível.
   ========================================================== */

function renderModuleGrid(){
  const grid = document.getElementById('moduleGrid');
  if (!grid) return;
  grid.innerHTML = MODULES.map(m => `
    <${m.available ? 'a href="#/'+m.id+'"' : 'div'} class="module-card ${m.available ? 'available' : 'locked'}">
      <span class="tag ${m.available ? 'tag-live' : 'tag-soon'}">${m.available ? 'Disponível' : 'Em construção'}</span>
      <div>
        <h3>${m.name}</h3>
        <p>${m.blurb}</p>
      </div>
    </${m.available ? 'a' : 'div'}>
  `).join('');
}

function route(){
  const hash = location.hash.replace('#','').replace(/^\//,'');
  const home = document.getElementById('view-home');
  const mod = document.getElementById('view-module');

  // Ao adicionar um novo módulo disponível, inclua sua própria
  // condição aqui (ou generalize para várias <main id="view-...">).
  if (hash === 'bucket-sort'){
    home.style.display = 'none';
    mod.style.display = 'block';
  } else {
    home.style.display = 'block';
    mod.style.display = 'none';
    if (hash) window.scrollTo(0,0);
  }
}

function initSubnavScrollSpy(){
  const subnavLinks = document.querySelectorAll('.subnav-link');
  const sectionIds = ['conceito','funcionamento','fluxo','complexidade','forcas','aplicacoes','codigo','referencias','slides'];

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        subnavLinks.forEach(l=>l.classList.remove('active'));
        const link = document.querySelector(`.subnav-link[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sectionIds.forEach(id=>{
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

renderModuleGrid();
window.addEventListener('hashchange', route);
route();
initSubnavScrollSpy();
