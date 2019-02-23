import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {InnerContainer, FormWrapper} from "./style";
import {formBackgroundColor} from "../../constants/index";

class FormContainer extends Component {
    render() {
      return (
        <FormWrapper mb={this.props.mb}>
          <InnerContainer md={{span: 8, offset: 2}} xs={12} background={formBackgroundColor}>
            {this.props.children}
          </InnerContainer>
        </FormWrapper>
      );
    }
}

FormContainer.propTypes = {
  mb: PropTypes.number
}

export default FormContainer;
