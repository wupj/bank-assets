import { Col, Row } from 'antd';
import React from 'react';
import AddBankCard from './components/AddBankCard';
import BankCardList from './components/BankCardList';
import CardSetting from './components/CardSetting';
import ConsumeData from './components/ConsumeData';

const CreditCard: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <ConsumeData />
        </Col>
        <Col span={16}>
          <BankCardList />
        </Col>
        <Col span={16}>
          <AddBankCard />
        </Col>
        <Col span={8}>
          <CardSetting />
        </Col>
      </Row>
    </>
  );
};

export default CreditCard;
