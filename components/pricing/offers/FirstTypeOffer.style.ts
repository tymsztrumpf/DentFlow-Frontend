import styled from 'styled-components';

export const FirstOfferContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #23A6F0;
  border-radius: 10px;
  padding: 2.8rem;
  align-items: center;
  transition: 2s;


  @media(max-width: 1400px) {
    padding: 1.5rem;
    margin-top: 0;
    transition: 2s;
  }
  
  @media(max-width: 1250px) {
    transition: 2s;
  }
  
  
  @media(max-width: 950px) {
    padding: 1.5rem;
    margin-top: -3rem;
    margin-bottom: 4rem;
    transition: 2s;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 2s;
  //background: #FAFAFA;
`

export const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  transition: 2s;
  
  @media(max-width: 790px) {
    margin-top: 1rem;
    transition: 2s;
  }
`

export const OfferParam = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

export const OfferIcon = styled.div`
  display: flex;
  justify-items: auto;
  flex-direction: row;
  padding-top: 1rem;
  margin-top: 1rem;
  transition: 2s;
  
  @media(max-width: 950px) {
    padding-top: 0.5rem;
    transition: 2s;
  }
`

export const CurrencyTextArea = styled.div`
  align-items: center;
`

export const H1 = styled.div`
  font-size: 2rem;
  font-family: Montserrat;
  font-weight: bold;
  margin-top: 2rem;
  color: #1784B3;
  transition: 2s;
 
  @media(max-width: 1400px){
    font-size: 1.7rem;
    transition: 2s;
  }
`

export const H2 = styled.div`
  font-size: 4rem;
  font-family: Montserrat;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #FFBE5C;
  transition: 2s;
  
  @media(max-width: 1400px){
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-self: center;
    transition: 2s;
  }
`

export const H3 = styled.div`
  font-size: 1.3rem;
  font-family: Montserrat;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #FFBE5C;
  transition: 2s;
  
  
  @media(max-width: 1500px){
    margin-left: 0.1rem;
    margin-right: 0.5rem;
    transition: 2s;
  }

  @media(max-width: 950px){
    font-size: 1.1rem;
    margin-left: 0.1rem;
    margin-right: 0.5rem;
    transition: 2s;
  }
`

export const H4 = styled.div`
  font-size: 1rem;
  font-family: Montserrat;
  margin-left: 1rem;
  text-space: 0.1rem;
  transition: 2s;
  
  @media(max-width: 1400px){
    font-size: 0.7rem;
    transition: 2s;
  }

  @media(max-width: 790px){
    font-size: 0.7rem;
    transition: 2s;
  }
`