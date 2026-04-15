import {
  InsuranceOutlined,
  PropertySafetyOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Avatar, Card } from 'antd';
import classNames from 'classnames';
import React from 'react';

import useStyles from '../style.style';

const Statistic: React.FC = () => {
  const { styles } = useStyles();

  const intl = useIntl();

  return (
    <>
      <div className={classNames(styles.wrapper, 'flex gap-4')}>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<InsuranceOutlined />}
            style={{ color: '#396aff', backgroundColor: '#e7edff' }}
          />
          <div className="ml-4">
            <div className="text-[20px] font-bold leading-8">
              {intl.formatMessage({ id: 'equipment.lifeInsurance' })}
            </div>
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'equipment.indefinite' })}
            </div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<ShoppingOutlined />}
            style={{ color: '#ffbb38', backgroundColor: '#fff5d9' }}
          />
          <div className="ml-4">
            <div className="text-[20px] font-bold leading-8">
              {intl.formatMessage({ id: 'equipment.shopping' })}
            </div>
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'equipment.shopping' })}
            </div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<PropertySafetyOutlined />}
            style={{ color: '#16dbcc', backgroundColor: '#dcfaf8' }}
          />
          <div className="ml-4">
            <div className="text-[20px] font-bold leading-8">
              {intl.formatMessage({ id: 'equipment.safety' })}
            </div>
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'equipment.reliableButler' })}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Statistic;
