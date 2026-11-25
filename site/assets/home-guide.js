(() => {
  'use strict';
  const sections=[
    {frame:document.getElementById('home-guide'),section:document.getElementById('controls'),height:'garden-guide-height',top:'garden-guide-top'},
    {frame:document.getElementById('home-about'),section:document.getElementById('about'),height:'garden-about-height'}
  ];
  let alignInitialAnchor=['#controls','#about'].includes(location.hash);
  ['wheel','touchstart','pointerdown','keydown'].forEach(type=>window.addEventListener(type,()=>{alignInitialAnchor=false;},{once:true,passive:true}));
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin)return;
    const item=sections.find(item=>item.frame&&event.source===item.frame.contentWindow);
    if(!item)return;
    if(event.data?.type===item.height){
      const height=event.data.height;
      if(Number.isFinite(height)&&height>=200&&height<=12000)item.frame.style.height=Math.ceil(height)+'px';
      item.ready=event.data.ready===true;
      if(sections.some(section=>document.activeElement===section.frame))alignInitialAnchor=false;
      if(alignInitialAnchor){
        const target=sections.find(section=>'#'+section.section.id===location.hash);
        if(target){
          target.section.scrollIntoView({block:'start',behavior:'instant'});
          const required=location.hash==='#about'?sections:[target];
          if(required.every(section=>section.ready))alignInitialAnchor=false;
        }
      }
    }
    if(item.top&&event.data?.type===item.top)item.section.scrollIntoView({block:'start',behavior:'instant'});
  });
})();
