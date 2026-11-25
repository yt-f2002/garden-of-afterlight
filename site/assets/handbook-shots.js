(() => {
  'use strict';
  const text=(zh,en)=>({zh,en});
  const shot=(file,zhTitle,enTitle,zhCaption,enCaption)=>({file,title:text(zhTitle,enTitle),caption:text(zhCaption,enCaption)});
  const harvest=shot('garden-harvest','采收香材','Harvest ingredients','成熟后采收，香材进入背包；右上角“去调香”进入工坊。','Harvest mature plants into the backpack, then use Go to perfumery at the top right.');
  const care=shot('care','选择护理并确认','Choose care and confirm','选择耳形和用品，再等待伙伴靠近。用左右箭头回看；三位完成后点击“确认照护记录”。','Choose ears and supplies, then wait for the companion to approach. Review with the arrows and confirm once all three are cared for.');
  window.gardenGuideShots={
    'chapter-1':[harvest,shot('perfume','制作香水','Produce the perfume','试香通过后，核对“库存 / 所需”，点击“用花材制作香水”，再归还香气并结案。','After the scent test, compare stock with required ingredients, produce the perfume, then return the scent and conclude.')],
    'chapter-2':[care],
    'chapter-3':[
      shot('pattern','调整纸样','Adjust the pattern','在“纸样”页选择衣片，拖动控制点调整轮廓，并查看人台预览。','Choose a piece under Paper pattern, drag its control points and check the mannequin preview.'),
      shot('colour','设置颜色','Set the colour','点击“服装颜色”，在颜色面板中选色；人台同步显示效果。','Open Garment colour and choose a colour in the picker. Check the result on the mannequin.'),
      shot('fabric','选择面料与裁剪','Choose fabric and cut','在“材质与裁剪”页点击面料，确认效果后选择“下一步 · 打开裁剪台”。','Choose a swatch under Material & cut, then select Next: Open cutting table.')
    ],
    'chapter-4':[
      shot('metal-investigation','调查透光','Investigate the aperture','展开纸条，比较遮孔与透光效果；记录两条证据后对照观察。','Open the note, compare covered and open apertures, then compare the two recorded observations.'),
      shot('metal-workshop','调整与验证','Adjust and validate','拖动三条滑杆调整叶片，切换中央透光并测试转轴，最后验证作品。','Adjust the three leaf sliders, toggle the aperture and test the pivot, then validate the work.')
    ],
    'chapter-5':[
      shot('runes-investigation','核对投递记录','Check delivery records','对照回执、通知和收件人回应，记录证据后提交推理。','Compare receipts, notifications and replies; record the evidence before submitting the theory.'),
      shot('runes-workshop','编排并试送','Arrange and test delivery','查询选择“待处理信件”，依次点选符文，再“逐封试送”；确认旧档案没有重复投递。','Select pending letters in the query, choose the runes in order and run the delivery trial. Check that archived letters are not sent again.')
    ],
    'chapter-6':[
      shot('stars-investigation','观察星点','Observe the stars','切换岸灯，比较星点变化，将稳定星点的证据收入手记。','Toggle the shore light, compare the stars and record which points remain steady.'),
      shot('stars-workshop','连接与试听','Connect and listen','先选择音长，再点击星点连接；用“试听”检查节拍，“撤销”修正，最后验证。','Choose a note duration before each star. Listen to check the rhythm, undo mistakes and validate the route.')
    ],
    garden:[shot('garden-growing','播种与照料','Plant and tend','选择空花田后播种；下方按钮可浇水或施肥，花田标签显示成熟倒计时。','Select an empty bed and plant. Use the lower buttons to water or fertilize; the bed label shows its growth timer.'),harvest],
    companions:[care],
    defense:[shot('defense','留意生命值与预警','Watch health and warnings','顶部显示 Boss 攻击倒计时；查看灵宠血条与“已倒下”标记，及时调整阵容。','Watch the boss attack countdown at the top and each spirit’s health bar. Check downed markers when reviewing the formation.')]
  };
})();
