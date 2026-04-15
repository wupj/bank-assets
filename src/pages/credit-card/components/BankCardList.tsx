import { CreditCardOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Button, Card, Spin, Typography } from 'antd';
import React from 'react';
import { getBankList } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getBankList();
  return {
    data: res.data || [],
  };
};

const BankCardList: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'creditCard.bankCardList' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.listWrapper}>
          {data?.map((item: any) => (
            <Card key={item.id}>
              <Avatar
                size={60}
                icon={<CreditCardOutlined />}
                style={{ color: '#396aff', backgroundColor: '#e7edff' }}
              />
              <div className="ml-4 inline-flex flex-1 gap-2">
                <div className="flex-1">
                  <div className="text-[16px] leading-5">
                    {intl.formatMessage({ id: 'creditCard.bankCardType' })}
                  </div>
                  <div className="text-gray-400">
                    {intl.formatMessage({ id: 'creditCard.supplementaryCard' })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[16px] leading-5">
                    {intl.formatMessage({ id: 'creditCard.bankCardType' })}
                  </div>
                  <div className="text-gray-400">
                    {intl.formatMessage({ id: 'creditCard.supplementaryCard' })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[16px] leading-5">
                    {intl.formatMessage({ id: 'creditCard.bank' })}
                  </div>
                  <div className="text-gray-400">{item.cardName}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[16px] leading-5">
                    {intl.formatMessage({ id: 'creditCard.bankCardNo' })}
                  </div>
                  <div className="text-gray-400">{item.cardNo}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[16px] leading-5">
                    {intl.formatMessage({ id: 'transaction.cardholder' })}
                  </div>
                  <div className="text-gray-400">{item.cardholder}</div>
                </div>
                <div className="flex-1 flex-center justify-end">
                  <Typography.Link>
                    {intl.formatMessage({ id: 'equipment.details' })}
                  </Typography.Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default BankCardList;
