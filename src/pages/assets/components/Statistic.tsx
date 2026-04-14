import {
  GiftOutlined,
  PieChartOutlined,
  FrownOutlined
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
            icon={<GiftOutlined />}
            style={{ color: '#16dbcc', backgroundColor: '#dcfaf8' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'assets.totalInvestment' })}
            </div>
            <div className="text-[20px] font-bold leading-8">$15000</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<PieChartOutlined />}
            style={{ color: '#ff82ac', backgroundColor: '#ffe0eb' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'assets.investmentQuantity' })}
            </div>
            <div className="text-[20px] font-bold leading-8">1250</div>
          </div>
        </Card>
        <Card hoverable>
          <Avatar
            size={70}
            icon={<FrownOutlined />}
            style={{ color: '#396aff', backgroundColor: '#e7edff' }}
          />
          <div className="ml-4">
            <div className="text-gray-400">
              {intl.formatMessage({ id: 'assets.bounceRate' })}
            </div>
            <div className="text-[20px] font-bold leading-8">+5.80%</div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Statistic;
