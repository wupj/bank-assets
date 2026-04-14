import { CreditCardOutlined, PlusOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Card, Spin, Divider  } from 'antd';
import React from 'react';
import { getBankList } from '@/services';

const getList = async () => {
  const res = await getBankList();
  return {
    data: res.data || [],
  };
};

const BankCard: React.FC = () => {
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'transaction.myBankCard' })}
        </div>
        <div>
          <PlusOutlined />
          {intl.formatMessage({ id: 'transaction.addCard' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <div className="flex flex-row gap-[16px]">
          {data?.map((item: Record<string, any>) => (
            <Card key={item.id} className="flex-1 max-w-[20vw] h-[250px]" hoverable>
              <div className="flex flex-col gap-[16px]">
                <div className="flex-between">
                  <div className="">
                    <div>
                      {intl.formatMessage({ id: 'transaction.balance' })}
                    </div>
                    <div className="text-[18px] font-bold">${item.balance}</div>
                  </div>
                  <CreditCardOutlined />
                </div>
                <div className="flex gap-[4vw]">
                  <div className="">
                    <div>
                      {intl.formatMessage({ id: 'transaction.cardholder' })}
                    </div>
                    <div className="text-[14px]">{item.cardholder}</div>
                  </div>
                  <div className="">
                    <div>
                      {intl.formatMessage({ id: 'transaction.expirationDate' })}
                    </div>
                    <div className="text-[14px]">{item.expireDate}</div>
                  </div>
                </div>
                <div className="">
                  <Divider />
                  <div className="text-[22px] font-bold">{item.cardNo}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default BankCard;
