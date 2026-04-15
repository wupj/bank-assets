import { TransactionOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Card, Spin } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { getLastSaleList } from '@/services';

const getList = async () => {
  const res = await getLastSaleList();
  return {
    data: res.data || [],
  };
};

const LastSale: React.FC = () => {

  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'transaction.lastTransactions' })}
        </div>
      </div>
      <Card>
        <Spin spinning={loading}>
          <div className="flex flex-col gap-4">
            {data?.map((item: any) => (
              <div key={item.id} className="flex-1 flex">
                <Avatar
                  size={60}
                  icon={<TransactionOutlined />}
                  style={{ color: '#396aff', backgroundColor: '#e7edff' }}
                />
                <div className="ml-4 inline-flex flex-1 gap-2">
                  <div className="flex-1">
                    <div className="">{item.category}</div>
                    <div className="text-gray-400">{item.tradeDate}</div>
                  </div>
                  <div className="flex-1 flex-center">
                    <div className="text-gray-400">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex-1 flex-center">
                    <div className="text-gray-400">
                      {item.bankNo}
                    </div>
                  </div>
                  <div className="flex-1 flex-center">
                    <div
                      className={classNames(
                        { 'text-green-600': item.amount > 0 },
                        { 'text-red-600': item.amount < 0 },
                      )}
                    >
                      ${item.amount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Spin>
      </Card>
    </>
  );
};

export default LastSale;
