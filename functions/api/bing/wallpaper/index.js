export async function onRequest(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    
    // Direct link to the default image
    const defaultImageUrl = 'https://img.gs/knrrcwdgdl/full/https://img.seyou.lol/file/e2f5d31316db645fd0a9f.jpg';

    const return_data = {
        "status": true,
        "message": "操作成功",
        "data": [{ "url": defaultImageUrl }] // Wrap the default image URL in an array
    };

    const info = JSON.stringify(return_data);
    return new Response(info);
}
