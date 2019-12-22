
::: tip Bang!
这是一个不错的产品
:::

### 设计一款 slides 软件

为什么要设计一款 slides 软件

- 需要更生动的交互
- 浏览器直接打开
- 嵌入任何 JavaScript 组件

### 产品定义

有以下几个功能：

- 通过 markdown 书写 slides 内容
- 在 markdown 中插入任何 JavaScript 组件展现交互内容
- 自适应屏幕的 slide 内容

<my-slides :slides='[
  {
    html: "slide1",
    style: {
      background: "#1bbc9b"
    }
  },
  {
    html: "slide2",
    style: {
      background: "#4bbfc3"
    }
  },
  {
    html: "slide3",
    style: {
      background: "#7baabe"
    }
  }
]'> </my-slides>
