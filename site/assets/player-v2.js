'use strict';
const canvas=document.getElementById('canvas'),stage=document.getElementById('stage');
const config=window.GARDEN_CONFIG;
config.canvas=canvas;config.canvasResizePolicy=0;config.ensureCrossOriginIsolationHeaders=false;
const engine=new Engine(config);window.gardenEngine=engine;
function fitCanvas(){
  const r=stage.getBoundingClientRect(),ratio=Math.min(window.devicePixelRatio||1,1.5);
  const width=Math.max(1,Math.round(r.width*ratio)),height=Math.max(1,Math.round(r.height*ratio));
  if(canvas.width!==width)canvas.width=width;
  if(canvas.height!==height)canvas.height=height;
}
new ResizeObserver(fitCanvas).observe(stage);
window.addEventListener('resize',fitCanvas);document.addEventListener('fullscreenchange',fitCanvas);
window.visualViewport?.addEventListener('resize',fitCanvas);fitCanvas();
canvas.addEventListener('contextmenu',event=>event.preventDefault());
const start=document.getElementById('start'),status=document.getElementById('status'),progress=document.getElementById('progress');
start.addEventListener('click',async()=>{
  const missing=Engine.getMissingFeatures({threads:false});
  if(missing.length){status.textContent='This browser is missing: '+missing.join(', ')+'. Please try current Chrome or Edge.';return;}
  start.disabled=true;start.textContent='Opening the garden…';progress.hidden=false;
  try{
    fitCanvas();
    await engine.startGame({onProgress:(current,total)=>{if(total>0){progress.value=current/total*100;status.textContent='Loading '+Math.round(current/1e6)+' / '+Math.round(total/1e6)+' MB';}},onPrint:(...args)=>console.log(...args),onPrintError:(...args)=>console.error(...args)});
    document.getElementById('launch').hidden=true;window.gardenStarted=true;fitCanvas();
    if(!help.hidden){window.gardenPause?.();closeHelp.focus();}else canvas.focus();
  }catch(error){console.error(error);status.textContent='Could not start the game. Reload and try again. '+error.message;start.disabled=false;start.textContent='Try again';}
});
const fullscreen=document.getElementById('fullscreen');
fullscreen.addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch{fullscreen.textContent='Use browser fullscreen (F11)';}
});
document.addEventListener('fullscreenchange',()=>{fullscreen.textContent=document.fullscreenElement?'Exit fullscreen':'Fullscreen';});
const showBar=document.getElementById('show-bar');
document.getElementById('hide-bar').addEventListener('click',()=>{document.body.classList.add('bar-hidden');showBar.hidden=false;canvas.focus();});
showBar.addEventListener('click',()=>{document.body.classList.remove('bar-hidden');showBar.hidden=true;document.getElementById('help-toggle').focus();});
const help=document.getElementById('help'),toggle=document.getElementById('help-toggle'),closeHelp=document.getElementById('close-help');
const handbookFrame=document.getElementById('handbook-frame');
let returnFocus;
function setHelp(open){
  stage.inert=open;document.querySelector('.player-bar').inert=open;showBar.inert=open;
  if(open){returnFocus=document.activeElement;help.hidden=false;toggle.setAttribute('aria-expanded','true');document.body.classList.add('guide-open');window.gardenPause?.();if(!handbookFrame.src)handbookFrame.src=handbookFrame.dataset.src;closeHelp.focus();}
  else{help.hidden=true;toggle.setAttribute('aria-expanded','false');document.body.classList.remove('guide-open');window.gardenResume?.();(returnFocus||canvas).focus();}
}
toggle.addEventListener('click',()=>setHelp(help.hidden));
document.getElementById('launch-guide').addEventListener('click',()=>setHelp(true));
closeHelp.addEventListener('click',()=>setHelp(false));
help.addEventListener('click',event=>{if(event.target===help)setHelp(false);});
document.addEventListener('keydown',event=>{
  if(help.hidden)return;
  if(event.key==='Escape'){event.preventDefault();setHelp(false);}
  if(event.key==='Tab'){
    if(event.shiftKey&&document.activeElement===closeHelp){
      const controls=[...(handbookFrame.contentDocument?.querySelectorAll('a[href],button,input,summary')||[])].filter(x=>x.getClientRects().length&&!x.disabled);
      if(controls.length){event.preventDefault();controls.at(-1).focus();}
    }
  }
});
window.addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==handbookFrame.contentWindow||help.hidden)return;
  if(event.data?.type==='garden-handbook-close')setHelp(false);
  if(event.data?.type==='garden-handbook-focus-close')closeHelp.focus();
});
