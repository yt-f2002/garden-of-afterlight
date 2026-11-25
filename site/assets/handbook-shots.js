(() => {
  'use strict';
  const text=(zh,en)=>({zh,en});
  const shot=(file,zhTitle,enTitle,zhCaption,enCaption)=>({file,title:text(zhTitle,enTitle),caption:text(zhCaption,enCaption)});
  const home=shot('home','从庭院出发','Start in the courtyard','左侧有订单、商店和花园；跟随伙伴与金色高光进入当前剧情。六艺总入口目前筹备中，章节工坊正常开放。','Orders, Shop and Garden are on the left. Follow the companion and gold highlight into the current story. The general Six Arts menu is coming soon; chapter workshops remain open.');
  const harvest=shot('garden-harvest','采收香材','Harvest ingredients','成熟花田会长满植株。悬停或选中花田，用圆形收割按钮采摘；也可使用“收获成熟花材”。','Mature beds fill with plants. Hover over or select a bed and use its round harvest control, or choose Harvest ready crops.');
  const care=shot('care','准备用品并观察','Offer supplies and observe','选择软垫、食物或玩具，靠近观察，再退后等待。三位神兽的身份自动记录，不需要选择耳形。','Offer a cushion, food or toy, approach to observe, then step back and wait. Each spirit is recorded automatically; there is no ear selector.');
  window.gardenGuideShots={
    welcome:[home,shot('backpack','查看随身物品','Check your backpack','背包显示实际种子、花材、图纸和神兽饲养记录。点击物品查看数量和用途。','The backpack shows your seeds, harvested ingredients, recipes and Spirit Care Record. Select an item to inspect its quantity and use.')],
    'chapter-1':[harvest,shot('perfume','向单个瓶子投料','Fill the mixing bottle','点击香材或将它拖进瓶中，配满十二份；界面显示三种香材的建议范围。','Click an ingredient or drag it into the bottle. Add twelve portions in total, using the displayed ranges.'),shot('perfume-shake','摇匀后提交','Shake, then submit','配料完成后点击“摇匀”，再提交验证。未摇匀时无法完成配方。','Once all portions are added, choose Shake before submitting the blend for validation.'),shot('perfume-product','完成香水作品','Finish the perfume','通过验证后保留真实配方；按章末提示将成品展出或出售。','The validated perfume keeps your actual recipe. Follow the chapter conclusion to exhibit or sell the finished piece.')],
    'chapter-2':[care],
    'chapter-3':[
      shot('pattern','调整纸样','Adjust the pattern','选择衣片，拖动控制点调整轮廓，并对照同一台人台预览。','Choose a panel, drag its pattern points and check the same mannequin preview.'),
      shot('colour','选择服装颜色','Choose a garment colour','服装颜色独立于面料；选色会应用到衣身、袖片与裙片。','Garment colour is independent of the fabric and applies to the body, sleeves and skirt.'),
      shot('fabric','保留颜色，更换花纹','Keep the colour, change the weave','更换织纹时保留你选择的染色。确认面料后进入裁剪台。','Changing the weave keeps your chosen dye colour. Confirm the material, then open the cutting table.')
    ],
    'chapter-4':[
      shot('metal-investigation','调查首饰与场合','Investigate the jewelry','阅读留下的记录，操作现场装置，对照两项观察后提交推理。','Read the surviving record, test the apparatus and compare both observations before submitting your theory.'),
      shot('metal-workshop','制作宝石首饰','Make gem jewelry','依次开采、选宝石、切磨、选款、镶嵌和抛光。切磨与抛光时按住宝石，进度环会显示完成比例；松开或移开即暂停。','Mine, select, cut and grind, choose a setting, set and polish. Hold the stone during cutting or polishing and watch the progress ring; release or move away to pause.'),
      shot('metal-complete','展出或出售首饰','Exhibit or sell the jewel','每次完整制作产生一件真实首饰。展出或出售后，首次结章会进入下一章。','Each completed process produces a real piece. Exhibiting or selling it advances a first-time chapter conclusion.')
    ],
    'chapter-5':[
      shot('runes-investigation','核对投递记录','Check delivery records','对照回执、通知和回应，记录证据后提交推理。','Compare receipts, notifications and replies; record the evidence before submitting the theory.'),
      shot('runes-workshop','组装符文字符','Assemble rune characters','金光提示当前操作：选择待处理信件，再点圆徽编排符文。手型和光圈表示可点，数字表示已选顺序；试送后检查回应和超时路径。','Follow the gold highlight: query pending letters, then choose rune badges. A hand cursor and halo mark clickable badges; numbers show their selected order. Run the trial and review reply and timeout paths.')
    ],
    'chapter-6':[
      shot('stars-investigation','观察稳定星点','Observe steady stars','切换岸灯比较星点变化，把稳定星点的证据收入手记。','Toggle the shore light, compare the stars and record which points remain steady.'),
      shot('stars-workshop','连接星辰乐谱','Connect a star score','根据获得的岸灯星谱，选择音长并依次连接星点；可试听、撤销并验证。','Use the Shorelight Star Score, choose durations and connect the stars. Listen, undo and validate your arrangement.')
    ],
    garden:[shot('garden-growing','悬停花田展开工具','Hover to reveal the tools','平时每块地显示当前阶段的半透明图标；悬停、键盘聚焦或点击后展开播种、浇水、施肥、收割四个圆形按钮。','Each bed normally shows one translucent stage icon. Hover, focus or tap to reveal its round plant, water, fertilize and harvest controls.'),harvest,shot('garden-after','收割后继续种植','Plant again after harvest','收割后的花田会留下空畦与茬口，花材进入库存。右下显示种子与花材数量，顶部可去调香。','Harvest leaves an empty bed with cut stems and adds ingredients to inventory. Counts appear at the lower right; the top action opens perfumery.')],
    companions:[care],
    orders:[home],
    shop:[shot('shop','挑选当期货品','Browse the current stock','商人每十二小时更新货架。点击商品查看价格和购买条件，再确认买入。','The merchant refreshes the shelf every twelve hours. Select an item to check its price and requirements, then confirm the purchase.'),shot('shop-confirm','确认商品与价格','Confirm the purchase','确认后扣除庭币、增加实际库存；余额不足或尚未解锁的商品不能购买。','Confirmation spends coins and adds actual inventory. Items cannot be bought if funds are insufficient or their unlock conditions are unmet.')],
    gallery:[shot('gallery','六章作品展厅','The six-chapter exhibition','各章真实作品由近到远陈列。空台表示该章尚未完成，或当前没有摆入可展出的实物。','Actual chapter works are arranged at different depths. An empty plinth means the chapter is unfinished or no eligible physical piece is displayed.'),shot('gallery-editor','作品详情：编辑与导出','Work details: Edit and Export','详情显示在作品另一侧，只保留“编辑”和“导出”。摆放请使用展厅顶部“编辑展出”，再拖动作品换位。','Details open opposite the artwork, with only Edit and Export. To change placement, choose Edit exhibition at the top and drag works to swap positions.'),shot('gallery-card','保存或分享作品卡','Save or share a work card','卡片包含实际作品、作品名、作者和记录到的制作时间。保存为 PNG，或由浏览器调用系统分享。','The card contains your actual work, title, author and recorded creation time. Save the PNG or open system sharing through the browser.')],
    defense:[shot('defense','留意生命值与预警','Watch health and warnings','观察 Boss 攻击倒计时、伙伴血条与倒下标记。首次通关后可快速完成；同一关卡每日最多三次奖励。','Watch the boss countdown, spirit health and downed markers. Quick completion unlocks after the first clear; each stage grants rewards at most three times per day.')]
  };
})();
