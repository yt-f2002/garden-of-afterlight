(() => {
  'use strict';
  const pair=(zh,en)=>({zh,en});
  const copy={
    skip:pair('跳到正文','Skip to content'),guide:pair('玩法指南','How to play'),play:pair('进入游戏','Play the demo'),
    bio:pair('我想通过这座庭院，找回被生活搁置的天赋，继续那些曾经未完成、未来仍想做的事。','Through this garden, I want to rediscover talents set aside by everyday life, return to what I left unfinished, and pursue what I still hope to do.'),
    study:pair('学习方向','Study areas'),fashion:pair('服装设计与工程','Fashion design & engineering'),creative:pair('艺术与机器创造','Arts & machine creativity'),
    experience:pair('做过的事','Experience'),evaluation:pair('AI 产品评测','AI product evaluation'),effects:pair('AI 视频特效','AI video effects'),brand:pair('品牌内容','Brand content'),interaction:pair('游戏交互设计','Game interaction design'),visuals:pair('视觉素材制作','Visual asset creation'),godot:pair('Godot 整合','Godot integration'),
    contact:pair('合作 / 工作联系','For collaborations & work'),
    garden:pair('生活与工作可能让人被异化，逐渐放下、丢弃，甚至遗忘自己最初的天赋。《遗光之庭》从找回这些天赋的愿望出发。','Life and work can alienate us from ourselves, leading us to set aside, abandon or forget our earliest talents. Garden of Afterlight begins with the wish to rediscover them.'),
    role:pair('这座虚拟幻想世界，承载着我想找回的、曾经未完成的，以及未来想继续的事，也是我理想精神世界的缩影。','This imagined world holds what I want to recover, what I once left unfinished, and what I hope to continue in the future. It is a reflection of my ideal inner world.'),
    workflowTitle:pair('制作流程','Production process'),workflowIntro:pair('点击阶段，查看创作分工、工具与产出。','Select a stage to see the decisions, tools and output.'),
  };
  const stages=[
    {title:pair('故事与玩法','Story & gameplay'),hint:pair('定义体验','Define the experience'),subtitle:pair('确定章节目标与操作流程。','Define chapter goals and interaction steps.'),icon:'<path d="M4 5c4-2 7-1 8 0 2-1 5-2 8 0v15c-3-2-6-2-8-1-2-1-5-1-8 1Z M12 5v14"/>',human:pair('设定世界观、章节情绪、角色关系与核心交互；决定哪些想法值得保留。','Define the world, chapter mood, character relationships and core interactions; decide which ideas to keep.'),tools:pair('借助 ChatGPT 整理设计文档、梳理叙事逻辑和操作步骤。','Use ChatGPT to organize design documents, narrative logic and interaction steps.'),output:pair('章节结构、玩法规则，以及下一步需要制作的素材清单。','Chapter structure, gameplay rules and a list of assets to create.')},
    {title:pair('视觉素材','Visual assets'),hint:pair('建立世界风格','Give the world a look'),subtitle:pair('制作场景、人物和物件素材。','Create scene, character and object assets.'),icon:'<path d="M5 4h14v16H5Z M8 15l4-5 4 5 M8 17h8"/><circle cx="9" cy="8" r="1"/>',human:pair('确定配色、构图与材质，挑选可用版本并检查整套素材的一致性。','Set the palette, composition and materials; select usable variations and check consistency.'),tools:pair('使用 ImageGen 探索场景、角色和物件图像，通过提示词与反馈反复调整。','Explore scenes, characters and objects with ImageGen, refining them through prompts and feedback.'),output:pair('可整合进游戏的场景背景、角色图像与物件素材。','Scene backgrounds, character images and object assets ready for integration.')},
    {title:pair('Godot 实现','Godot implementation'),hint:pair('场景与交互','Scenes & interactions'),subtitle:pair('整合素材，实现操作与反馈。','Integrate assets and implement actions and feedback.'),icon:'<path d="m8 6-5 6 5 6 M16 6l5 6-5 6 M14 4l-4 16"/>',human:pair('决定操作逻辑、场景衔接与反馈，检查生成代码是否实现预期体验。','Decide interaction logic, scene transitions and feedback; check that generated code matches the intended experience.'),tools:pair('在 Godot 中整合素材和场景；Codex 辅助 GDScript 实现、调试与检查。','Integrate assets and scenes in Godot, with Codex assisting GDScript implementation, debugging and checks.'),output:pair('能够从剧情进入交互、再回到故事推进的试玩版本。','A playable build connecting story scenes, interactive activities and progression.')},
    {title:pair('试玩与打磨','Playtest & refine'),hint:pair('检查与修改','Check & revise'),subtitle:pair('检查流程、文字和提示。','Check the flow, text and guidance.'),icon:'<circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5 M8 10l1.5 1.5L12 8"/>',human:pair('试玩关键流程，检查文字、提示、节奏和存档；根据体验取舍改动。','Play through key flows, review text, cues, pacing and saves, then prioritize changes from the experience.'),tools:pair('结合 Godot 调试输出、浏览器检查与 Codex 辅助定位问题，修改后再次验证。','Combine Godot debug output, browser checks and Codex-assisted diagnosis; verify the flow again after changes.'),output:pair('更清楚的提示、更顺畅的交互，以及下一轮改进清单。','Clearer cues, smoother interactions and the next set of improvements.')},
    {title:pair('网页发布','Browser release'),hint:pair('导出与部署','Export & deploy'),subtitle:pair('导出网页版并发布试玩。','Export and publish the browser demo.'),icon:'<path d="M3 5h18v14H3Z M3 9h18 M8 5v4 M12 12v5 M10 14l2-2 2 2"/>',human:pair('编写项目介绍与玩法手册，明确版本范围，检查链接和网页显示。','Write the project introduction and handbook, describe the build’s scope, and review links and presentation.'),tools:pair('Godot Web 导出；GitHub 管理版本，GitHub Actions 与 Pages 发布网页。','Export for the web with Godot; manage versions on GitHub and publish through GitHub Actions and Pages.'),output:pair('在线试玩、可搜索的教程，以及持续更新的公开项目页面。','An online demo, searchable guidance and a public project site that can keep evolving.')}
  ];
  let lang='en',active=0;
  try{lang=localStorage.getItem('garden-handbook-language')||(navigator.language.startsWith('zh')?'zh':'en');}catch{}
  if(!['zh','en'].includes(lang))lang='en';
  const word=p=>p[lang], $=id=>document.getElementById(id);
  const inline=new URLSearchParams(location.search).get('inline')==='1';
  if(inline){document.body.classList.add('about-inline');document.querySelectorAll('a[href]').forEach(a=>{if(!a.getAttribute('href').startsWith('mailto:'))a.target='_top';});}
  function renderDetail(){
    const s=stages[active];
    document.querySelectorAll('.workflow-step').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===active));button.tabIndex=i===active?0:-1;});
    $('workflow-detail').setAttribute('aria-labelledby',`step-${active}`);
    $('workflow-detail').innerHTML=`<div class="detail-heading"><svg viewBox="0 0 24 24" aria-hidden="true">${s.icon}</svg><div><h3>${word(s.title)}</h3><p>${word(s.subtitle)}</p></div></div><div class="detail-columns">${[['human',pair('人的创作决定','Human decisions')],['tools',pair('AI 与制作工具','AI & production tools')],['output',pair('这一阶段的产出','What comes out')]].map(([key,label])=>`<div><h4>${word(label)}</h4><p>${word(s[key])}</p></div>`).join('')}</div>`;
  }
  function render(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.querySelector('.creator-avatar').alt=lang==='zh'?'作者头像':'Creator portrait';
    document.title='About — Garden of Afterlight';
    document.querySelectorAll('[data-copy]').forEach(n=>n.innerHTML=word(copy[n.dataset.copy]));
    $('language').textContent=lang==='zh'?'English':'中文';$('language').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
    $('workflow-steps').setAttribute('aria-label',lang==='zh'?'制作流程阶段':'Production stages');
    $('workflow-steps').innerHTML=stages.map((s,i)=>`<button class="workflow-step" id="step-${i}" type="button" role="tab" aria-selected="${i===active}" aria-controls="workflow-detail" tabindex="${i===active?0:-1}" data-step="${i}"><span class="step-number" aria-hidden="true">0${i+1}</span><span><span class="step-title">${word(s.title)}</span><small>${word(s.hint)}</small></span></button>`).join('');
    renderDetail();
  }
  $('workflow-steps').addEventListener('click',event=>{const b=event.target.closest('[data-step]');if(b){active=Number(b.dataset.step);renderDetail();}});
  $('workflow-steps').addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;
    event.preventDefault();active=event.key==='Home'?0:event.key==='End'?4:(active+(['ArrowRight','ArrowDown'].includes(event.key)?1:4))%5;
    renderDetail();$(`step-${active}`).focus();
  });
  $('language').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';try{localStorage.setItem('garden-handbook-language',lang);}catch{}render();});
  window.addEventListener('storage',event=>{if(event.key==='garden-handbook-language'&&['zh','en'].includes(event.newValue)){lang=event.newValue;render();}});
  render();
  if(inline){
    const reportHeight=()=>parent.postMessage({type:'garden-about-height',height:Math.ceil(document.body.getBoundingClientRect().height),ready:document.readyState==='complete'},location.origin);
    new ResizeObserver(reportHeight).observe(document.body);
    window.addEventListener('load',reportHeight);
    reportHeight();
  }
})();
