(() => {
  'use strict';
  const pair=(zh,en)=>({zh,en});
  const copy={
    skip:pair('跳到正文','Skip to content'),about:pair('关于','About'),guide:pair('玩法指南','How to play'),play:pair('进入庭院','Enter the garden'),
    eyebrow:pair('遗光之庭','Garden of Afterlight'),title:pair('关于项目','About the project'),lede:pair('使用 Godot 制作的剧情与手作游戏。<br>内容涵盖调查、守线、调香、护理和工坊制作。','A story and crafting game built with Godot.<br>Explore, investigate, defend and create in six chapters.'),caption:pair('制衣工坊场景','Dressmaking workshop'),
    creator:pair('作者','Creator'),creatorTitle:pair('作者简介','Creator profile'),
    bio:pair('服装设计与工程背景，现就读于香港科技大学艺术与机器创造专业。曾参与 Video Rebirth 的 AI 产品评测、美图的 AI 视频特效制作及李宁的品牌内容工作。','I have a background in Fashion Design and Engineering and currently study Arts and Machine Creativity at HKUST. My experience includes AI product evaluation at Video Rebirth, AI video effects at Meitu, and brand content at Li-Ning.'),
    bioTwo:pair('本项目由我负责世界观、玩法、视觉方向及整合，使用 AI 辅助素材和代码制作。','For this project, I direct the world, gameplay, visual design and integration, with AI assistance for assets and code.'),
    contact:pair('合作 / 工作联系','For collaborations & work'),process:pair('工作流','Workflow'),workflowTitle:pair('制作流程','Production process'),workflowIntro:pair('点击阶段，查看创作分工、工具与产出。','Select a stage to see the decisions, tools and output.'),
    iterate:pair('试玩反馈用于下一轮故事、素材和交互修改。','Playtest feedback informs the next revision of the story, assets and interactions.'),
    growing:pair('版本说明','Versions'),growingText:pair('剧情试玩与 3D 探索原型共享同一个世界。3D 版目前提供第一人称空间探索，尚未实现独立的 3D 玩法。','The story demo and 3D exploration prototype share one world. The 3D version currently offers first-person exploration; dedicated 3D gameplay is not yet implemented.'),credits:pair('项目说明与致谢','Project notes & credits')
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
  function renderDetail(){
    const s=stages[active];
    document.querySelectorAll('.workflow-step').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===active));button.tabIndex=i===active?0:-1;});
    $('workflow-detail').setAttribute('aria-labelledby',`step-${active}`);
    $('workflow-detail').innerHTML=`<div class="detail-heading"><svg viewBox="0 0 24 24" aria-hidden="true">${s.icon}</svg><div><h3>${word(s.title)}</h3><p>${word(s.subtitle)}</p></div></div><div class="detail-columns">${[['human',pair('人的创作决定','Human decisions')],['tools',pair('AI 与制作工具','AI & production tools')],['output',pair('这一阶段的产出','What comes out')]].map(([key,label])=>`<div><h4>${word(label)}</h4><p>${word(s[key])}</p></div>`).join('')}</div>`;
  }
  function render(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.title=(lang==='zh'?'关于项目':'About the project')+' — Garden of Afterlight';
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
  render();
})();
