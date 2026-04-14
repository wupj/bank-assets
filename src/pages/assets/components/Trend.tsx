import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import classNames from 'classnames';
import React from 'react';
import { getTrend } from '@/services';

const getList = async () => {
  const res = await getTrend();
  return {
    data: res.data || [],
    total: res.data.length,
  };
};

const Overview: React.FC = () => {
  const intl = useIntl();

  const columns: ProColumns<Record<string, any>>[] = [
    {
      dataIndex: 'id',
      title: 'No',
      render: (text, record, index: number) => <>{index + 1}</>,
    },
    {
      dataIndex: 'name',
      title: intl.formatMessage({ id: 'assets.name' }),
    },
    {
      dataIndex: 'amount',
      title: intl.formatMessage({ id: 'assets.price' }),
      render: (text) => <>${text}</>,
    },
    {
      dataIndex: 'interestRate',
      title: intl.formatMessage({ id: 'assets.extraValue' }),
      render: (text: any) => (
        <div
          className={classNames(
            { 'text-green-600': text > 0 },
            { 'text-red-600': text < 0 },
            'text-[16px] font-bold',
          )}
        >
          {text}%
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'assets.trendStocks' })}
        </div>
      </div>
      <ProTable
        rowKey="id"
        columns={columns}
        request={getList}
        search={false}
        toolBarRender={false}
        pagination={false}
      />
    </>
  );
};

export default Overview;
