const headers={
  "Content-Type":"application/json;charset=UTF-8",
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods":"GET,POST,OPTIONS",
  "Access-Control-Allow-Headers":"Content-Type"
};

const IMG_BASE="https://www.trustedtarot.com/img/cards/";

const cards=[
  {
    name:"The Fool",
    nameZh:"愚者",
    slug:"the-fool",
    upright:"新的开始、自由、冒险、未知旅程。适合放下过度顾虑，用轻一点的心态尝试新方向。",
    reversed:"鲁莽、逃避、不成熟、缺乏计划。提醒不要只凭一时冲动行动，需要先看清风险。"
  },
  {
    name:"The Magician",
    nameZh:"魔术师",
    slug:"the-magician",
    upright:"创造力、行动力、资源整合、主动掌控。当前具备把想法落地的条件，关键在于主动出手。",
    reversed:"操控、欺骗、能力误用、虚张声势。可能存在信息不对等，或有人只说不做。"
  },
  {
    name:"The High Priestess",
    nameZh:"女祭司",
    slug:"the-high-priestess",
    upright:"直觉、秘密、潜意识、静默观察。答案不一定在表面，适合先观察再判断。",
    reversed:"隐瞒、误判、直觉受阻、信息不全。容易被情绪或猜测影响，需要确认事实。"
  },
  {
    name:"The Empress",
    nameZh:"女皇",
    slug:"the-empress",
    upright:"滋养、丰盛、感性、照顾与生长。关系或事务正在进入更柔软、更有生命力的状态。",
    reversed:"依赖、过度索取、情绪失衡、照顾耗竭。提醒不要把付出变成消耗，也不要过度依赖他人回应。"
  },
  {
    name:"The Emperor",
    nameZh:"皇帝",
    slug:"the-emperor",
    upright:"秩序、责任、稳定、边界与掌控。适合制定规则，稳住局面，承担该承担的部分。",
    reversed:"控制欲、僵硬、压迫、缺乏弹性。过度强硬会让关系或计划失去呼吸空间。"
  },
  {
    name:"The Hierophant",
    nameZh:"教皇",
    slug:"the-hierophant",
    upright:"承诺、传统、规则、精神指引。适合寻求可靠建议，或让关系进入更正式、更稳定的结构。",
    reversed:"叛逆、打破常规、观念冲突。原有规则未必适用，需要找到更适合自己的方式。"
  },
  {
    name:"The Lovers",
    nameZh:"恋人",
    slug:"the-lovers",
    upright:"吸引、靠近、选择、关系确认、价值一致。当前重点是心意与选择是否匹配。",
    reversed:"失衡、分歧、暧昧拉扯、选择困难。关系中可能存在摇摆，需要明确真实需求。"
  },
  {
    name:"The Chariot",
    nameZh:"战车",
    slug:"the-chariot",
    upright:"推进、决心、目标一致、关系向前。只要方向明确，就能凭意志力突破阻碍。",
    reversed:"失控、方向不一、急躁、强行推进。越想硬推越容易翻车，需要先校准目标。"
  },
  {
    name:"Strength",
    nameZh:"力量",
    slug:"strength",
    upright:"温柔的坚定、包容、耐心、情绪驯服。真正的力量不是压制，而是稳定地承接。",
    reversed:"压抑、失控、缺乏信心、消耗过度。需要照顾自己的情绪，不要硬撑。"
  },
  {
    name:"The Hermit",
    nameZh:"隐士",
    slug:"the-hermit",
    upright:"独处、思考、沉淀、内在答案。适合暂时远离噪音，整理真正想要的方向。",
    reversed:"疏离、封闭、逃避沟通、孤立感。沉默可能变成误会，需要适度表达。"
  },
  {
    name:"Wheel of Fortune",
    nameZh:"命运之轮",
    slug:"wheel-of-fortune",
    upright:"转机、变化、缘分流动、关系节点。局势正在转动，顺势而为比强行控制更有效。",
    reversed:"反复、停滞、错过时机、不可控变化。旧问题可能再次出现，需要看清循环。"
  },
  {
    name:"Justice",
    nameZh:"正义",
    slug:"justice",
    upright:"公平、坦诚、边界、清晰判断。适合把事情摊开说清楚，按事实做决定。",
    reversed:"误解、不公、逃避责任、关系失衡。可能有人没有承担该承担的后果。"
  },
  {
    name:"The Hanged Man",
    nameZh:"倒吊人",
    slug:"the-hanged-man",
    upright:"暂停、换位思考、等待、牺牲。眼下不适合强行推进，换个角度反而能看清答案。",
    reversed:"僵持、无谓消耗、不愿改变视角。长时间停住不是沉淀，而是在拖延。"
  },
  {
    name:"Death",
    nameZh:"死神",
    slug:"death",
    upright:"结束、转化、旧模式消散、新阶段。某些东西需要真正结束，新的空间才会出现。",
    reversed:"抗拒改变、拖延、无法放下。越舍不得旧模式，越难进入下一阶段。"
  },
  {
    name:"Temperance",
    nameZh:"节制",
    slug:"temperance",
    upright:"调和、耐心、慢慢靠近、关系修复。适合放慢节奏，用稳定沟通修补关系。",
    reversed:"失衡、急躁、冷热不均、沟通节奏错位。需要避免忽冷忽热或过度用力。"
  },
  {
    name:"The Devil",
    nameZh:"恶魔",
    slug:"the-devil",
    upright:"欲望、执念、吸引、束缚、沉迷。某种强烈吸引存在，但也可能带来依赖或控制。",
    reversed:"挣脱、看清依赖、减少控制与执念。适合从不健康的关系模式中抽离。"
  },
  {
    name:"The Tower",
    nameZh:"高塔",
    slug:"the-tower",
    upright:"突发变化、计划被打乱、旧结构松动。真相或问题可能突然爆开，需要重新评估现状。",
    reversed:"危机延迟、压抑问题、害怕改变。问题没有消失，只是暂时被按住。"
  },
  {
    name:"The Star",
    nameZh:"星星",
    slug:"the-star",
    upright:"希望、治愈、信任、温柔陪伴。适合恢复信心，也适合给关系一点轻柔的期待。",
    reversed:"失望、信心不足、期待落空。需要降低不切实际的幻想，先照顾好自己。"
  },
  {
    name:"The Moon",
    nameZh:"月亮",
    slug:"the-moon",
    upright:"暧昧、不安、梦境、隐藏情绪。当前信息可能不清晰，容易想多或误判。",
    reversed:"迷雾散开、误会缓解、真相浮现。混乱正在减少，真实情况会逐渐明朗。"
  },
  {
    name:"The Sun",
    nameZh:"太阳",
    slug:"the-sun",
    upright:"快乐、坦率、亲密、积极能量。适合直接表达、轻松互动，关系氛围较明亮。",
    reversed:"热情不足、幼稚、短暂低落。快乐仍在，但可能被小情绪或不成熟表达影响。"
  },
  {
    name:"Judgement",
    nameZh:"审判",
    slug:"judgement",
    upright:"觉醒、回应、关系复盘、重要决定。适合面对过去，并做出更清醒的选择。",
    reversed:"逃避回应、迟迟不决、旧事未清。该处理的问题还没处理完，不适合装作没事。"
  },
  {
    name:"The World",
    nameZh:"世界",
    slug:"the-world",
    upright:"完成、圆满、稳定关系、阶段成果。某件事进入成熟阶段，适合收获与确认。",
    reversed:"未完成、距离感、临门一脚。结果还差一点，需要补上最后的行动或沟通。"
  },

  {
    name:"Ace of Wands",
    nameZh:"权杖王牌",
    slug:"ace-of-wands",
    upright:"新的行动力、热情、灵感爆发。适合主动开启计划、邀约或表达兴趣。",
    reversed:"热情受阻、冲动减退、起步困难。想法存在，但还缺少真正执行的力量。"
  },
  {
    name:"Two of Wands",
    nameZh:"权杖二",
    slug:"two-of-wands",
    upright:"规划、选择、远景思考。适合决定方向，评估接下来要怎么推进。",
    reversed:"犹豫、视野受限、迟迟不行动。想太多会让机会停在原地。"
  },
  {
    name:"Three of Wands",
    nameZh:"权杖三",
    slug:"three-of-wands",
    upright:"等待成果、扩展、远方消息。前期努力开始显现，适合扩大交流范围。",
    reversed:"延迟、期待落空、计划受阻。反馈可能比预想来得慢，需要调整节奏。"
  },
  {
    name:"Four of Wands",
    nameZh:"权杖四",
    slug:"four-of-wands",
    upright:"庆祝、稳定、归属感、轻松相处。适合约见、聚会、确认关系中的安全感。",
    reversed:"关系不稳、短暂失衡、表面热闹。看似轻松的氛围下可能还有未解决的问题。"
  },
  {
    name:"Five of Wands",
    nameZh:"权杖五",
    slug:"five-of-wands",
    upright:"竞争、摩擦、意见碰撞。不同立场正在交锋，需要避免把讨论变成争输赢。",
    reversed:"冲突缓和、逃避竞争、内耗减少。表面安静下来，但问题未必真正解决。"
  },
  {
    name:"Six of Wands",
    nameZh:"权杖六",
    slug:"six-of-wands",
    upright:"认可、胜利、被看见。适合展示成果，也可能获得对方积极回应。",
    reversed:"缺乏认可、虚荣受挫、信心动摇。不要把价值完全建立在他人反馈上。"
  },
  {
    name:"Seven of Wands",
    nameZh:"权杖七",
    slug:"seven-of-wands",
    upright:"防守、坚持、立场明确。需要守住边界，不轻易被外界声音带偏。",
    reversed:"防备过度、退让、压力过大。一直硬撑会疲惫，需要分辨哪些值得坚持。"
  },
  {
    name:"Eight of Wands",
    nameZh:"权杖八",
    slug:"eight-of-wands",
    upright:"快速推进、消息到来、节奏加速。适合发送消息、安排见面或推进计划。",
    reversed:"延迟、沟通卡顿、节奏混乱。事情可能被打断，别急着催促结果。"
  },
  {
    name:"Nine of Wands",
    nameZh:"权杖九",
    slug:"nine-of-wands",
    upright:"疲惫但坚持、防御、最后关卡。已经走到接近完成的位置，但需要保护精力。",
    reversed:"过度防备、撑不下去、旧伤影响。不要把过去的受伤投射到当前关系里。"
  },
  {
    name:"Ten of Wands",
    nameZh:"权杖十",
    slug:"ten-of-wands",
    upright:"负担、责任、压力堆积。事情能完成，但代价可能是疲惫和过度承担。",
    reversed:"卸下重担、放弃硬撑、重新分配责任。适合减少不必要的压力。"
  },
  {
    name:"Page of Wands",
    nameZh:"权杖侍从",
    slug:"page-of-wands",
    upright:"好奇、试探、轻快消息。适合开启轻松话题，带一点新鲜感和玩心。",
    reversed:"三分钟热度、表达幼稚、消息不稳定。热情可能来得快去得也快。"
  },
  {
    name:"Knight of Wands",
    nameZh:"权杖骑士",
    slug:"knight-of-wands",
    upright:"冲劲、邀约、热烈推进。适合主动行动，但需要避免只凭兴致。",
    reversed:"鲁莽、忽冷忽热、急躁。热情可能不够稳定，容易开始很猛后面失速。"
  },
  {
    name:"Queen of Wands",
    nameZh:"权杖王后",
    slug:"queen-of-wands",
    upright:"自信、魅力、主动吸引。适合展现自己，不需要过度讨好。",
    reversed:"不安、嫉妒、控制欲、魅力受阻。越想证明自己，越容易失去松弛感。"
  },
  {
    name:"King of Wands",
    nameZh:"权杖国王",
    slug:"king-of-wands",
    upright:"领导力、决断、成熟行动。适合做决定、定方向、推动长期计划。",
    reversed:"强势、急躁、独断。需要避免把主导变成压迫。"
  },

  {
    name:"Ace of Cups",
    nameZh:"圣杯王牌",
    slug:"ace-of-cups",
    upright:"新的情感、心动、温柔开始。适合表达好感、释放善意，关系有柔软开端。",
    reversed:"情绪堵塞、爱意压抑、难以敞开。心里有感受，但表达受阻。"
  },
  {
    name:"Two of Cups",
    nameZh:"圣杯二",
    slug:"two-of-cups",
    upright:"互相吸引、情感回应、关系靠近。适合确认心意，进行平等温柔的交流。",
    reversed:"关系失衡、误会、回应不一致。双方期待可能不在同一个频道。"
  },
  {
    name:"Three of Cups",
    nameZh:"圣杯三",
    slug:"three-of-cups",
    upright:"聚会、分享、朋友支持、轻松快乐。适合社交、庆祝、一起做开心的事。",
    reversed:"第三方干扰、过度社交、关系边界混乱。热闹可能掩盖真实问题。"
  },
  {
    name:"Four of Cups",
    nameZh:"圣杯四",
    slug:"four-of-cups",
    upright:"冷淡、倦怠、情绪停滞。眼前有机会，但当事人可能暂时没有兴趣回应。",
    reversed:"重新打开、看见机会、走出情绪低潮。适合重新接触或调整心态。"
  },
  {
    name:"Five of Cups",
    nameZh:"圣杯五",
    slug:"five-of-cups",
    upright:"失落、遗憾、情绪低沉。容易盯着失去的部分，忽略仍然存在的可能。",
    reversed:"走出遗憾、接受现实、情绪修复。适合慢慢放下旧失望。"
  },
  {
    name:"Six of Cups",
    nameZh:"圣杯六",
    slug:"six-of-cups",
    upright:"回忆、旧人、熟悉感、纯粹善意。过去的情感或旧关系可能重新浮现。",
    reversed:"沉溺过去、无法成长、旧模式反复。怀念不能代替现实中的改变。"
  },
  {
    name:"Seven of Cups",
    nameZh:"圣杯七",
    slug:"seven-of-cups",
    upright:"幻想、选择过多、暧昧不清。可能想象很多，但现实信息不足。",
    reversed:"看清现实、减少幻想、做出选择。适合从混乱中筛掉不切实际的期待。"
  },
  {
    name:"Eight of Cups",
    nameZh:"圣杯八",
    slug:"eight-of-cups",
    upright:"离开、抽离、寻找更深意义。某些情绪已经到达临界点，需要转身寻找答案。",
    reversed:"舍不得离开、反复回头、情感牵扯。明知不合适，却还难以真正放下。"
  },
  {
    name:"Nine of Cups",
    nameZh:"圣杯九",
    slug:"nine-of-cups",
    upright:"满足、愿望实现、情绪愉悦。适合享受当下，也可能收到令人开心的回应。",
    reversed:"表面满足、内心空缺、期待过高。快乐可能短暂，需要分辨真正需求。"
  },
  {
    name:"Ten of Cups",
    nameZh:"圣杯十",
    slug:"ten-of-cups",
    upright:"幸福、圆满、情感归属、关系和谐。适合谈未来、家庭感或稳定陪伴。",
    reversed:"关系不和、期待落差、表面圆满。外人看着不错，内部却可能有情绪裂缝。"
  },
  {
    name:"Page of Cups",
    nameZh:"圣杯侍从",
    slug:"page-of-cups",
    upright:"温柔消息、害羞表达、感性试探。适合轻轻表达喜欢或关心。",
    reversed:"情绪幼稚、敏感、逃避表达。容易因为小事多想，或把玩笑当真。"
  },
  {
    name:"Knight of Cups",
    nameZh:"圣杯骑士",
    slug:"knight-of-cups",
    upright:"浪漫、邀约、情感表达。适合制造氛围，表达温柔与心意。",
    reversed:"不切实际、暧昧、情绪化承诺。甜言蜜语需要观察后续行动。"
  },
  {
    name:"Queen of Cups",
    nameZh:"圣杯王后",
    slug:"queen-of-cups",
    upright:"共情、包容、深情、细腻感受。适合倾听、安抚和情绪连接。",
    reversed:"情绪过载、过度敏感、边界模糊。不要为了照顾对方而淹没自己。"
  },
  {
    name:"King of Cups",
    nameZh:"圣杯国王",
    slug:"king-of-cups",
    upright:"成熟情感、稳定包容、克制表达。感情深但不失控，适合稳妥沟通。",
    reversed:"情绪压抑、冷处理、操控性温柔。表面平静之下可能藏着回避。"
  },

  {
    name:"Ace of Swords",
    nameZh:"宝剑王牌",
    slug:"ace-of-swords",
    upright:"真相、清晰、直接表达、新想法。适合把话说开，做出理性判断。",
    reversed:"混乱、误解、表达不清、判断失准。需要确认信息，不要靠脑补下结论。"
  },
  {
    name:"Two of Swords",
    nameZh:"宝剑二",
    slug:"two-of-swords",
    upright:"僵持、回避选择、理性防御。某个决定被暂时搁置，需要面对真实态度。",
    reversed:"僵局打破、不得不选、信息浮现。逃避已经不太管用。"
  },
  {
    name:"Three of Swords",
    nameZh:"宝剑三",
    slug:"three-of-swords",
    upright:"心痛、失望、刺耳真相。可能出现伤人的话或让人难受的事实。",
    reversed:"疗伤、释怀、痛感减轻。伤口还在，但已经开始恢复。"
  },
  {
    name:"Four of Swords",
    nameZh:"宝剑四",
    slug:"four-of-swords",
    upright:"休息、暂停、冷静恢复。适合暂时停止争执，让精神和关系都缓一缓。",
    reversed:"休息不足、焦虑复燃、不得不重新面对。拖久了的问题会再次冒头。"
  },
  {
    name:"Five of Swords",
    nameZh:"宝剑五",
    slug:"five-of-swords",
    upright:"争执、输赢心、言语伤害。即使赢了道理，也可能伤了关系。",
    reversed:"放下争斗、停止消耗、修复可能。适合从对抗中退出来。"
  },
  {
    name:"Six of Swords",
    nameZh:"宝剑六",
    slug:"six-of-swords",
    upright:"过渡、离开混乱、逐渐平静。情况正在从困难走向缓和。",
    reversed:"走不出来、旧问题拖累、过渡受阻。心里还停在过去的争执里。"
  },
  {
    name:"Seven of Swords",
    nameZh:"宝剑七",
    slug:"seven-of-swords",
    upright:"隐藏、策略、保留信息。有人可能没有把话说全，需要留意细节。",
    reversed:"真相暴露、谎言拆穿、坦白。隐瞒的内容可能逐渐浮出水面。"
  },
  {
    name:"Eight of Swords",
    nameZh:"宝剑八",
    slug:"eight-of-swords",
    upright:"束缚、困住、想太多。限制可能有一部分来自自己的恐惧和假设。",
    reversed:"松绑、看见出口、摆脱思维困境。适合打破自我设限。"
  },
  {
    name:"Nine of Swords",
    nameZh:"宝剑九",
    slug:"nine-of-swords",
    upright:"焦虑、失眠、内耗、担忧。脑子可能把问题放大，需要停止反复折磨自己。",
    reversed:"焦虑缓解、从噩梦中醒来、寻求帮助。适合把压力说出来。"
  },
  {
    name:"Ten of Swords",
    nameZh:"宝剑十",
    slug:"ten-of-swords",
    upright:"结束、崩溃、触底。某个局面已经到最低点，反而意味着不会更糟。",
    reversed:"缓慢恢复、拒绝结束、伤后重建。痛苦还没完全过去，但已经有恢复空间。"
  },
  {
    name:"Page of Swords",
    nameZh:"宝剑侍从",
    slug:"page-of-swords",
    upright:"观察、好奇、试探消息。适合收集信息，但不要急着下判断。",
    reversed:"窥探、误传、说话尖锐。小道消息或冲动发言容易惹麻烦。"
  },
  {
    name:"Knight of Swords",
    nameZh:"宝剑骑士",
    slug:"knight-of-swords",
    upright:"快速行动、直接沟通、强势推进。适合解决问题，但要注意语气。",
    reversed:"鲁莽、攻击性、争吵升级。说得太快太狠，会让局面失控。"
  },
  {
    name:"Queen of Swords",
    nameZh:"宝剑王后",
    slug:"queen-of-swords",
    upright:"清醒、独立、边界明确。适合理性判断，不被情绪绑架。",
    reversed:"刻薄、防御、过度冷淡。保护自己没错，但不要把所有靠近都当威胁。"
  },
  {
    name:"King of Swords",
    nameZh:"宝剑国王",
    slug:"king-of-swords",
    upright:"理性权威、判断力、清晰规则。适合制定原则、做出冷静决定。",
    reversed:"冷酷、控制话语权、理性压迫。讲道理可能变成压制感受。"
  },

  {
    name:"Ace of Pentacles",
    nameZh:"星币王牌",
    slug:"ace-of-pentacles",
    upright:"现实机会、稳定开端、可落地的资源。适合开始长期计划或实际投入。",
    reversed:"机会延迟、资源不足、开局不稳。需要检查现实条件是否支持。"
  },
  {
    name:"Two of Pentacles",
    nameZh:"星币二",
    slug:"two-of-pentacles",
    upright:"平衡、协调、时间管理。需要在多个事务或关系需求之间找到节奏。",
    reversed:"失衡、忙乱、顾此失彼。事情太多时，先减少不必要的消耗。"
  },
  {
    name:"Three of Pentacles",
    nameZh:"星币三",
    slug:"three-of-pentacles",
    upright:"合作、磨合、共同建设。适合商量具体安排，把关系落到实际行动里。",
    reversed:"配合不佳、标准不一、沟通成本高。需要重新确认分工和期待。"
  },
  {
    name:"Four of Pentacles",
    nameZh:"星币四",
    slug:"four-of-pentacles",
    upright:"守住、安全感、保守稳定。适合保护现有成果，但不要过度封闭。",
    reversed:"放手、松动、防御下降。可能需要放下控制，给关系一点流动空间。"
  },
  {
    name:"Five of Pentacles",
    nameZh:"星币五",
    slug:"five-of-pentacles",
    upright:"匮乏、冷落、现实压力。可能感到不被支持，或被现实条件限制。",
    reversed:"获得帮助、困境缓解、重新连接。适合主动寻求支持，不要一个人硬扛。"
  },
  {
    name:"Six of Pentacles",
    nameZh:"星币六",
    slug:"six-of-pentacles",
    upright:"给予、支持、互惠、照顾。关系中的付出和回应有机会达到平衡。",
    reversed:"付出失衡、亏欠感、施舍感。需要避免一方长期承担过多。"
  },
  {
    name:"Seven of Pentacles",
    nameZh:"星币七",
    slug:"seven-of-pentacles",
    upright:"等待、评估、长期投入。成果需要时间，适合检查方向是否值得继续。",
    reversed:"耐心不足、投入回报低、停滞。需要判断是否还要继续投入。"
  },
  {
    name:"Eight of Pentacles",
    nameZh:"星币八",
    slug:"eight-of-pentacles",
    upright:"认真经营、练习、细节打磨。适合通过稳定行动改善关系或事务。",
    reversed:"敷衍、重复无效、缺乏进步。努力如果没有方向，只会变成机械消耗。"
  },
  {
    name:"Nine of Pentacles",
    nameZh:"星币九",
    slug:"nine-of-pentacles",
    upright:"独立、享受成果、自我价值。适合把注意力放回自己，保持稳定与体面。",
    reversed:"依赖、价值感不足、表面精致。需要确认安全感是否过度依赖外界。"
  },
  {
    name:"Ten of Pentacles",
    nameZh:"星币十",
    slug:"ten-of-pentacles",
    upright:"长期稳定、家庭感、现实保障。适合谈承诺、未来规划和稳定关系结构。",
    reversed:"长期隐患、现实分歧、家庭或资源压力。稳定外壳下可能有实际问题。"
  },
  {
    name:"Page of Pentacles",
    nameZh:"星币侍从",
    slug:"page-of-pentacles",
    upright:"学习、认真试探、务实消息。适合从小事开始建立信任。",
    reversed:"拖延、不成熟、只想不做。计划听起来不错，但执行力不足。"
  },
  {
    name:"Knight of Pentacles",
    nameZh:"星币骑士",
    slug:"knight-of-pentacles",
    upright:"稳定推进、可靠、慢热。进展不快，但胜在踏实和有持续性。",
    reversed:"停滞、固执、迟钝。过于慢或保守，会让人怀疑诚意。"
  },
  {
    name:"Queen of Pentacles",
    nameZh:"星币王后",
    slug:"queen-of-pentacles",
    upright:"照顾、务实、稳定生活感。适合用实际行动表达关心。",
    reversed:"过度操心、现实焦虑、付出耗竭。不要把照顾别人变成透支自己。"
  },
  {
    name:"King of Pentacles",
    nameZh:"星币国王",
    slug:"king-of-pentacles",
    upright:"成熟稳定、现实承担、长期价值。适合确认承诺、资源和未来计划。",
    reversed:"物质控制、固执保守、现实压力。稳定可能变成压迫，需要保留情感温度。"
  }
];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function drawCard(){
  const card=pick(cards);
  const reversed=Math.random()<0.5;
  return {
    ok:true,
    cardName:card.name,
    cardNameZh:card.nameZh,
    position:reversed?"逆位":"正位",
    meaning:reversed?card.reversed:card.upright,
    imageUrl:IMG_BASE+card.slug+".png"
  };
}

export async function onRequest(context){
  if(context.request.method==="OPTIONS"){
    return new Response(null,{headers});
  }

  try{
    const result=drawCard();
    return new Response(JSON.stringify(result),{headers});
  }catch(err){
    return new Response(JSON.stringify({
      ok:false,
      error:String(err&&err.message?err.message:err)
    }),{
      status:500,
      headers
    });
  }
}
