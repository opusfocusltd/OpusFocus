import React,{useState} from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtn,ArrowForward,ArrowRight} from "./HeroElements";

const HeroSection = () => {

    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
          <HeroH1>Job Finding Made Easy</HeroH1>
          <HeroP>With opus focus you can easily post and apply for jobs hassle-free so what are you waiting for? Join us today!</HeroP>
          <HeroBtn>
              <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                  Get started {hover? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
