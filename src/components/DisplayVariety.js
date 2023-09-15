import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPlay } from 'react-icons/bs';
import LineChart from './Chart/Chart';
import data from '../app/data.json';

import '../App.css';

export function DisplayVariety({ chilliType = 'teja' }) {
  const {
    header,
    description,
    productDetails,
    productDetailsContent,
    specifications,
    colorValue,
    pungency,
    capsaicinPercentage,
    type,
    typeContent,
  } = data[chilliType];

  return (
    <div>
      <div>
        <div>{header}</div>
        <div>{description}</div>
        <div className="display-table-container">
          <div className="product-details">
            <div className="product-details-header">
              <AiFillInfoCircle />
              <span>{productDetails}</span>
            </div>
            <div className="product-details-content">
              <p>{productDetailsContent}</p>
            </div>
          </div>
          <div className="specifications">
            <div className="specifications-header">
              <GiHamburgerMenu />
              <span>{specifications}</span>
            </div>
            <div className="specifications-content">
              <div>Color Value: {colorValue}</div>
              <div>Pungency: {pungency}</div>
              <div>Capsaicin Percentage: {capsaicinPercentage}</div>
            </div>
          </div>
          <div className="type">
            <div className="type-header">
              <BsPlay />
              <span>{type}</span>
            </div>
            <div className="type-content">{typeContent}</div>
          </div>
        </div>
      </div>

      <LineChart variety={chilliType} />
    </div>
  );
}

export default DisplayVariety;
