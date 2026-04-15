import { useIntl, useRequest } from '@umijs/max';
import { Card, Spin } from 'antd';
import React, { useMemo } from 'react';
import Chart from '@/components/Chart';
import { getConsume } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getConsume();
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
      legend: {
        bottom: 0,
      },
      tooltip: {},
      dataset: {
        source: data || [],
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          encode: {
            itemName: 'name',
            value: 'ratio',
          },
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            fontSize: 16,
          },
        },
      ],
    };
  }, [data]);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'dashboard.consumerDataStatistics' })}
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

export default Consumption;
