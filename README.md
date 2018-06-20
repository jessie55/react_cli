# REACT CLI

## 开始
----
环境需求：

* node >= 6.0.0
* 编辑器ESLint插件

拉取代码库，安装依赖：

```
npm i
```

或者：
```
yarn
```

启动开发：

```
npm start
```

访问页面，例如 `http://localhost:3000`

编译-预发：

```
npm run build
```


## 项目结构

```tree
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── _config.yml
├── _gitattributes
├── app
│   ├── actions
│   │   ├── common.js
│   │   ├── house.js
│   │   └── tabList.js
│   ├── api
│   │   ├── common.js
│   │   ├── house.js
│   │   └── index.js
│   ├── base
│   │   ├── header.js
│   │   ├── index.js
│   │   ├── nav.js
│   │   └── tabList.js
│   ├── client.js
│   ├── config.js
│   ├── history.js
│   ├── iconfont
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── images
│   │   ├── default.png
│   │   ├── emoji
│   │   ├── leftBg.jpg
│   │   └── navcontrol.png
│   ├── index.html
│   ├── middleware
│   │   ├── index.js
│   │   ├── logger.js
│   │   └── router.js
│   ├── pages
│   │   ├── chat
│   │   │   └── index.js
│   │   ├── login.js
│   │   ├── menu
│   │   │   ├── echarts.js
│   │   │   ├── editor.js
│   │   │   ├── index.js
│   │   │   └── table.js
│   │   ├── register.js
│   │   └── welcome.js
│   ├── reducers
│   │   ├── common.js
│   │   ├── house.js
│   │   ├── index.js
│   │   └── tabList.js
│   ├── routes.js
│   ├── store
│   │   └── configureStore.js
│   ├── style
│   │   ├── RichEditor.less
│   │   ├── base.less
│   │   ├── im.less
│   │   └── theme.less
│   └── utils
│       ├── ajax.js
│       └── index.js
├── mock
│   ├── datas
│   │   └── tableList.js
│   ├── http.js
│   ├── interfaceFilter.js
│   └── interfaceMap.js
├── package-lock.json
├── package.json
├── readme.md
├── scripts
│   ├── chatServer.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
└── yarn.lock
