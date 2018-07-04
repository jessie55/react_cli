const position = { // 组件的位置信息（离容器的侧边距离）
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto'
};

export default function getDefaultOption() {
  return {
    title: {
      text: '',
      ...position
    },
    legend: { // 图例组件
      type: 'plain',
      // data: [], // 自定义图例
      ...position
    },
    grid: {}, // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以存在任意个 grid 组件
    xAxis: {}, // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
    yAxis: {} // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
    // dataset: {}, // 数据集
    // series: [], // 系列列表。每个系列通过 type 决定自己的图表类型

    // toolbox: {}, // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    // axisPointer: {}, // 坐标轴指示器（axisPointer）的全局公用设置
    // dataZoom: [], // 区域缩放
    // visualMap: [], // 视觉映射组件
    // tooltip: {}, // 提示框组件
    // timtline: {}, // 提供了在多个 ECharts option 间进行切换、播放等操作的功能
    // graphic: {}, // 原生图形元素组件
    // polar: {}, // 极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。
    // radiusAxis: {}, // 极坐标系的径向轴。
    // angleAxis: {}, // 极坐标系的角度轴。
    // radar: {}, // 雷达图坐标系组件，只适用于雷达图
    // brush: {}, // 刷子的类型和启动按钮
    // geo: {}, // 地理坐标系组件，需要额外引入地图
    // parallel: {}, // 平行坐标系，一般和下一属性结合使用
    // parallelAxis: {}, // 平行坐标系中的坐标轴，常用的可视化高维数据的图表
    // singleAxis: {}, // 单轴
    // calendar: {}, // 日历坐标系组件
    // aria: {}, // 默认关闭,自动根据图表配置项智能生成描述,盲人可以在朗读设备的帮助下了解图表内容
    // color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'], // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
    // backgroundColor: {}, // 背景色，默认无背景。
    // textStyle: {}, // 全局的字体样式
    // animation: true, // 是否开启动画
    // animationThreshold, // 是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画
    // animationDuration, // 初始动画的时长
    // animationEasing, // 初始动画的缓动效果
    // animationDelay, // 初始动画的延迟
    // animationDurationUpdate, // 数据更新动画的时长。
    // animationEasingUpdate, // 数据更新动画的缓动效果
    // animationDelayUpdate: idx => idx * 100, // 数据更新动画的延迟
    // blendMode: 'source-over', // 图形的混合模式
    // hoverLayerThreshold: false,
    // useUTC: false // 是否使用 UTC 时间
  };
}
