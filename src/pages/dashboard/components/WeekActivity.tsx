import { useIntl, useRequest } from '@umijs/max';
import { Card, Spin } from 'antd';
import React, { useMemo } from 'react';
import Chart from '@/components/Chart';
import { getWeekActivity } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getWeekActivity();
  return {
    data: res.data || [],
  };
};

const WeekActivity: React.FC = () => {
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
      tooltip: {},
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
          type: 'bar',
          encode: {
            x: 'day',
            y: 'amount',
          },
        },
      ],
    };
  }, [data]);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'dashboard.weekActivity' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <Card className={styles.cardWrapper}>
          <Chart options={options} />
        </Card>
      </Spin>
    </>
  );
};

export default WeekActivity;
