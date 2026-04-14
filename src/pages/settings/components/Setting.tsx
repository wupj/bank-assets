import { useIntl } from '@umijs/max';
import { Button, Col, DatePicker, Form, Input, Row, Switch } from 'antd';
import React from 'react';

const Setting: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Form layout="vertical">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item
              name="currency"
              label={intl.formatMessage({ id: 'settings.currency' })}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="timeZone"
              label={intl.formatMessage({ id: 'settings.timeZone' })}
            >
              <DatePicker className="!w-full" format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="notice"
              label={intl.formatMessage({ id: 'settings.notice' })}
            >
              <div className="flex flex-col gap-[16px]">
                <div className="">
                  <Switch className="mr-[8px]" defaultChecked />
                  {intl.formatMessage({
                    id: 'settings.receivedigitalCurrency',
                  })}
                </div>
                <div className="">
                  <Switch className="mr-[8px]" />
                  {intl.formatMessage({ id: 'settings.receivedMerchantOrder' })}
                </div>
                <div className="">
                  <Switch className="mr-[8px]" />
                  {intl.formatMessage({ id: 'settings.accountRcommendation' })}
                </div>
              </div>
            </Form.Item>
          </Col>
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

export default Setting;
