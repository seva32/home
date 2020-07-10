import React from 'react';
import Container from '../../components/Container';
import { BasikForm } from '../../components/BasikForm';
import * as Styles from './FormView.styles';
export const FormView = () => {
  return (
    <Container full fullVertical heightVh widthVw id="form-view">
      <Styles.FormWrapper>
        <BasikForm />
      </Styles.FormWrapper>
    </Container>
  );
};
