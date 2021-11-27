import styled from "styled-components";
import {Link} from 'react-router-dom'


export const FormContain = styled.div`
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 99;

`

export const FormSpan = styled.span`
 position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`

// rgb(39, 176, 255) 0%,
//     rgb(0, 232, 236) 100%

export const FormContent = styled.div`
   background: linear-gradient(
    90deg,
    rgb(1, 191, 113) 0%,
    rgb(51, 203, 141) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;
`

export const FormImg = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FormL = styled(Link)`
 text-decoration: none;
 color: #fff;
`