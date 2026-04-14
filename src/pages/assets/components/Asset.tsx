import { GiftOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Card, Spin } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { getAssets } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getAssets();
  return {
    data: res.data || [],
  };
};

const Asset: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'assets.myAssets' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.assetWrapper}>
          {data?.map((item: any) => (
            <Card key={item.id}>
              <Avatar
                size={60}
                icon={<GiftOutlined />}
                style={{ color: '#396aff', backgroundColor: '#e7edff' }}
              />
              <div className="ml-4 inline-flex flex-1 gap-2">
                <div className="flex-1">
                  <div className="">{item.name}</div>
                  <div className="text-gray-400">{item.describe}</div>
                </div>
                <div className="flex-1">
                  <div className="">{item.amount}</div>
                  <div className="text-gray-400">
                    {intl.formatMessage({ id: 'assets.investmentValue' })}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className={classNames(
                      { 'text-green-600': item.interestRate > 0 },
                      { 'text-red-600': item.interestRate < 0 }
                    )}
                  >
                    {item.interestRate}%
                  </div>
                  <div className="text-gray-400">
                    {intl.formatMessage({ id: 'assets.extraValue' })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Asset;
