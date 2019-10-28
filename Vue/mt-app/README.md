# mt-app

> 个人Vue.js练习项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目简介
该项目是一个个人Vue.js练习项目, 模仿美团PC端页面及部分功能

主要实现的页面有 ['首页', '城市切换页', '商品展示页']

# 详细介绍

项目基于Vue.js, 使用了vue-cli 2.x 脚手架, 不采用vue-cli 3.0 是为了熟悉一下webpack的详细配置
使用了vue-router配置路由, 使用vuex进行跨组件通信, 数据请求使用了axios.js, css使用less, js使用ES6语法, 虽然是美团模仿项目, 但是我还是使用了element UI, 整个项目采用模块化组件化的思想.

因为后端数据很少的原因, 页面的展示效果并不完美.

[首页, 切换城市页, 商品展示页] 的header区域和footer区域是相同的, 所以采用了一个默认模板,中间的main区域展示不同路由下的不同组件

在/src/api/index.js中存放了所有用到的后端接口请求
其中包括header区域的搜索热词, 搜索框列表
index组件中左侧的全部分类列表, index组件下方的有格调区域
城市切换changeCity组件中, 热点城市, 最近搜索城市, 获取省份, 获取城市列表
商品展示product组件中, 商品列表

/src/layout 中包含了默认模板页面
/src/views 中包含了三个页面级组件
/src/components 中包含了每个页面级组件所用到的小组件
src/css 中包含了每个组件所用到的css样式, 采用less书写