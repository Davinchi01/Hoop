import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from 'prop-types'
import styled from "styled-components";

import {MainButton, SecondaryButton} from "../../style";
import {Link} from "react-router-dom";
import {mobileBreakdown} from "../../constants/index";

const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px;
  height: 80px;
  @media (max-width: ${mobileBreakdown}px) {
    justify-content: center;
  }
`

const Wrapper = styled(Container)`
  background-color: white; 
  display: flex; 
  align-items: center;
`

const Shadow = styled.div`
  box-shadow: inset 0 1px 0 0 rgba(171,185,194,0.32);
  padding-top: 1px;
`

const FormFooter = ({handleSubmitForm, validForm}) => (
  <Shadow>
    <Wrapper>
      <StyledCol md={{span: 8, offset: 2}} xs={12}>
        <Row style={{justifyContent: 'flex-end'}}>
          <SecondaryButton onClick={() => {}}>Back</SecondaryButton>
          <Link to='/activity-form'>
            <MainButton
              disabled={!validForm}
              onClick={handleSubmitForm}
            >Next</MainButton>
          </Link>
        </Row>
      </StyledCol>
    </Wrapper>
  </Shadow>
);

FormFooter.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  validForm: PropTypes.bool,
}

export default FormFooter;
