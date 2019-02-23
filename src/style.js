import styled, {createGlobalStyle} from 'styled-components'
import {
  buttonBorderColor, infoButtonColor,
  mainButtonBackground,
  mainButtonColor,
  mobileBreakdown,
  secondaryButtonColor
} from "./constants/index";

export const GlobalStyles = createGlobalStyle`
  p {
    margin: 0;
  }
  html, body, #root {
    height: 100%;
  }
`

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({background}) => background};
  @media (max-width: ${mobileBreakdown}px) {
    padding: 0;
  }
`

const ButtonStyle = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  &:hover {
    transform: scale(1.03);
  }
  transition: all .3s ease-in-out;
`

export const MainButton = styled(ButtonStyle)`
  width: 176px;
  background-color: ${mainButtonBackground};
  opacity: ${({disabled}) => disabled ? 0.6 : 1};
  color: ${mainButtonColor};
  border-color: ${buttonBorderColor};
  
`

export const SecondaryButton = styled(ButtonStyle)`
  width: 88px;
  background-color: white;
  border: 1px solid ${buttonBorderColor};
  color: ${secondaryButtonColor};
  margin-right: 16px ;
`

export const InfoButton = styled(ButtonStyle)`
  width: 200px;
  background-color: white;
  border: 1px solid ${buttonBorderColor};
  color: white;
  font-size: 14px;
  background-color: ${infoButtonColor};
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const FormHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`
