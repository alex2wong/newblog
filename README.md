<br>
<br>

## 博客首页[![Netlify Status](https://api.netlify.com/api/v1/badges/b13c092e-682b-49d2-b75a-5396565c0089/deploy-status)](https://app.netlify.com/sites/alex2wong/deploys)

<br>

这是一个崭新的博客系统<Badge text="beta" type="warn"/><Badge text="0.10.1+"/>  :tada: :100:

基于 [vuepress](https://vuepress.vuejs.org/) 搭建, 目前采用默认blog 风格，简洁明了。支持`markdown`语法和md中嵌入vue组件和任意html标签。例如：

*.md内容：
```markdown

- 清单一

这是一篇由markdown书写的博客
<input type="checkbox" id="testCheck">
<label for="testCheck">可交互的html控件</label>
```

编译输出的html：

---
- 清单一

这是一篇由markdown书写的博客

<input type="checkbox" id="testCheck"><label for="testCheck">可交互的html控件</label>

---

我们可以清晰地看到 markdown 和 html 原生组件结合的威力，当然更重要的是可以直接嵌入vue 组件。

<my-chart type="bar" :data="[{ data: [13,21,24,12,33,21,39],label:'Closing Price$' }]" 
  :labels="['day1','day2','day3','day4','day5','day6','day7']"
/>

以上是一个vue组件渲染的图表

在markdown中也支持直接使用插值表达式，其实你可以简单地理解，这个markdown文件也就是 vue 组件的`template`部分，其中的插值表达式都会经过 vue.js 的编译，经过render函数的渲染，最终形式是可交互的`html`。例如以下等号后面的数字2 就是插值表达式计算所得

1 + 1 = <span>{{ 1 + 1 }}</span>

希望这个博客实践能帮到你们~ :smile:

![今年的夏天](./about/1.jpg)
今年的夏天

### 其他文章

- [About Me](about)

- [Music Blog](posts/music.html)

- [WebGL Lesson](posts/webgl01.html)

- [Summer](posts/summer.html)


```js
export default {
  title: "blog",
  author: "alex",
}
```