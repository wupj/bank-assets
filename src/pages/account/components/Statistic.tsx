import {
  AccountBookOutlined,
  DollarOutlined,
  GiftOutlined,
  TransactionOutlined,
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
      <div className={classNames(styles.statisticwrapper, 'flex gap-4')}>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<DollarOutlined />}
            style={{ color: '#ffbb38', backgroundColor: '#fff5d9' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'account.myBalance' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$12750</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<AccountBookOutlined />}
            style={{ color: '#396aff', backgroundColor: '#e7edff' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'account.income' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$5600</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<TransactionOutlined />}
            style={{ color: '#ff82ac', backgroundColor: '#ffe0eb' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'account.cost' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$3460</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<GiftOutlined />}
            style={{ color: '#16dbcc', backgroundColor: '#dcfaf8' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'account.totalSavings' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$7920</div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Statistic;
