import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';
import { getLoanOverview } from '@/services';

const getList = async () => {
  const res = await getLoanOverview();
  return {
    data: res.data || [],
    total: res.data.length,
  };
};

const Overview: React.FC = () => {
  const intl = useIntl();

  const columns: ProColumns<Record<string, any>>[] = [
    {
      dataIndex: 'slNo',
      title: 'SL No',
    },
    {
      dataIndex: 'loanAmount',
      title: intl.formatMessage({ id: 'loans.loanAmount' }),
      render: (text) => <>${text}</>,
    },
    {
      dataIndex: 'repaymentAmount',
      title: intl.formatMessage({ id: 'loans.repaymentAmount' }),
      render: (text) => <>${text}</>,
    },
    {
      dataIndex: 'loanTerm',
      title: intl.formatMessage({ id: 'loans.loanTerm' }),
      render: (text) => <>{text} Months</>,
    },
    {
      dataIndex: 'interestRate',
      title: intl.formatMessage({ id: 'loans.interestRate' }),
      render: (text) => <>{text}%</>,
    },
    {
      dataIndex: 'installmentPayment',
      title: intl.formatMessage({ id: 'loans.installmentPayment' }),
      render: (text) => <>${text} / {intl.formatMessage({ id: 'loans.month' })}</>,
    },
    {
      dataIndex: 'repayment',
      title: intl.formatMessage({ id: 'loans.repayment' }),
      render: () => (
        <Button color="cyan" variant="solid">
          {intl.formatMessage({ id: 'loans.repayment' })}
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
      <ProTable
        rowKey="id"
        columns={columns}
        request={getList}
        search={false}
      />
    </>
  );
};

export default Overview;
