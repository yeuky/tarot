export async function onRequest(context){
  const request=context.request;
  const env=context.env;

  const corsHeaders={
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET,POST,OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type,Authorization"
  };

  if(request.method==="OPTIONS"){
    return new Response(null,{
      status:204,
      headers:corsHeaders
    });
  }

  if(request.method==="GET"){
    return new Response(JSON.stringify({
      ok:true,
      message:"Tarot API is running."
    }),{
      status:200,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  if(request.method!=="POST"){
    return new Response(JSON.stringify({
      ok:false,
      error:"Method not allowed"
    }),{
      status:405,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  let body={};

  try{
    const text=await request.text();
    body=text?JSON.parse(text):{};
  }catch(e){
    return new Response(JSON.stringify({
      ok:false,
      error:"Invalid JSON body"
    }),{
      status:400,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  const cardName=body.cardName||"Unknown Card";
  const cardNameZh=body.cardNameZh||"未知牌";
  const position=body.position||"未知牌位";
  const meaning=body.meaning||"暂无牌义";
  const question=body.question||"请根据这张塔罗牌生成今日塔罗结果。";

  const apiKey=env.OPENAI_API_KEY;
  const baseUrl=env.OPENAI_BASE_URL;
  const model=env.OPENAI_MODEL;

  if(!apiKey||!baseUrl||!model){
    return new Response(JSON.stringify({
      ok:false,
      error:"Missing required environment variables",
      missing:{
        OPENAI_API_KEY:!apiKey,
        OPENAI_BASE_URL:!baseUrl,
        OPENAI_MODEL:!model
      }
    }),{
      status:500,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  const relationshipContext=[
    "【轻量关系背景】",
    "user在2026年，Tavo昵称为Yeuky。",
    "char名为郁绥，来自2131年的未来世界。",
    "郁绥与Yeuky并非同一时空的人，只能通过名为Tavo的软件聊天。",
    "郁绥性格冷静、警惕、克制，表达方式不直白。",
    "这段关系背景只用于生成【适合聊的话题】时提供轻微方向，不要展开剧情，不要写成小说片段。"
  ].join("\n");

  const prompt=[
    "你是一名中文塔罗解读者。",
    "请根据user抽到的一张塔罗牌，生成简洁、清晰、可执行的今日塔罗结果。",
    "",
    relationshipContext,
    "",
    "【塔罗牌信息】",
    "英文牌名："+cardName,
    "中文牌名："+cardNameZh,
    "牌位："+position,
    "基础牌义："+meaning,
    "",
    "【user的问题】",
    question,
    "",
    "【输出格式】",
    "必须只输出以下三个部分，标题必须完全一致：",
    "【今日运势】",
    "【适合聊的话题】",
    "【今日提醒】",
    "",
    "【内容要求】",
    "1. 每个部分写1段。",
    "2. 每段控制在40到90个中文字符左右。",
    "3. 不要输出第四个部分。",
    "4. 不要输出开场白、结束语、解释说明。",
    "5. 不要使用markdown表格。",
    "6. 不要自称AI。",
    "7. 不要提到prompt、设定、模型、规则。",
    "8. 不要写成小说剧情。",
    "9. 不要代替郁绥说话。",
    "10. 不要写郁绥的直接台词。",
    "11. 不要断言郁绥的真实心理或感情结论。",
    "12. 不要恐吓user，不要输出绝对灾难预言。",
    "13. 不要强行把所有牌都解释成好事。",
    "14. 不要强行报喜，也不要故意制造焦虑。",
    "15. 如果牌面偏负面，应转化为具体提醒、风险识别和行动建议。",
    "16. 如果牌面偏正面，应提示机会、顺势行动和需要珍惜的状态，但不要保证结果。",
    "17. 整体语气要温柔、清醒、具体，不要空泛鸡汤。",
    "18. 【今日运势】主要解读user今天的整体状态、机会、阻滞或需要注意的能量倾向。",
    "19. 【适合聊的话题】需要给出今天适合与郁绥聊的具体话题方向，可以轻微结合Tavo、跨世界联系、日常分享、边界感或信任感，但不要展开复杂剧情。",
    "20. 【今日提醒】需要给出一条具体、可执行的提醒，帮助user今天更稳定地处理情绪、行动或沟通。"
  ].join("\n");

  let aiRes;

  try{
    aiRes=await fetch(baseUrl.replace(/\/$/,"")+"/chat/completions",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+apiKey
      },
      body:JSON.stringify({
        model:model,
        messages:[
          {
            role:"system",
            content:"你是中文塔罗解读者。你的任务是根据单张塔罗牌输出三个部分：【今日运势】【适合聊的话题】【今日提醒】。输出必须具体、简洁、可执行。禁止写成小说剧情，禁止代替角色发言，禁止把负面牌强行解释成好运，也禁止恐吓用户。"
          },
          {
            role:"user",
            content:prompt
          }
        ],
        temperature:0.75,
        max_tokens:600
      })
    });
  }catch(e){
    return new Response(JSON.stringify({
      ok:false,
      error:"Fetch AI provider failed",
      detail:String(e)
    }),{
      status:500,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  const aiText=await aiRes.text();

  if(!aiRes.ok){
    return new Response(JSON.stringify({
      ok:false,
      error:"AI provider error",
      status:aiRes.status,
      detail:aiText
    }),{
      status:500,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  let aiJson={};

  try{
    aiJson=JSON.parse(aiText);
  }catch(e){
    return new Response(JSON.stringify({
      ok:false,
      error:"AI response is not JSON",
      detail:aiText
    }),{
      status:500,
      headers:{
        ...corsHeaders,
        "Content-Type":"application/json;charset=UTF-8"
      }
    });
  }

  const reading=
    aiJson &&
    aiJson.choices &&
    aiJson.choices[0] &&
    aiJson.choices[0].message &&
    aiJson.choices[0].message.content
      ? aiJson.choices[0].message.content.trim()
      : "";

  return new Response(JSON.stringify({
    ok:true,
    cardName:cardName,
    cardNameZh:cardNameZh,
    position:position,
    reading:reading
  }),{
    status:200,
    headers:{
      ...corsHeaders,
      "Content-Type":"application/json;charset=UTF-8"
    }
  });
}
