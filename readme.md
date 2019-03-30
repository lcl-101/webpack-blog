##  人博客系统

> 作者：李成龙 <554675188@qq.com>

### 相关技术点
1. nginx
2. node
3. webpack
4. gulp
5. react
6. react-router
7. redux
8. koa2
9. pm2
10. log4
11. axios
12. fetch
13. less
14. issues
15. webhoot
16. gitment
17. vue
18. vuex
19. vue-router
20. echarts

技术点较多就先列出来这么多吧....

### 环境依赖

node v10.15.3


### 部署步骤

```
1. npm install        //安装node运行环境
2. npm run dev        //开发环境构建
3. npm run server     //开发环境构建
4. npm run build      //生产环境构建
```

### 目录结构描述

```
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
```

### 依赖收集
![analyzer.png](https://lcl101.cn/common/images/analyer.png)

### 版本更新日志

| 版本 | 备注 | 贡献者 | 发版时间 |
| :--: | :--: | :--: | :--: |
| 1.0.0 | 首页,详情页,列表 | 李成龙 | 2018.05.08 |
| 1.0.1 | 首页,详情页,归档,标签,列表 | 李成龙 | 2019.02.12 |
| 1.0.2 | 服务由express迁移到koa2 | 李成龙 | 2019.02.15 |
| 1.0.3 | 加入vue-admin管理后台 | 李成龙 | 2019.02.22 |
| 1.0.4 | node从v8.4.0升级到v10.15.3 | 李成龙 | 2019.03.28 |
