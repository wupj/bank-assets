import { ContainerOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Card, Spin } from 'antd';
import React from 'react';
import { getSendInvoice } from '@/services';

const getList = async () => {
  const res = await getSendInvoice();
  return {
    data: res.data || [],
  };
};

const SendInvoices: React.FC = () => {

  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'account.sendInvoices' })}
        </div>
      </div>
      <Card>
        <Spin spinning={loading}>
          <div className="flex flex-col gap-4">
            {data?.map((item: any) => (
              <div key={item.id} className="flex-1 flex">
                <Avatar
                  size={60}
                  icon={<ContainerOutlined />}
                  style={{ color: '#396aff', backgroundColor: '#e7edff' }}
                />
                <div className="ml-4 inline-flex flex-1 gap-2">
                  <div className="flex-1">
                    <div className="">{item.name}</div>
                    <div className="text-gray-400">{item.date}</div>
                  </div>
                  <div className="flex-1 flex-center">
                    <div className="text-gray-400">
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

export default SendInvoices;
