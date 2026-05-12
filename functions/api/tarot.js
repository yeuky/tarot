export async function onRequest(context){
  const request=context.request;

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
      method:"GET",
      message:"Cloudflare Pages Function is alive."
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
    body=await request.json();
  }catch(e){
    try{
      const text=await request.text();
      body=JSON.parse(text);
    }catch(e2){
      body={};
    }
  }

  return new Response(JSON.stringify({
    ok:true,
    platform:"Cloudflare Pages Functions",
    received:body,
    reading:"【测试运势】Cloudflare Pages Function 已成功收到 Tavo 前端请求。如果这里能显示，说明 pages.dev 可以替代 workers.dev。"
  }),{
    status:200,
    headers:{
      ...corsHeaders,
      "Content-Type":"application/json;charset=UTF-8"
    }
  });
}
