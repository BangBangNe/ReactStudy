function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = Array.from(document.scripts).find(s => s.src && s.src.includes(src));
    if (existing) {
      if (window.Swiper) return resolve();
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Failed to load script: ' + src)));
      return;
    }

    const s = document.createElement('script');
    s.src = src;
    s.async = false; 
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load script: ' + src));
    document.head.appendChild(s);
  });
}

async function loadSwiperComponent() {
  try {
    await loadScript('./page/js/swiper-bundle.min.js');

    const resp = await fetch('./page/func/swiper.html', { cache: 'no-store' });
    if (!resp.ok) throw new Error('Failed to fetch swiper.html: ' + resp.status);
    const html = await resp.text();

    const container = document.getElementById('swiper-container');
    container.innerHTML = html;

    await new Promise(r => requestAnimationFrame(() => setTimeout(r, 50)));

    const el = document.querySelector('.mySwiper');
    if (!el) {
      console.warn('Không tìm thấy .mySwiper trong DOM sau khi load swiper.html');
      return;
    }

    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 800,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.2,
        slideShadows: true,
      },
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true,
      observeParents: true,
    });
  } catch (err) {
  }
}

loadSwiperComponent();
