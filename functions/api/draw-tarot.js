const headers={
  "Content-Type":"application/json;charset=UTF-8",
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods":"GET,POST,OPTIONS",
  "Access-Control-Allow-Headers":"Content-Type"
};

const majors=[
  ["The Fool","愚者","the-fool","新的开始、自由、冒险、天真、未知旅程。","鲁莽、逃避、不成熟、缺乏计划。"],
  ["The Magician","魔术师","magician","创造力、行动力、资源整合、主动掌控。","操控、欺骗、能力误用、虚张声势。"],
  ["The High Priestess","女祭司","high-priestess","直觉、秘密、潜意识、静默观察。","隐瞒、误判、直觉受阻、信息不全。"],
  ["The Empress","女皇","empress","滋养、丰盛、感性、关系中的照顾。","依赖、过度索取、情绪失衡、照顾耗竭。"],
  ["The Emperor","皇帝","emperor","秩序、责任、稳定、边界与掌控。","控制欲、僵硬、压迫、缺乏弹性。"],
  ["The Hierophant","教皇","hierophant","承诺、传统、规则、精神指引。","叛逆、打破常规、关系观念冲突。"],
  ["The Lovers","恋人","lovers","吸引、靠近、选择、关系确认、价值一致。","失衡、分歧、暧昧拉扯、选择困难。"],
  ["The Chariot","战车","chariot","推进、决心、共同目标、关系向前。","失控、方向不一、急躁、强行推进。"],
  ["Strength","力量","strength","温柔的坚定、包容、耐心、情绪驯服。","压抑、失控、缺乏信心、消耗过度。"],
  ["The Hermit","隐士","hermit","独处、思考、沉淀、内在答案。","疏离、封闭、逃避沟通、孤立感。"],
  ["Wheel of Fortune","命运之轮","wheel-of-fortune","转机、变化、缘分流动、关系节点。","反复、停滞、错过时机、不可控变化。"],
  ["Justice","正义","justice","公平、坦诚、边界、清晰判断。","误解、不公、逃避责任、关系失衡。"],
  ["The Hanged Man","倒吊人","hanged-man","暂停、换位思考、等待、牺牲。","僵持、无谓消耗、不愿改变视角。"],
  ["Death","死神","death","结束、转化、旧模式消散、新阶段。","抗拒改变、拖延、无法放下。"],
  ["Temperance","节制","temperance","调和、耐心、慢慢靠近、关系修复。","失衡、急躁、冷热不均、沟通节奏错位。"],
  ["The Devil","恶魔","devil","欲望、执念、吸引、束缚、沉迷。","挣脱、看清依赖、减少控制与执念。"],
  ["The Tower","高塔","tower","突发变化、计划被打乱、旧结构松动，需要重新评估现状。","危机延迟、压抑问题、害怕改变，越拖越容易失控。"],
  ["The Star","星星","star","希望、治愈、信任、温柔陪伴。","失望、信心不足、期待落空。"],
  ["The Moon","月亮","moon","暧昧、不安、梦境、隐藏情绪。","迷雾散开、误会缓解、真相浮现。"],
  ["The Sun","太阳","sun","快乐、坦率、亲密、积极能量。","热情不足、幼稚、短暂低落。"],
  ["Judgement","审判","judgement","觉醒、回应、关系复盘、重要决定。","逃避回应、迟迟不决、旧事未清。"],
  ["The World","世界","world","完成、圆满、稳定关系、阶段成果。","未完成、距离感、临门一脚。"]
];

const suits=[
  ["Wands","权杖","wands","行动力、热情、主动靠近、关系推进。","冲动受阻、热情下降、方向不稳、行动失衡。"],
  ["Cups","圣杯","cups","情感流动、亲密感、共情、温柔交流。","情绪堵塞、误解、依赖、回避真实感受。"],
  ["Swords","宝剑","swords","沟通、判断、理性、真相、清晰表达。","争执、误判、言语伤人、想太多、沟通受阻。"],
  ["Pentacles","星币","pentacles","稳定、现实照顾、陪伴、承诺、长期建设。","现实压力、忽略需求、付出失衡、关系停滞。"]
];

const ranks=[
  ["Ace","王牌","ace","新的能量开始，适合打开话题或开启一件小事。","起步不稳，需要先整理状态，不宜急着推进。"],
  ["Two","二","two","选择、平衡与互动，适合确认彼此节奏。","摇摆、犹豫或配合失衡，需要减少猜测。"],
  ["Three","三","three","扩展、分享与协作，适合一起做有参与感的事。","沟通分散，容易有外界干扰或注意力不集中。"],
  ["Four","四","four","稳定、休整与安全感，适合轻松陪伴。","过度封闭或停滞，需要一点新的变化。"],
  ["Five","五","five","冲突、压力与磨合，适合把不舒服说清楚。","冲突缓和，但仍要避免翻旧账。"],
  ["Six","六","six","回应、照顾与关系中的善意流动。","付出不均或旧事牵扯，需要重新调整距离。"],
  ["Seven","七","seven","试探、防御与选择，适合慢慢观察。","逃避、混乱或戒备过重，需要减少内耗。"],
  ["Eight","八","eight","推进、行动与变化，适合快速完成一件共同小事。","节奏卡住，不宜催促对方立刻回应。"],
  ["Nine","九","nine","接近完成，适合确认需求与给彼此安全感。","疲惫、焦虑或过度防备，需要休息。"],
  ["Ten","十","ten","阶段结果显现，关系进入承接或总结。","负担过重，需要减压，不要把问题全压在今天解决。"],
  ["Page","侍从","page","轻盈、好奇、试探式靠近，适合轻松聊天。","表达幼稚或信号不稳定，需要更明确一点。"],
  ["Knight","骑士","knight","行动、追逐与表达，适合主动邀约或推进。","急躁、鲁莽或忽冷忽热，需要放慢速度。"],
  ["Queen","王后","queen","接纳、照顾、成熟表达，适合温柔沟通。","情绪过载或过度照顾，需要保护边界。"],
  ["King","国王","king","掌控、成熟、稳定承担，适合做决定。","控制欲、固执或压力过大，需要放下强撑。"]
];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function imageUrl(slug){
  return "https://www.trustedtarot.com/img/cards/"+slug+".png";
}

function drawCard(){
  const isMajor=Math.random()<22/78;
  const reversed=Math.random()<0.5;
  const position=reversed?"逆位":"正位";

  if(isMajor){
    const c=pick(majors);
    return {
      cardName:c[0],
      cardNameZh:c[1],
      position,
      meaning:reversed?c[4]:c[3],
      imageUrl:imageUrl(c[2])
    };
  }

  const suit=pick(suits);
  const rank=pick(ranks);
  const cardName=rank[0]+" of "+suit[0];
  const cardNameZh=suit[1]+rank[1];
  const slug=rank[2]+"-of-"+suit[2];
  const meaning=reversed?(rank[4]+suit[5]):(rank[3]+suit[4]);

  return {
    cardName,
    cardNameZh,
    position,
    meaning,
    imageUrl:imageUrl(slug)
  };
}

export async function onRequest(context){
  if(context.request.method==="OPTIONS"){
    return new Response(null,{headers});
  }

  try{
    const card=drawCard();

    return new Response(JSON.stringify({
      ok:true,
      cardName:card.cardName,
      cardNameZh:card.cardNameZh,
      position:card.position,
      meaning:card.meaning,
      imageUrl:card.imageUrl
    }),{headers});
  }catch(err){
    return new Response(JSON.stringify({
      ok:false,
      error:String(err&&err.message?err.message:err)
    }),{status:500,headers});
  }
}
