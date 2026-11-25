'use strict';
// Disabled until the owner configures an endpoint. No SDK, page tracking or personal data.
(() => {
  const key='garden-ending-choice-v1';
  let sending=false, memory=null;
  const read=()=>{try{return JSON.parse(localStorage.getItem(key)||'null')||memory;}catch{return memory;}};
  const write=value=>{memory=value;try{localStorage.setItem(key,JSON.stringify(value));}catch{}};
  const settings=fetch('../assets/ending-analytics.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  async function flush(){
    const config=await settings, record=read();
    if(sending||!record||record.sent||config.enabled!==true||window.GARDEN_TRIAL_CHAPTER)return;
    let endpoint;try{endpoint=new URL(config.endpoint);}catch{return;}
    if(endpoint.protocol!=='https:')return;
    sending=true;
    const abort=new AbortController(),timer=setTimeout(()=>abort.abort(),6000);
    try{
      const response=await fetch(endpoint.href,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(record.event),credentials:'omit',referrerPolicy:'no-referrer',keepalive:true,signal:abort.signal});
      if(response.ok)write({...record,sent:true});
    }catch{}finally{clearTimeout(timer);sending=false;}
  }
  window.gardenRecordEnding=choice=>{
    if(!['reality','garden'].includes(choice)||window.GARDEN_TRIAL_CHAPTER)return;
    if(!read())write({sent:false,event:{event:'ending_choice',choice,event_id:crypto.randomUUID(),version:2}});
    void flush();
  };
  window.addEventListener('online',()=>void flush());
  void flush();
})();
