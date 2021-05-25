module.exports.uploader = function (ctx, next){
    let resData = {
        status: 1,
        data: {

        }
    };

    console.log(ctx.request.files);
    console.log(ctx.request.body);

    ctx.body = resData;
}
