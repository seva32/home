import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Text, Button, Label, TextArea } from './fields';
import Flex, { Column } from './Flex';
import Container from './Container';
import styled from 'styled-components';
import Logo from '../assets/images/Logo';

const StyledContainer = styled(Container)`
  height: 20px;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontFormMessage};
  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 1rem;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1rem;
  }
`;

const StyledInputColumn = styled(Column)`
  width: 75%;
  @media screen and (max-width: 850px) and (orientation: portrait) {
    width: 100%;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    width: 100%;
    padding: 0;
  }
`;

const StyledLabelColumn = styled(Column)`
  width: 25%;
  text-align: center;
  padding-top: 20px;
  @media screen and (max-width: 850px) and (orientation: portrait) {
    display: none;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    display: none;
  }
`;

const sendFeedback = (
  templateId,
  variables,
  { setSubmitting, setErrors, setStatus, resetForm }
) => {
  window.emailjs
    .send('gmail', templateId, variables)
    .then((res) => {
      //alert('Email successfully sent!')
      resetForm({});
      setStatus({ success: true });
    })
    // Handle errors here however you like, or use a React error boundary
    .catch((err) => {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: err.message });
    });
};

export const BasikForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      message: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(40, 'Must be 40 characters or less').matches(),
      message: Yup.string()
        .min(10, 'Must be a >= 10 characters message')
        .required('Required'),
      email: Yup.string().email('Invalid email address'),
    }),
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      const templateId = 'template_fJkHYOay';
      sendFeedback(
        templateId,
        {
          message_html: values.message,
          from_name: values.fullName,
          reply_to: values.email,
        },
        { setSubmitting, setErrors, setStatus, resetForm }
      );
    },
  });
  return (
    <Form
      onSubmit={formik.handleSubmit}
      style={{ backgroundColor: '#77dfb4', padding: '2rem' }}
    >
      <Text h4 center style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
        <Logo name="Envelope" width="50px" height="30px" />{' '}
        contact@sebastianfantini.com
      </Text>
      {/* Name input */}
      <Flex noWrap style={{ width: '100%' }}>
        <StyledLabelColumn>
          <Label htmlFor="fullName">Name</Label>
        </StyledLabelColumn>
        <StyledInputColumn>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            style={{ width: '100%' }}
          />
        </StyledInputColumn>
      </Flex>
      <StyledContainer>
        {(formik.touched.fullName && formik.errors.fullName && (
          <Text color="red">{formik.errors.fullName}</Text>
        )) || <Text>Enter your name</Text>}
      </StyledContainer>
      {/* email input */}
      <Flex noWrap style={{ width: '100%' }}>
        <StyledLabelColumn>
          <Label htmlFor="email">Email</Label>
        </StyledLabelColumn>
        <StyledInputColumn>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="email"
            style={{ width: '100%' }}
          />
        </StyledInputColumn>
      </Flex>
      <StyledContainer>
        {(formik.touched.email && formik.errors.email && (
          <Text color="red">{formik.errors.email}</Text>
        )) || <Text>Enter your email</Text>}
      </StyledContainer>
      {/* message */}
      <Flex noWrap style={{ width: '100%' }}>
        <StyledLabelColumn>
          <Label htmlFor="message">Message</Label>
        </StyledLabelColumn>
        <StyledInputColumn>
          <TextArea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            innerRef={(input) => console.log(input)}
            style={{ width: '100%' }}
          />
        </StyledInputColumn>
      </Flex>
      <StyledContainer>
        {(formik.touched.message && formik.errors.message && (
          <Text color="red">{formik.errors.message}</Text>
        )) || <Text>* Type your message</Text>}
      </StyledContainer>

      <Container fullVertical style={{ margin: '0.8rem 0' }}>
        <Button type="submit" width="80px">
          Submit
        </Button>
      </Container>
    </Form>
  );
};
