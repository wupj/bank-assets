import { Col, Row } from 'antd';
import React from 'react';

import Statistic from './components/Statistic';
import AnnualInvestment from './components/AnnualInvestment';
import MonthIncome from './components/MonthIncome';
import Asset from './components/Asset';
import Trend from './components/Trend';

const Assets: React.FC = () => {
  return (
    <>
    <Row gutter={[16, 16]}>
      <Col span={24}><Statistic /></Col>
      <Col span={12}><AnnualInvestment /></Col>
      <Col span={12}><MonthIncome /></Col>
      <Col span={12}><Asset /></Col>
      <Col span={12}><Trend /></Col>
    </Row>
    </>
  );
};

export default Assets;
