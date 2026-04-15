import { useIntl, useRequest } from '@umijs/max';
import { Card, Spin } from 'antd';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import Chart from '@/components/Chart';
import { getCreditOverview } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getCreditOverview();
  return {
    data: res.data || [],
  };
};

const Overview: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  const options = useMemo(() => {
    const names = data?.map((o: any) => o.name) || []
    const dataset: any[] = [{ source: data || [] }]
    const series: any[] = []
    names.forEach((name: string, index: number) => {
      dataset.push({ transform:  { type: 'filter', config: { dimension: 'name', value: name }}})
      series.push({
        type: 'bar',
        name,
        datasetIndex: index + 1,
        encode: {
          x: 'week',
          y: 'amount',
        },
      })
    })
    return {
      grid: {
        top: 10,
        right: 10,
        bottom: 50,
        left: 10,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        bottom: 5,
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      dataset,
      series
    };
  }, [data]);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'account.loanOverview' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <Card className={classNames(styles.cardWrapper, 'h-[280px]')}>
          <Chart options={options} />
        </Card>
      </Spin>
    </>
  );
};

export default Overview;
