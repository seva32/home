import React from 'react';
import * as Styles from './Footer.styles';
import Heading from '../../components/Heading';

const Footer = () => {
  return (
    <Styles.FooterWrapper>
      <Heading
        h5
        center
        style={{ color: 'white', verticalAlign: 'center', marginBottom: '0' }}
      >
        2020
        <span style={{ color: 'rgb(119, 223, 180)', fontWeight: 'bolder' }}>
          {' '}
          -{' '}
        </span>
        SEBASTIANFANTINI.COM
      </Heading>
    </Styles.FooterWrapper>
  );
};

export default Footer;
