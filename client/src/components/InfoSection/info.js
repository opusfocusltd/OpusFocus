import React from "react";
import { Button } from "../ButtonElement"
import { ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,BtnWrap,Subtitle,Img,Column2,BLink} from "./InfoElements";


const InfoSection = ({lightBg,lightText,id,topLine,darkText,imgStart,img,buttonLabel,description,alt,headline,primary,dark,dark2,to}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  primary={primary?1:0}
                  dark={dark?1:0}
                  dark2={dark?1:0}
                  ><BLink to={to} dark={dark?1:0}>{buttonLabel}</BLink></Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
