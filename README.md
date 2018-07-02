# REACT CLI

## 开始

环境需求：

* node >= 6.0.0
* 编辑器ESLint插件

拉取代码库，安装依赖：

```
npm i / yarn
```

启动开发：

```
npm start
```

编译-预发：

```
npm run build
```

eslint校验：

```
npm run line
```

## 技术栈

react@16.4.0 + redux@4.0.0 + react-router@4.2.0 + webpack@4.10.2 + webpack-dev-server@3.1.4 + fetch@2.2.1 + sass@4.9.0 + antd@3.6.2 + react-grid-layout@0.16.6

## 项目结构

```tree
├── .babelrc
├── .eslintignore
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── config
│   ├── global.env.js             全局环境变量
│   ├── path.js                   项目路径
│   ├── service.js                webpack service配置
│   └── webpack.config.js         webpack配置
├── dist                          编译打包，发布包
│   ├── index.html
│   ├── css
│   └── js
├── src
│   ├── index.html                入口
│   ├── index.jsx
│   ├── components                通用组件
│   │   ├── layout
│   │   ├── chart
│   │   ├── fontIcon
│   │   └── ...
│   ├── containers                路由组件
│   │   ├── demo
│   │   └── ...
│   ├── helpers
│   │   ├── asyncComponent.js     动态加载组件
│   │   └── service.js            request封装
│   ├── redux
│   │   ├── constants
│   │   │   ├── index.js
│   │   │   ├── urls.js           接口url
│   │   │   └── actionTypes.js    reducer type
│   │   ├── store
│   │   │   ├── index.js          store热更新
│   │   │   ├── initialStore.js   初始数据
│   │   │   └── configStore.js    store配置
│   │   ├── actions               action注册
│   │   │   ├── index.js
│   │   │   └── ...
│   │   ├── sagas                 数据请求
│   │   │   ├── index.js
│   │   │   └── ...
│   │   └── reducer               state更新
│   │       ├── index.js
│   │       └── ...
│   └── routers
│       ├── RootRouter.js         加载路由
│       └── routers.js            路由-组件配置
├── package-lock.json
├── package.json
├── postcss.config
├── README.md
└── yarn.lock
