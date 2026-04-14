import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import type { TabsProps } from 'antd';
import { Button, Tabs } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { getLastSaleList } from '@/services';

const getList = async () => {
  const res = await getLastSaleList();
  return {
    data: res.data || [],
    total: res.data.length,
  };
};

const LastSale: React.FC = () => {
  const intl = useIntl();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: intl.formatMessage({ id: 'transaction.AllTransactions' }),
    },
    {
      key: '2',
      label: intl.formatMessage({ id: 'transaction.firstDay' }),
    },
    {
      key: '3',
      label: intl.formatMessage({ id: 'transaction.consumption' }),
    },
  ];

  const columns: ProColumns<Record<string, any>>[] = [
    {
      dataIndex: 'describe',
      title: intl.formatMessage({ id: 'transaction.description' }),
      ellipsis: true,
    },
    {
      dataIndex: 'id',
      title: intl.formatMessage({ id: 'transaction.transactionID' }),
      render: (text) => <>#{text}</>,
    },
    {
      dataIndex: 'category',
      title: intl.formatMessage({ id: 'transaction.category' }),
    },
    {
      dataIndex: 'bankNo',
      title: intl.formatMessage({ id: 'transaction.bankCard' }),
    },
    {
      dataIndex: 'tradeDate',
      title: intl.formatMessage({ id: 'transaction.date' }),
    },
    {
      dataIndex: 'amount',
      title: intl.formatMessage({ id: 'transaction.amount' }),
      render: (text: number) => <div className={classNames({ 'text-green-600': text > 0 }, { 'text-red-600': text < 0 },'text-[16px] font-bold')}>${text}</div>
    },
    {
      dataIndex: 'receipt',
      title: intl.formatMessage({ id: 'transaction.receipt' }),
      render: (text) => (
        <Button color="cyan" variant="solid">
          {intl.formatMessage({ id: 'transaction.download' })}
        </Button>
      ),
    },
  ];
  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'transaction.lastTransactions' })}
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
      <ProTable
        rowKey="id"
        columns={columns}
        request={getList}
        search={false}
      />
    </>
  );
};

export default LastSale;
