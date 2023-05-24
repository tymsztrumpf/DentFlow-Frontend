import styled from "styled-components";
import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";

export const ProfileDiv = styled.div`
  @media(max-width: 768px){
    margin-left: 1rem;
    flex-direction: column;
  }
`;
export const ProfilePicture = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: block;
  margin: auto;
`;

export const TextFieldModal = styled(TextField)`
  //margin-right: 1rem;
  padding: 0.5em;
  //margin: 0.5em;
  color: palevioletred;
  //background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 20rem;
  //width: 100%;
  transition: 2s;
  @media(max-width: 1200px){
    width: 15rem;
    transition: 2s;
  }
  @media(max-width: 900px){
    width: 13rem;
    transition: 2s;
  }
  
`;

export const UserName = styled.div`
  color: #1784b3;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  font-family: Montserrat;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: 2s;
  @media (max-width: 950px) {
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    transition: 2s;
  }
`;

export const Button = styled.button`
  background-color: #FFBE5C;
  color: white;
  height: 3rem;
  width: 13rem;
  font-size: 1.5rem;
  margin-top: 2rem;
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
`;
export const ChangeButton = styled.button`
  background-color: #FFBE5C;
  color: white;
  height: 3rem;
  width: 13rem;
  font-size: 1rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  display: block;
     &:hover {
       filter: brightness(85%);
     }
    &:disabled{
      background-color: gray;
      filter: brightness(100%);
    }
  
  @media(max-width: 1400px){
    height: 2rem;
    width: 10rem;
    font-size: 1rem;
    
  @media(max-width: 950px){
    height: 1.5rem;
    width: 8rem;
    font-size: 0.5rem;
    display: block;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: #fff;
  width: 500px;
  padding: 20px;
  border: 1px solid #1784b3;
  border-radius: 1rem;
  @media(max-width: 1950px){
    width: 20rem;
  }
  @media(max-width: 1200px){
    width: 15rem;
  }
`;

export const PaymentModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: #fff;
  width: 28rem;
  padding: 20px;
  border: 1px solid #1784b3;
  border-radius: 1rem;
  transition: 2s;
  @media(max-width: 1200px){
    width: 20rem;
    transition: 2s;
  }
  @media(max-width: 900px){
    width: 15rem;
    transition: 2s;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5em;
  //margin: 0.5em;
  color: #1784b3;
  border: none;
  border-radius: 3px;
  width: 86%;
  display: block;
  margin: 0 auto 1rem;
  option {
    padding: 0.5em;
  }
`;

export const ModalBody = styled.div`
  //display: flex;
  gap: 10px;
  margin-top: 2rem;
  margin-bottom: 20px;
  text-align: center;
  transition: 2s;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
`;

export const ClinicData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #1784B3;
  border-radius: 5px;
  padding: 40px;
  gap: 30px;
`

export const TableDiv = styled(Box)`
  width: 120rem;
  padding-top: 5rem;
  padding-right: 5rem;
  padding-left: 5rem;
  flex: 2;
  @media(max-width: 1950px){
    padding-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 80rem;
    flex-direction: column;
  }
  @media(max-width: 1200px){
    padding-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 20rem;
    flex-direction: column;
  }
`;

export const ModalContentClinic = styled.div`
  position: relative;
  z-index: 101;
  width: 1450px;
  padding: 20px;
  border: 1px solid #1784b3;
  border-radius: 1rem;
  background-color: white;

`;
export const Table = styled.table`
  width: 1450px;
  border-collapse: collapse;
`;


export const AddButton  = styled.button`
  background-color: #FFBE5C;
  color: white;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: block;
  &:hover {
    filter: brightness(85%);
  }
  
`;

export const DeleteButton  = styled.button`
  background: none;
  border: none;
  text-align: center;
  padding-top: 3px;
  margin-top: auto;
  margin-bottom: auto;
  cursor:pointer;
  height:20px;
  border-radius:10px;
  :hover{
    background-color: lightgray;
  }
`;


export const AutocompleteTime = styled(Autocomplete)`
  margin-top: 5px;
  width: 6.1rem;
`;
export const TimeSettings = styled.div`
  display: flex;
  flex-direction: row;
`;


export const CenterDiv = styled.div`
  width: 12.2rem;
`;


export const ComponentWrapper  = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 15px 10px 10px;
  width: 320px;
  height: 57.4px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  text-align: center;
  font-size: 1rem;
`;


export const Header   = styled.div`
  position:absolute;
  margin-top:-30px;
  color:lightgray;
  height: 17.24px;
  background-color: white;
  border-radius:10px;
  padding:2px 10px;
  font-size: 16px;
`;


