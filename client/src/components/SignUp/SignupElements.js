import styled from "styled-components";
import {Link} from 'react-router-dom'

export const FormContainer = styled.div`
 border-radius: 0 10px 10px 0;
 position: relative;
 background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const FormContent = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormH1 = styled.h1`
 font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #fff;
`

export const FormInputWrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`

export const FormLabel = styled.label`
   display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;

  ::placeholder{
    color: #595959;
    font-size: 12px;
  }
` 

export const Btn = styled.button`
   width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(1, 191, 113) 0%,
    rgb(51, 203, 141) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem; 

  :hover{
    cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(102, 248, 189) 0%,
    rgb(76, 247, 178) 100%
  );
  transition: all 0.4s ease-out;
  }
`

export const FormSpan = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
`

export const FormA = styled(Link)`
  text-decoration: none;
  color: #01bf71;
  font-weight: 600;
`

export const FormP = styled.p`
 font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e;
`

export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1100px;
 margin: 40px auto 0 auto;
`

export const SocialMediaLogo = styled(Link)`
 color: #fff;
 justify-self: start;
 cursor: pointer;
 text-decoration: none;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-bottom: 16px;
 font-weight: bold;
` 


export const SocialIcons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 240px;
`

export const SocialIconLink = styled.a`
 color: #fff;
 font-size: 24px;
 text-decoration: none;

 &.i1:hover{
   color: #4267B2;
 }

 &.i2:hover{
   color: #cd486b;
 }

 &.i3:hover{
   color: #1DA1F2;
 }

 &.i4:hover{
   color: #0077b5;
 }
`