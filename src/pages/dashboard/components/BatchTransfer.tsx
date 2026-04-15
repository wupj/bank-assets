import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Button, Card, InputNumber, Spin } from 'antd';
import React from 'react';
import { getPersonnel } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getPersonnel();
  return {
    data: res.data || [],
  };
};

const BatchTransfer: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'dashboard.batchTransfer' })}
        </div>
      </div>
      <Card>
        <Spin spinning={loading}>
          <div className={styles.transferWrapper}>
            {data?.map((item: any) => (
              <div key={item.id} className="flex-center flex-col gap-2">
                <Avatar
                  size={100}
                  icon={<UserOutlined />}
                  style={{ color: '#396aff', backgroundColor: '#e7edff' }}
                />
                <div>{item.name}</div>
                <div className="text-gray-400">{item.position}</div>
              </div>
            ))}
          </div>
          <div className={styles.inputWrapper}>
            <div className="flex-center text-gray-400">
              {intl.formatMessage({ id: 'dashboard.fillAmount' })}
            </div>
            <div className="flex-1 flex">
              <InputNumber
                className="flex-1"
                type="number"
                controls={false}
                precision={2}
              />
              <Button type="primary" icon={<SendOutlined />}>
                {intl.formatMessage({ id: 'dashboard.send' })}
              </Button>
            </div>
          </div>
        </Spin>
      </Card>
    </>
  );
};

export default BatchTransfer;
