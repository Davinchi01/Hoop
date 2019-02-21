import React, { Component } from 'react';

import {InnerContainer, FormWrapper} from "./style";
import {formBackgroundColor} from "../../constants/index";

class FormContainer extends Component {
    render() {
      return (
        <FormWrapper>
          <InnerContainer md={{span: 8, offset: 2}} xs={12} background={formBackgroundColor}>
            {this.props.children}
          </InnerContainer>
        </FormWrapper>
      );
    }
}

export default FormContainer;
