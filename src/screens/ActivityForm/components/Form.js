import React from 'react';
import {Field, Formik} from 'formik';
import {Col, Container, Form, Row} from "react-bootstrap";
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FormField from "../../../components/FormField/index";
import {ageOptions, mobileBreakdown} from "../../../constants/index";
import {FormHeader, InfoButton, Title} from "../../../style";

const initialValues = {
  activityName: '',
  recommendedAgeFrom: '',
  recommendedAgeTo: '',
  buildingName: '',
}

const validateField = (value) => {
  let error;
  if (!value) {
    error = 'Required field !';
  }
  return error;
}

const validate = obj => Object.keys(obj).length === 0

const StyledContainer = styled(Container)`
  padding: 48px 0 52px;
  @media (max-width: ${mobileBreakdown}px) {
    padding: 24px 0 0;
  }
`

class ActivityForm extends React.Component {
  renderOptions = () =>
    ageOptions.map((el, i) => (
      <option key={i} value={el}>{el}</option>
    ))
  render() {
    const { bindSubmitForm, validateForm } = this.props;

    return <>
      <StyledContainer>
        <Col md={{span: 10, offset: 1}} style={{padding: 0}}>
          <FormHeader>
            <Title>About your activity</Title>
          </FormHeader>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
            render={(props) => {
              bindSubmitForm(props.submitForm, props);
              validateForm(validate(props.errors) && !validate(props.touched))
              return (
                <Form onSubmit={props.handleSubmit}>
                  <Field
                    type="text"
                    name="activityName"
                    label="Activity Name"
                    required={true}
                    validate={validateField}
                    component={FormField}/>
                    <Col>
                  <Row style={{alignItems: 'flex-end'}}>
                      <Field
                        as="select"
                        name="recommendedAgeFrom"
                        label="Recommended Age"
                        col={{md: 6, xs: 12}}
                        required={true}
                        validate={validateField}
                        component={FormField}>
                        <option value="">From</option>
                        {this.renderOptions()}
                      </Field>
                      <Field
                        as="select"
                        name="recommendedAgeTo"
                        required={true}
                        placeholder="To"
                        col={{md: 6, xs: 12}}
                        validate={validateField}
                        component={FormField}>
                        <option value="">To</option>
                        {this.renderOptions()}
                      </Field>
                  </Row>
                    </Col>
                  <Field
                    type="text"
                    name="buildingName"
                    label="Building Name"
                    required={true}
                    placeholder="e.g. example.com/activity"
                    validate={validateField}
                    component={FormField}/>
                  <Field
                    type="text"
                    name="activityPhoneNumber"
                    label="Activity Phone Number"
                    component={FormField}/>
                </Form>
              )
            }}
          />
        </Col>
      </StyledContainer>
    </>
  }
};

ActivityForm.propTypes = {
  bindSubmitForm: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired,
}

export default ActivityForm;
