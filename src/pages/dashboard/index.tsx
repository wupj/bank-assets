import { Col, Row } from 'antd';
import React from 'react';
import BalanceRecord from './components/BalanceRecord';
import BatchTransfer from './components/BatchTransfer';
import Consumption from './components/Consumption';
import WeekActivity from './components/WeekActivity';

const Dashboard: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <WeekActivity />
        </Col>
        <Col span={8}>
          <Consumption />
        </Col>
        <Col span={10}>
          <BatchTransfer />
        </Col>
        <Col span={14}>
          <BalanceRecord />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
