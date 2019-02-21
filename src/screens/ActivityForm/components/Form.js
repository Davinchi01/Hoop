import React from 'react';
import {Field, Formik} from 'formik';
import {Col, Container} from "react-bootstrap";
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FormField from "../../../components/FormField/index";
import {mobileBreakdown} from "../../../constants/index";
import {FormHeader, InfoButton, Title} from "../../../style";

const initialValues = {
  name: '',
  postCode: '',
  buildingUnit: '',
  buildingName: '',
  streetNumber: '',
  streetName: '',
  town: ''
}

const validateField = (value) => {
  let error;
  if (!value) {
    error = 'Required field !';
  }
  return error;
}

const onSubmit = (props) => {
  console.log(props);
}

const validate = obj => Object.keys(obj).length === 0

const StyledContainer = styled(Container)`
  padding: 48px 0 52px;
  @media (max-width: ${mobileBreakdown}px) {
    padding: 24px 0 0;
  }
`

class Form extends React.Component {
  render() {
    const { bindSubmitForm, validateForm } = this.props;

    return <>
      <StyledContainer>
        <Col md={{span: 10, offset: 1}}>
          <FormHeader>
            <Title>Add the address</Title>
            <InfoButton>Copy from existing activity</InfoButton>
          </FormHeader>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={(props) => {
              bindSubmitForm(props.submitForm, props);
              validateForm(validate(props.errors) && !validate(props.touched))
              return (
                <form onSubmit={props.handleSubmit}>
                  <Field
                    type="text"
                    name="name"
                    label="Place name"
                    required={true}
                    validate={validateField}
                    component={FormField}/>
                  <Field
                    type="text"
                    name="postCode"
                    label="Postcode"
                    narrow={true}
                    required={true}
                    validate={validateField}
                    component={FormField}/>
                  <Field
                    type="text"
                    name="buildingUnit"
                    label="Building Unit"
                    narrow={true}
                    component={FormField}/>
                  <Field
                    type="text"
                    name="buildingName"
                    label="Building Name"
                    component={FormField}/>
                  <Field
                    type="text"
                    name="streetNumber"
                    label="Street Number"
                    component={FormField}/>
                  <Field
                    type="text"
                    name="streetName"
                    label="Street Name"
                    required={true}
                    validate={validateField}
                    component={FormField}/>
                  <Field
                    type="text"
                    name="town"
                    label="Town"
                    component={FormField}/>
                </form>
              )
            }}
          />
        </Col>
      </StyledContainer>
    </>
  }
};

Form.propTypes = {
  bindSubmitForm: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired,
}

export default Form;
