import React from 'react';
import Order from './FlexItem/Order';
import FlexShrink from './FlexItem/FlexShrink';
import FlexGrow from './FlexItem/FlexGrow';
import FlexBasis from './FlexItem/FlexBasis';
import Flex from './FlexItem/Flex';
import AlignSelf from './FlexItem/AlignSelf';
import './FlexItem.css';


const FlexItem = () => {
  return (
    <div className='container_flexitem'>
      <h2>Order</h2>
      <Order />
      <h2>FlexShrink</h2>
      <FlexShrink />
      <h2>FlexGrow</h2>
      <FlexGrow />
      <h2>FlexBasis</h2>
      <FlexBasis />
      <h2>Flex</h2>
      <Flex />
      <h2>AlignSelf</h2>
      <AlignSelf />
    </div>
  )
}

export default FlexItem