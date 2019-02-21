import React, { Component } from 'react';
import styled from 'styled-components'
import {infoButtonColor, mainBackgroundColor, mobileBreakdown, secondaryGrey} from "../../constants/index";
import {Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const StyledContainer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${mobileBreakdown}px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const Wrapper = styled(Container)`
  background-color: ${mainBackgroundColor};

`

const LinkStyled = styled(Link)`
  color: ${infoButtonColor};
  font-size: 14px;
`

const ColStyled = styled(Col)`
  padding: 0;
`

const LogoText = styled.p`
  font-size: 14px;
  color: ${secondaryGrey}
`

class Header extends Component {
    render() {
      return (
        <Wrapper fluid>
          <Col md={{span: 8, offset: 2}}>
            <ColStyled md={{span: 10, offset: 1}}>
              <StyledContainer>
                <LogoText>Mr Boing’s Trampoline Club</LogoText>
                <LinkStyled to="/activity-form">Back to your activities</LinkStyled>
              </StyledContainer>
            </ColStyled>
          </Col>
        </Wrapper>
      );
    }
}

export default Header;
