import { UserOutlined } from '@ant-design/icons';
import { useIntl, useModel } from '@umijs/max';
import { Avatar, Button, Col, DatePicker, Form, Input, Row } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';

const Profile: React.FC = () => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const { initialState } = useModel('@@initialState');
  const { currentUser }: any = initialState;

  useEffect(() => {
    form.setFieldsValue(currentUser);
  }, [currentUser]);

  return (
    <>
      <Form form={form} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Form.Item name="avatar" className="text-center">
              <Avatar size={120} icon={<UserOutlined />} />
            </Form.Item>
          </Col>
          <Col span={20}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="userName"
                  label={intl.formatMessage({ id: 'settings.name' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="formerName"
                  label={intl.formatMessage({ id: 'settings.formerName' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label={intl.formatMessage({ id: 'settings.email' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label={intl.formatMessage({ id: 'settings.password' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="birthday"
                  label={intl.formatMessage({ id: 'settings.birthDate' })}
                  getValueProps={(value) => ({ value: value && dayjs(value) })}
                >
                  <DatePicker className="w-full" format="YYYY-MM-DD" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label={intl.formatMessage({ id: 'settings.currentAddress' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="permanentAddress"
                  label={intl.formatMessage({
                    id: 'settings.permanentAddress',
                  })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="city"
                  label={intl.formatMessage({ id: 'settings.city' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="postcode"
                  label={intl.formatMessage({ id: 'settings.postcode' })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="country"
                  label={intl.formatMessage({ id: 'settings.country' })}
                >
                  <Input />
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
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Profile;
