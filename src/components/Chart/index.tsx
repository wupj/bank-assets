import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts-for-react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import React, { useMemo } from 'react';

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  TransformComponent,
  DatasetComponent,
  CanvasRenderer,
]);

const Chart: React.FC<EChartsOption> = (props) => {
  const { options, ...rest } = props;

  const option = useMemo(() => {
    return {
      color: ['#ffbb38', '#16dbcc', '#ff82ac', '#4d78ff'],
      ...options,
    };
  }, [options]);

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      notMerge={true}
      {...rest}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Chart;
