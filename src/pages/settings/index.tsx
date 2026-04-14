import { useIntl } from '@umijs/max';
import type { TabsProps } from 'antd';
import { Card, Tabs } from 'antd';
import React from 'react';

import Profile from './components/Profile';
import Security from './components/Security';
import Setting from './components/Setting';

const Settings: React.FC = () => {
  const intl = useIntl();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: intl.formatMessage({ id: 'settings.editPersonalInformation' }),
      children: <Profile />,
    },
    {
      key: '2',
      label: intl.formatMessage({ id: 'settings.setting' }),
      children: <Setting />,
    },
    {
      key: '3',
      label: intl.formatMessage({ id: 'settings.securityCenter' }),
      children: <Security />,
    },
  ];

  return (
    <>
      <Card className="h-full">
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </>
  );
};

export default Settings;
