import { useIntl } from '@umijs/max';
import { Alert, Button, Card, Col, DatePicker, Form, Input, Row } from 'antd';
import React from 'react';

const AddBankCard: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className="flex-between">
        <div className="card-title">
          {intl.formatMessage({ id: 'creditCard.addBankCard' })}
        </div>
      </div>
      <Card>
        <Alert
          className="mb-4"
          type="warning"
          message={intl.formatMessage({ id: 'creditCard.addCardExplain' })}
        />
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="bankName"
                label={intl.formatMessage({ id: 'transaction.bankCard' })}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cardholder"
                label={intl.formatMessage({ id: 'transaction.cardholder' })}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cardNo"
                label={intl.formatMessage({ id: 'creditCard.bankCardNo' })}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="expireDate"
                label={intl.formatMessage({ id: 'transaction.expirationDate' })}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <div className="w-full text-right">
              <Button type="primary">
                {intl.formatMessage({ id: 'creditCard.addCard' })}
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default AddBankCard;
