import React, { useState } from 'react';
// import Video from "../../videos/video.mp4";
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Spring } from 'react-spring/renderprops';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        <VideoBg
          autoPlay
          loop
          muted
          src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/videos/video.mp4'
          type='video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <Spring
          from={{ opacity: 0, marginTop: -1000 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          {(props) => (
            <div style={props}>
              <HeroH1>Get A Free Quote Today!</HeroH1>
              <HeroP>Plastering Services Sydney Wide</HeroP>
            </div>
          )}
        </Spring>

        <HeroBtnWrapper>
          <Button
            to='contact'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
