import styled from 'styled-components'
import {mainBackgroundColor} from "../../constants/index";
import {Col, Container} from "react-bootstrap";
import {mobileBreakdown} from "../../constants";

export const FormWrapper = styled(Container)`
  background-color: ${mainBackgroundColor};
  padding: 0;
  margin-bottom: ${({mb}) => mb || 0}px;
  @media (max-width: ${mobileBreakdown}px) {
    margin-bottom: -15px;
  }
`
export const InnerContainer = styled(Col)`
  background-color: ${({background}) => background};
  padding: 0;
`
