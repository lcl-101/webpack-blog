##  webpack+gulp+react+react-router+issues+webhoot+koa2+pm2+log4+gitment 构建的个人博客系统

> 作者：李成龙 <554675188@qq.com>

### 环境依赖

node v8.4.0+


### 部署步骤

```
1. npm install        //安装node运行环境
2. npm run dev        //开发环境构建
3. npm run server     //开发环境构建
4. npm run build      //生产环境构建
```

### 目录结构描述

<pre>
├── admin                       // 管理后台
├── app                         // app
│   ├── controllers             // 控制器
│   ├── router                  // 路由
│   ├── utils                   // 工具库
│   └── app.js                  // app.js
├── config                      // 配置信息
├── dist                        // 生产环境
├── src                         // 开发项目目录
│   ├── common                  // 公共目录
│   ├── module                  // 模块目录
│   └── views                   // 视图目录
├── .babelrc                    // 语法转义
├── .gitignore                  // 忽略文件
├── package.json                // npm包管理器
├── webpack.config.babel.js     // 构建工具
└── readme.md                   // help
</pre>

### 依赖收集
![analyzer.png](https://lcl101.cn/common/images/analyer.png)

### 版本更新日志

| 版本 | 备注 | 贡献者 | 发版时间 |
| :--: | :--: | :--: | :--: |
| 1.0.0 | 首页,详情页,列表 | 李成龙 | 2018.05.08 |
| 1.0.1 | 首页,详情页,归档,标签,列表 | 李成龙 | 2019.02.12 |
| 1.0.2 | 服务由express迁移到koa2 | 李成龙 | 2019.02.15 |
| 1.0.3 | 加入vue-admin管理后台 | 李成龙 | 2019.02.22 |
