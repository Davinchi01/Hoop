import React, {PureComponent} from 'react';
import FormContainer from "../../components/FormContainer/index";
import Form from "./components/Form";
import {Container as CustomContainer} from "../../style";
import {mainBackgroundColor} from "../../constants/index";
import FormFooter from "../../components/FormFooter/index";
import Header from "../../components/Header/index";

import styled from 'styled-components'
import {mobileBreakdown} from "../../constants";

export const SSS = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  @media (max-width: ${mobileBreakdown}px) {
    margin-bottom: -15px;
  }
`

class ActivityForm extends PureComponent {
  state = {
    valid: false
  }

  submitMyForm = null;

  handleSubmitForm = (e) => {
    if (this.submitMyForm) {
      this.submitMyForm(e);
    }
  }

  bindSubmitForm = submitForm => {
    this.submitMyForm = submitForm;
  }

  validateForm = valid => {
    this.setState({valid})
  }

  render() {
    return (
      <CustomContainer background={mainBackgroundColor}>
          <Header/>
          <FormContainer>
            <Form
              bindSubmitForm={this.bindSubmitForm}
              validateForm={this.validateForm}
            />
          </FormContainer>
        <div style={{backgroundColor: 'white', height: 73}}>
          <FormFooter
            handleSubmitForm={this.handleSubmitForm}
            validForm={this.state.valid}
            redirectTo="/address-form"
          />
        </div>
      </CustomContainer>
    );
  }
}

export default ActivityForm;
