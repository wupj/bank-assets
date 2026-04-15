import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Avatar, Card } from 'antd';
import React from 'react';

import useStyles from '../style.style';

const CardSetting: React.FC = () => {
  const { styles } = useStyles();
  const intl = useIntl();

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'creditCard.cardSetting' })}
        </div>
      </div>
      <Card>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <Avatar
              size={60}
              icon={<CreditCardOutlined />}
              style={{ color: '#396aff', backgroundColor: '#e7edff' }}
            />
            <div className="ml-4 inline-flex flex-col flex-1">
              <div className="text-[16px] leading-3">
                {intl.formatMessage({ id: 'transaction.bankCard' })}
              </div>
              <div className="text-gray-400">
                {intl.formatMessage({
                  id: 'creditCard.immediatelyBlockYourCard',
                })}
              </div>
            </div>
          </div>
          <div className="flex">
            <Avatar
              size={60}
              icon={<LockOutlined />}
              style={{ color: '#ffbb38', backgroundColor: '#fff5d9' }}
            />
            <div className="ml-4 inline-flex flex-col flex-1">
              <div className="text-[16px] leading-3">
                {intl.formatMessage({ id: 'creditCard.changePinCode' })}
              </div>
              <div className="text-gray-400">
                {intl.formatMessage({ id: 'creditCard.chooseAnotherPinCode' })}
              </div>
            </div>
          </div>
          <div className="flex">
            <Avatar
              size={60}
              icon={<GoogleOutlined />}
              style={{ color: '#ff82ac', backgroundColor: '#ffe0eb' }}
            />
            <div className="ml-4 inline-flex flex-col flex-1">
              <div className="text-[16px] leading-3">
                {intl.formatMessage({ id: 'creditCard.addGooglePay' })}
              </div>
              <div className="text-gray-400">
                {intl.formatMessage({ id: 'creditCard.cardlessWithdraw' })}
              </div>
            </div>
          </div>
          <div className="flex">
            <Avatar
              size={60}
              icon={<AppleOutlined />}
              style={{ color: '#16dbcc', backgroundColor: '#dcfaf8' }}
            />
            <div className="ml-4 inline-flex flex-col flex-1">
              <div className="text-[16px] leading-3">
                {intl.formatMessage({ id: 'creditCard.addAppleStore' })}
              </div>
              <div className="text-gray-400">
                {intl.formatMessage({ id: 'creditCard.cardlessWithdraw' })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardSetting;
