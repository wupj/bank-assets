import {
  GiftOutlined,
  ProjectOutlined,
  ToolOutlined,
  UserOutlined,
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
            icon={<UserOutlined />}
            style={{ color: '#396aff', backgroundColor: '#e7edff' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'loans.personalLoan' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$5000</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<GiftOutlined />}
            style={{ color: '#ffbb38', backgroundColor: '#fff5d9' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'loans.corporateLoan' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$10000</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<ProjectOutlined />}
            style={{ color: '#ff82ac', backgroundColor: '#ffe0eb' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'loans.commercialLoan' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$5000</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<ToolOutlined />}
            style={{ color: '#16dbcc', backgroundColor: '#dcfaf8' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'loans.commonLoan' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$0</div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Statistic;
