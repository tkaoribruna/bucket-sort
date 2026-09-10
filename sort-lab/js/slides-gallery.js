/* ==========================================================
   slides-gallery.js
   Grade de slides + lightbox de ampliação + upload de novos
   slides (guardados só na memória da aba, sem servidor).

   Para trocar os slides padrão, edite DEFAULT_SLIDES abaixo —
   os caminhos são relativos a index.html.
   ========================================================== */

try {
  (function slidesGallery(){
    const grid = document.getElementById('slidesGrid');
    if (!grid) return; // esta página não tem galeria de slides

    const DEFAULT_SLIDES = [
      'assets/slides/01-capa.jpg',
      'assets/slides/02-sumario.jpg',
      'assets/slides/03-introducao.jpg',
      'assets/slides/04-scatter-gather.jpg',
      'assets/slides/05-funcionamento.jpg',
      'assets/slides/06-fluxo-execucao.jpg',
      'assets/slides/07-complexidade.jpg',
      'assets/slides/08-pontos-fortes-fracos.jpg',
    ];

    let SLIDES = DEFAULT_SLIDES.slice();

    const uploadInput = document.getElementById('slideUploadInput');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    let activeIndex = 0;

    function renderGrid(){
      grid.innerHTML = SLIDES.map((src,i)=>`
        <div class="slide-thumb" data-index="${i}">
          <img src="${src}" alt="Slide ${i+1} da apresentação" loading="lazy">
          <span class="idx">${i+1}/${SLIDES.length}</span>
        </div>
      `).join('') + `
        <div class="slide-thumb add-slide" id="addSlideThumb">
          <span style="font-size:22px;">+</span>
          <span>Adicionar slide</span>
        </div>
      `;
      grid.querySelectorAll('.slide-thumb[data-index]').forEach(el=>{
        el.addEventListener('click', ()=> openLightbox(Number(el.dataset.index)));
      });
      const addThumb = document.getElementById('addSlideThumb');
      if (addThumb && uploadInput){
        addThumb.addEventListener('click', ()=> uploadInput.click());
      }
    }

    function openLightbox(i){
      activeIndex = i;
      lightboxImg.src = SLIDES[i];
      lightboxCounter.textContent = `${i+1} / ${SLIDES.length}`;
      lightbox.classList.add('open');
    }
    function closeLightbox(){ lightbox.classList.remove('open'); }
    function step(delta){
      activeIndex = (activeIndex + delta + SLIDES.length) % SLIDES.length;
      lightboxImg.src = SLIDES[activeIndex];
      lightboxCounter.textContent = `${activeIndex+1} / ${SLIDES.length}`;
    }

    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', ()=>step(-1));
    if (nextBtn) nextBtn.addEventListener('click', ()=>step(1));
    if (lightbox){
      lightbox.addEventListener('click', (e)=>{ if (e.target === lightbox) closeLightbox(); });
    }
    window.addEventListener('keydown', (e)=>{
      if (!lightbox || !lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });

    if (uploadInput){
      uploadInput.addEventListener('change', (e)=>{
        const files = Array.from(e.target.files || []);
        let pending = files.length;
        if (!pending) return;
        files.forEach(file=>{
          const reader = new FileReader();
          reader.onload = () => {
            SLIDES.push(reader.result);
            pending -= 1;
            if (pending === 0) renderGrid();
          };
          reader.readAsDataURL(file);
        });
        uploadInput.value = '';
      });
    }

    renderGrid();
  })();
} catch(e){ console.error('slides-gallery failed:', e); }
