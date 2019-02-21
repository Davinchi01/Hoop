import styled from 'styled-components'
import {mainBackgroundColor} from "../../constants/index";
import {Col, Container} from "react-bootstrap";

export const FormWrapper = styled(Container)`
  background-color: ${mainBackgroundColor};
  padding: 0;
`
export const InnerContainer = styled(Col)`
  background-color: ${({background}) => background};
  padding: 0;
`
