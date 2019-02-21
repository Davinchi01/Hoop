import styled from 'styled-components'
import {fieldBorderColor} from "../../constants/index";
import {Form} from 'react-bootstrap'

export const ErrorContainer = styled.div`
  height: 13px;
  width: 100%;
`

export const ErrorText = styled.p`
  color: ${({error}) => error ? 'red' : 'white'};
  transition: 0.3s ease-in-out;
  font-size: 10px;
`

export const FormControl = styled(Form.Control)`
  border: 2px solid ${fieldBorderColor};
`
