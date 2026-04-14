import { Col, Row } from 'antd';
import React from 'react';
import BankCard from './components/BankCard';
import Consumption from './components/Consumption';
import LastSale from './components/LastSale';

const Transaction: React.FC = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={16}><BankCard /></Col>
        <Col span={8}><Consumption /></Col>
        <Col span={24}><LastSale /></Col>
      </Row>
    </>
  )
};

export default Transaction;
