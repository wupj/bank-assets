import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { SelectLang, useIntl, useModel } from '@umijs/max';
import { App, Card } from 'antd';
import React from 'react';
import { flushSync } from 'react-dom';
import { login } from '@/services';
import type { LoginParams } from '@/types';

import useStyles from './style.style';

const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();
  const { message } = App.useApp();
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const res = await initialState?.fetchUserInfo?.();
    if (res) {
      localStorage.setItem('userInfo', JSON.stringify(res.userInfo));
      localStorage.setItem('userAccess', JSON.stringify(res.access));
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: res.userInfo,
          userAccess: res.access,
        }));
      });
    }
  };

  const handleSubmit = async (values: LoginParams) => {
    const res = await login({ ...values });
    if (res.code === 0) {
      message.success(intl.formatMessage({ id: 'login.success' }));
      localStorage.setItem('token', res.data.token);
      await fetchUserInfo();
      const urlParams = new URL(window.location.href).searchParams;
      window.location.href = urlParams.get('redirect') || '/';
    }
  };

  return (
    <div className={styles.container}>
      <Lang />
      <div className={styles.wrapper}>
        <Card variant="borderless" hoverable>
          <LoginForm
            contentStyle={{
              minWidth: 350,
              maxWidth: '75vw',
            }}
            logo={<img alt="logo" src="/logo.svg" />}
            title="Login"
            onFinish={async (values: LoginParams) => {
              await handleSubmit(values);
            }}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'login.usernamePlaceholder',
              })}
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'login.pleaseEnterUsername',
                  }),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'login.passwordPlaceholder',
              })}
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'login.pleaseEnterPassword',
                  }),
                },
              ]}
            />
          </LoginForm>
        </Card>
      </div>
    </div>
  );
};

export default Login;
