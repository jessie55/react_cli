import { groupBy, minBy, maxBy } from 'lodash';
import { industorySpreadOption } from 'components/charts/config';

const buildDimensions = (responseData) => {
  const stdLevels = Object.keys(groupBy(responseData, 'std_level'));
  const debtIndustries = Object.keys(groupBy(responseData, 'debt_indus'));
  const dimensions = ['record_date'];
  stdLevels.forEach(stdLevel => {
    debtIndustries.forEach(debtIndustry => {
      dimensions.push(`${stdLevel}_${debtIndustry}`);
    });
  });
  console.log('dimensions', dimensions);
  return dimensions;
};

const buildDataSet = (responseData) => {
  const dimensions = buildDimensions(responseData);
  const groupedData = groupBy(responseData, 'record_date');
  console.log('groupedData', groupedData);
  const source = Object.keys(groupedData)
    .map(key => {
      const column = [...Array(dimensions.length)];
      column[0] = key;
      groupedData[key].forEach(item => {
        dimensions.forEach((dimension, index) => {
          column[index] = `${item.std_level}_${item.debt_indus}` === dimension ? item.avgs : column[index];
        });
      });
      return column;
    });
  console.log('source', source);
  return {
    dimensions,
    source
  };
};

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

const buildSeries = (dataset) => (
  [...Array(dataset.dimensions.length - 1)].map(() => ({
    type: 'line',
    connectNulls: true
  }))
);

// const buildTooltip = () => ({
//   ...industorySpreadOption.tooltip,
//   formatter: (params) => {
//     console.log(params);
//     return params;
//   }
// });

const transformToOption2 = (responseData) => {
  const dataset = buildDataSet(responseData);
  const xAxis = buildxAxis(responseData);
  const series = buildSeries(dataset);
  // const tooltip = buildTooltip();
  return {
    ...industorySpreadOption,
    xAxis,
    dataset,
    series
    // tooltip
  };
};

export default transformToOption2;
