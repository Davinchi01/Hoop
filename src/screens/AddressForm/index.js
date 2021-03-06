import React, {PureComponent} from 'react';
import FormContainer from "../../components/FormContainer/index";
import Form from "../ActivityForm/components/Form";
import {Container as CustomContainer} from "../../style";
import {mainBackgroundColor} from "../../constants/index";
import FormFooter from "../../components/FormFooter/index";
import Header from "../../components/Header/index";

class AddressForm extends PureComponent {
  state = {
    valid: false
  }

  submitMyForm = null;
  formProps = null;

  handleSubmitForm = (e) => {
    if (this.submitMyForm) {
      this.submitMyForm(e);
    }
  }

  bindSubmitForm = (submitForm, props) => {
    this.submitMyForm = submitForm;
    this.formProps = props
  }

  validateForm = valid => {
    this.setState({valid})
  }

  render() {
    return (
      <>
        <Header/>
        <CustomContainer background={mainBackgroundColor}>
          <FormContainer>
            <Form
              bindSubmitForm={this.bindSubmitForm}
              validateForm={this.validateForm}
            />
          </FormContainer>
        </CustomContainer>
        <FormFooter
          handleSubmitForm={this.handleSubmitForm}
          validForm={this.state.valid}
        />
      </>
    );
  }
}

export default AddressForm;
