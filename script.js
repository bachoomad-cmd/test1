// Reel auto-scroll simple & robust
(function(){
  const track = document.getElementById("reelTrack");
  if(!track) return;

  const speed = 40; // پیکسل بر ثانیه (کمتر = آرام‌تر)
  let rafId = null;
  let paused = false;
  let pos = 0;

  // duplicate content for smooth infinite loop if track width small
  function ensureLoop(){
    const items = Array.from(track.children);
    const totalW = items.reduce((s, it) => s + it.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 18), 0);
    // اگر طول محتوای track کمتر از viewport باشه یا نیاز به حلقه روان داریم، دوبلش کن
    if(totalW < window.innerWidth * 2){
      items.forEach(it => track.appendChild(it.cloneNode(true)));
    }
  }
  ensureLoop();

  // update width-based gap reading (fallback)
  const gap = parseFloat(getComputedStyle(track).gap) || 18;

  function step(timestamp){
    if(!paused){
      pos -= speed / 60; // تقریبی پیکسل در هر frame (60fps)
      // وقتی اسکرول خیلی منفی شد → reset به 0 و حذف/بازنشانی
      const first = track.children[0];
      if(first){
        const firstW = first.getBoundingClientRect().width + gap;
        if(Math.abs(pos) >= firstW){
          // move first to end and increase pos by its width
          pos += firstW;
          track.appendChild(first);
        }
      }
      track.style.transform = `translateX(${pos}px)`;
    }
    rafId = requestAnimationFrame(step);
  }

  // شروع انیمیشن
  rafId = requestAnimationFrame(step);

  // pause on hover
  track.addEventListener("mouseenter", ()=> paused = true);
  track.addEventListener("mouseleave", ()=> paused = false);

  // prev/next buttons
  const prev = document.getElementById("reelPrev");
  const next = document.getElementById("reelNext");
  if(prev){
    prev.addEventListener("click", ()=>{
      // سریع یک گامی به جلو یا عقب
      // برای سادگی: حرکت معکوس یک آیتم عرض
      const children = track.children;
      if(children.length > 0){
        // take last and move to front (simulate previous)
        const last = track.removeChild(children[children.length-1]);
        track.insertBefore(last, children[0]);
      }
    });
  }
  if(next){
    next.addEventListener("click", ()=>{
      // move first to end (simulate next)
      const children = track.children;
      if(children.length > 0){
        const first = track.removeChild(children[0]);
        track.appendChild(first);
      }
    });
  }

  // optional: click on item (example - go to king page or open modal)
  track.addEventListener("click", (e)=>{
    const img = e.target.closest(".reel-item");
    if(!img) return;
    // Example action: open image in new tab (you can customize)
    window.open(img.src, "_blank");
  });

})();
