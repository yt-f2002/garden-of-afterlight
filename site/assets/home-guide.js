(() => {
  'use strict';
  const frame=document.getElementById('home-guide');
  const section=document.getElementById('controls');
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==frame.contentWindow)return;
    if(event.data?.type==='garden-guide-height'){
      const height=event.data.height;
      if(Number.isFinite(height)&&height>=200&&height<=12000)frame.style.height=Math.ceil(height)+'px';
    }
    if(event.data?.type==='garden-guide-top')section.scrollIntoView({block:'start',behavior:'instant'});
  });
})();
