import { groupBy, minBy, maxBy } from 'lodash';
import { industorySpreadOption } from 'components/charts/config';

const buildDataset = (groupedData) => {
  const dataset = [];
  Object.keys(groupedData).forEach((key) => {
    dataset.push({
      source: groupedData[key].map(item => ({
        ...item,
        record_date: item.record_date.toString()
      }))
    });
  });

  return dataset;
};

const buildSeries = (groupedData) => (
  [...Array(Object.keys(groupedData).length)].map((item, index) => ({
    type: 'line',
    name: Object.keys(groupedData)[index],
    datasetIndex: index,
    showSymbol: false,
    encode: {
      x: 'record_date',
      y: 'avgs'
    }
  }))
);

const buildxAxis = (responseData) => {
  const interval = 3600 * 24 * 1000;
  const minData = minBy(responseData, 'record_date');
  const minTimeStamp = minData ? minData.record_date : 0;
  const maxData = maxBy(responseData, 'record_date');
  const maxTimeStamp = maxData ? maxData.record_date : 0;
  const xAxisData = [...Array(((maxTimeStamp - minTimeStamp) / interval) + 1)]
    .map((item, index) => minTimeStamp + (interval * index));
  return {
    ...industorySpreadOption.xAxis,
    data: xAxisData
  };
};

const buildTooltip = () => ({
  ...industorySpreadOption.tooltip,
  formatter: (params) => {
    const tooltipText = params.map(param => `${param.seriesName}: ${param.data.avgs}`);
    const date = new Date(parseInt(params[0].axisValue, 10));
    tooltipText.unshift(`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`);
    return tooltipText.join('<br />');
  }
});

const transformToOption = (responseData) => {
  const xAxis = buildxAxis(responseData);
  const groupedData = groupBy(responseData, item => `${item.std_level}_${item.debt_indus}`);
  const dataset = buildDataset(groupedData);
  const series = buildSeries(groupedData);
  const tooltip = buildTooltip();
  const result = {
    ...industorySpreadOption,
    xAxis,
    dataset,
    series,
    tooltip
  };
  return result;
};

export default transformToOption;
