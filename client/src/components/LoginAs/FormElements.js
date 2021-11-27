import styled from "styled-components";
import {Link} from 'react-router-dom'

export const FormContainer = styled.div`
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: flex;
  justify-content: center;
  justify-content: start;
  background-color: #010606;
  flex-direction: column;
`

export const FormH1 = styled.h1`
 color: #fff;
`

export const BtnWrapper = styled.div`
 
`


export const Button = styled(Link)`
 width: 20px;
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 14px 48px;
 color: #fff;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 text-decoration: none;
 align-items: center;
 transition: 0.2s ease-in-out;

 &:hover{
     transition: 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
 }
`