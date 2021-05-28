const child_process = require('child_process');
const exec = require('child_process').exec;
const fs = require('fs')

//生成骨架图
const dpsRun = async () => {
    return await new Promise((resolve, reject) => {
        const cmd = 'dps start';                                                    //执行命令
        const cwd = '/Users/lichenglong/github/webpack-blog/app/controllers/dps';   //执行路径
        console.log('dps start')
        exec(cmd, {cwd}, function(error, stdout, stderr) {
            console.log('stdout:' + stdout);
            console.log('stderr:' + stderr);
            if(error){
                console.error(error);
                reject(error)
            }
            else{
                console.log("dps end");
                resolve('success')
            }
        });

        // console.log('dps start')
        // const dps = child_process.spawn('dps', ['start']);
        //
        // dps.stdout.on('data', function (data) {
        //     console.log('info: ' + data);
        // });
        //
        // dps.stderr.on('data', function (data) {
        //     console.log('errInfo: ' + data);
        // });
        //
        // dps.on('close', function (code) {
        //     console.log('dps end 子进程已退出，退出码 ' + code);
        //     if (code != 0) {
        //         console.log('exitCode');
        //         process.exitCode = code;
        //     }
        //     resolve(code)
        // });
    })
};

module.exports.dps = async function (ctx, next) {
    let resData = {
        status: 1,
        data: {
            message: ''
        }
    };

    try {
        //获取id
        let name = '';
        if(ctx.query.url && ctx.query.url.split('/')){
            name = ctx.query.url.split('/');
            name = name[name.length - 1]
        }

        //写入配置
        const info = {
            url: ctx.query.url,                                                                         //访问url
            filepath: `/Users/lichenglong/github/webpack-blog/app/controllers/dps/${name}.html`         //生成骨架图路径
        }
        await fs.writeFileSync('/Users/lichenglong/github/webpack-blog/app/controllers/dps/qk.dconfig.js', 'module.exports = ' + JSON.stringify(info))

        //运行骨架图
        resData.data.message = await dpsRun();
    }catch (e) {
        resData.data.message = 'error'
    }
    ctx.body = resData;
}
