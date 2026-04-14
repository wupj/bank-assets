import { useIntl } from '@umijs/max';
import { Button, Col, Form, Input, Row, Switch } from 'antd';
import React from 'react';

const Security: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="text-[18px] font-bold">
              {intl.formatMessage({ id: 'settings.twoFactorAuthentication' })}
            </div>
          </Col>
          <Col span={24}>
            <Form.Item name="currency">
              <Switch className="mr-[8px]" defaultChecked />
              {intl.formatMessage({
                id: 'settings.enableTwoFactorAuthentication',
              })}
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="text-[18px] font-bold">
              {intl.formatMessage({ id: 'settings.changePassword' })}
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item
              name="currentPassword"
              label={intl.formatMessage({ id: 'settings.currentPassword' })}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item
              name="newPassword"
              label={intl.formatMessage({ id: 'settings.newPassword' })}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="text-right">
              <Button type="primary">
                {intl.formatMessage({ id: 'settings.save' })}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Security;
