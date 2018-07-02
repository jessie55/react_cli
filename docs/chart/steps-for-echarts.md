# 绘制 ECharts 图表的步骤

1. 准备一个具备宽高的 DOM 容器;
2. 初始化一个 ECharts 实例;
3. 指定图表的配置项和数据，具体参考 [EChart API 官方文档](http://echarts.baidu.com/api.html#echarts);
4. 绑定 ECharts 实例和配置项及数据;

``` javascript
// 假定已存在一个具备宽高的 id 为 echartsDOM 的容器
const myChartDOM = document.getElementById('echartsDOM');
const myChart = echarts.init(myChartDOM);
const myChartOption = {
  // ... 一些配置及数据
}
myChart.setOption(myChartOption)
```