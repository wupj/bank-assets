import { GiftOutlined } from '@ant-design/icons';
import { useIntl, useRequest } from '@umijs/max';
import { Avatar, Button, Card, Spin } from 'antd';
import React from 'react';
import { getServiceList } from '@/services';

import useStyles from '../style.style';

const getList = async () => {
  const res = await getServiceList();
  return {
    data: res.data || [],
  };
};

const ServiceList: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  const { loading, data } = useRequest(getList);

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'equipment.bankServiceList' })}
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.listWrapper}>
          {data?.map((item: any) => (
            <Card key={item.id}>
              <Avatar
                size={60}
                icon={<GiftOutlined />}
                style={{ color: '#396aff', backgroundColor: '#e7edff' }}
              />
              <div className="ml-4 inline-flex flex-1 gap-2">
                <div className="min-w-[10vw]">
                  <div className="h-full flex items-center text-[16px]">
                    {item.type}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-full flex items-center text-[16px]">
                    {item.name}
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <Button color="cyan" variant="solid">
                    {intl.formatMessage({ id: 'equipment.details' })}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default ServiceList;
