import { useIntl, useRequest } from '@umijs/max';
import { Card, Spin } from 'antd';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import Chart from '@/components/Chart';
import { getMonthIncome } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getMonthIncome();
  return {
    data: res.data || [],
  };
};

const Consumption: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  const options = useMemo(() => {
    return {
      grid: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      dataset: {
        source: data || [],
      },
      series: [
        {
          type: 'line',
          smooth: true,
          encode: {
            x: 'month',
            y: 'amount',
          },
        },
      ],
      color: ['#16dbcc'],
    };
  }, [data]);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'assets.monthlyIncome' })}
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

export default Consumption;
