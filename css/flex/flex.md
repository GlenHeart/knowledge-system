flex: 
1. 解决什么问题， 有什么优缺点
 - css 常用布局方案基于盒模型的， 实现布局特别费劲 比如垂直居中
  影响最深刻的是，双飞翼布局是谁先提出来的，完全没有官方的验证
 - 优点
 - 缺点兼容性问题 ie9
2. 定义是什么
 - 容器常用属性6种 排列方向 对齐方式
  flex-direction 主轴方向 cloumn
  flex-wrap 是否换行
  align-items 多轴情况下，如何对齐
  justify-content 主轴方向如何对齐
  align-content 交叉轴如何对齐
 - 容器里常用的属性6种 排列书序 伸缩方式
  order 按权重排列顺序
  flex-grow 默认值auto 
  flex-shrink 默认值 0 不收缩
  flex 推荐使用单值
   - flex: initial
   - flex: 0;(flex: 0 1 0%)
   - flex: auto
   - flex: none
   - flex: 1 (flex: 1 1 auto)
   - flex: atuo (felx)
  flex-basis 计算剩余空间大小 auto 项目本身大小 0 最小内容 一柱擎天
  algin-self
3. 常见写法或者注意事项
  五种常见布局
  1. sticker footer
    body {
      display: flex;
      flex-direction: column;
    }
    .header {
      width: 100%;
      height: 50px;
    }
    .content {
      flex: auto;
    }
    .footer {
      width: 100%;
      height: 50px;
    }
  2. 侧边栏
  3. 
  4.
  5.
4. 案例