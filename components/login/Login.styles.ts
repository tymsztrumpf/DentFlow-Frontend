import styled, { keyframes } from "styled-components";
import TextField from "@mui/material/TextField";
import {FormControlLabel, Grid} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {DateTimePicker} from "@mui/x-date-pickers";


export const RememberMeLabel = styled(FormControlLabel)`
  margin-left: 3rem;
  margin-right: 1rem;
  transition: 2s;
  @media(max-width:950px){
    position:relative;
    margin-top: 0rem;
    left:3rem;
    transition: 2s;
  }
`

export const PasswordRecoveryLabel = styled(Grid)`
  margin-left: 3rem;
  margin-right: 1rem;
  transition: 2s;
  @media(max-width:950px){
    position:relative;
    margin-top: 3rem;
    left:0rem;
    transition: 2s;
  }
`
export const ValidationError = styled.div`
  color: red;
  font-size: 13px;
  transition: 2s;
  @media(max-width:950px){
    width: 14rem;
    position:relative;
    margin-top: -1rem;
    left:3rem;
    transition: 2s;
  }
  @media (max-width: 450px) {
    position:relative;
    left:3rem;
    transition: 2s;
  }
`

interface LoginFormProps{
    height: number
}

export const LoginForm = styled.div<LoginFormProps>`
  width: 26rem;
  height: ${(props) => props.height}rem;
  background: #ffffff;
  border: 1px solid #1784b3;
  border-radius: 1rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  transition: 2s;

  @media (max-width: 950px) {
    width: 20rem;
    height: ${(props) => props.height}rem;
    margin: 5rem auto;
    transition: 2s;
  }
`

export const LoginHeader = styled.div`
  white-space: nowrap;
  color: #1784b3;
  font-weight: bold;
  font-size: 2rem;
  align-self: center;
  font-family: Montserrat;
  margin-bottom: 2rem;
  margin-top: 2rem;
  flex-direction: column;
  transition: 2s;

  @media (max-width: 950px) {
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    transition: 2s;
  }
`

export const LoginInputs = styled.div`
  width: 20rem;
  height: 40rem;
  margin-top: 0rem;
  align-self: center;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-direction: column;
  transition: 2s;
`
export const LoginP = styled.div`
  margin-top: 1rem;
  text-align: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  transition: 2s;
`
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  margin: auto;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 1s linear infinite;
`

export const StyledTextFieldMedium = styled(TextField)`
  && {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    padding: 0;
    transition: 2s;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 17px;
    }
  }

  @media(max-width: 950px) {
    && {
      display: none;
      width: 80%;
      margin-top: 1rem;
      padding: 0;
      transition: 2s;
      .MuiInputLabel-root {
        font-size: 14px;
      }
      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
`;

export const StyledTextFieldSmall = styled(TextField)`
  && {
    display: none;
    width: 80%;
    margin-top: 1rem;
    padding: 0;
    transition: 2s;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 16px;
    }
  }

  @media(max-width: 950px) {
    && {
      display: flex;
      width: 70%;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      transition: 2s;
      .MuiInputLabel-root {
        font-size: 14px;
        
      }
      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
`;

export const StyledDatePickerMedium = styled(DatePicker)`
  && {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    padding: 0;
    transition: 2s;
  }

  @media (max-width: 950px) {
    && {
      display: none;
      width: 80%;
      margin-top: 1rem;
      padding: 0;
      transition: 2s;
      .MuiInputLabel-root {
        font-size: 14px;
      }

      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
;`

export const StyledDatePickerSmall = styled(DatePicker)`
  && {
    display: none;
    width: 80%;
    margin-top: 0.5rem;
    padding: 0;
    transition: 2s;
    .MuiInputLabel-root {
      font-weight: normal;
      transition: 2s;
    }
    .MuiInputBase-input {
      font-size: 16px;
      transition: 2s;
    }
  }

  @media(max-width: 950px) {
    && {
      display: flex;
      width: 70%;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      transition: 2s;
      .MuiInputLabel-root {
        font-size: 14px;
        transition: 2s;
      }
      .MuiInputBase-input {
        font-size: 14px;
        transition: 2s;
      }
    }
  }
`;

export const LoginButton = styled.button`
  background-color: #FFBE5C;
  color: white;
  height: 3rem;
  width: 13rem;
  font-size: 1.5rem;


  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  display: block;
  transition: 2s;

     &:hover {
       filter: brightness(85%);
     }

    &:disabled{
      background-color: gray;
      filter: brightness(100%);
    }
  
  @media(max-width: 1400px){
    height: 3rem;
    width: 13rem;
    font-size: 1.5rem;
    transition: 2s;

  @media(max-width: 950px){
    height: 2.5rem;
    width: 10rem;
    font-size: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: block;
    transition: 2s;
  }
`
