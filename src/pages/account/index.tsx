import React from 'react';
import { Row, Col } from 'antd';

import Statistic from './components/Statistic';
import LastSale from './components/LastSale';
import SendInvoices from './components/SendInvoices';
import Overview from './components/Overview';

const Account: React.FC = () => {
  return (
    <>
    <Row gutter={[16, 16]}>
      <Col span={24}><Statistic /></Col>
      <Col span={16}><LastSale /></Col>
      <Col span={8}><SendInvoices /></Col>
      <Col span={24}><Overview /></Col>
    </Row>
    </>
  );
};

export default Account;
