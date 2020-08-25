import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import PStyles from './Product.module.css';
import styled from 'styled-components';

const QuantityValue = styled.span`
  font-weight: 500px;
  color: ${props => props.color};
`;
const QuantityValue1 = styled.span`
  font-weight: 500px;
  color: ${props => (props.inStock ? 'green' : 'red')};
`;

const item = () => {
  return 5 + 6;
};

function Product(props) {
  const { name, text, src, cost } = props;

  // const quaClass = [
  //   PStyles.title,
  //   name.length < 15 ? PStyles.colorRed : PStyles.colorGreen,
  // ].join(' ');

  //Применили в CSS  composes: имя класса ;
  const quaClass = name.length < 15 ? PStyles.colorRed : PStyles.colorGreen;
  const isInStock = name.length > 13;

  return (
    <>
      <Counter step={11} />
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        data-name={src}
        className={PStyles.img}
      />
      <h2 className={quaClass}>{name}</h2>
      <p>
        Price: {cost}$ {item()} {text}
      </p>
      <QuantityValue color="red">
        {isInStock ? `ssssssssstruessssssssss` : 'ggggggggfalseggggggggg'}
      </QuantityValue>
      <QuantityValue1 inStock={isInStock}>
        {isInStock ? `sssssssstruessssssss` : 'ggggggggfalsegggggggg'}
      </QuantityValue1>
      <button type="button" className={PStyles.button}>
        Add to card{' '}
      </button>
    </>
  );
}
Product.defaultProps = {
  //  Это значения будут по умолчанию  в
  cost: 22,
  text: 'Text not find',
  src:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  // PropTypes.string.isRequired =  тип переменой будет обязателен
  // PropTypes.string = тип переменой будет не обязателен
  cost: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Product;
