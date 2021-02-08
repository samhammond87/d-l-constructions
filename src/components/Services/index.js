import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
import Fade from 'react-reveal/Fade';
// import react reveal library to implement animation and effects

const Services = () => {
  return (
    <ServicesContainer id='whyus'>
      <ServicesH1>Why us?</ServicesH1>

      <ServicesWrapper>
        {/* react reveal effect attributes */}
        <Fade bottom duration={3000}>
          <ServicesCard>
            <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-4.png' />
            <ServicesH2>Fast & Effective Services</ServicesH2>
            <ServicesP>
              We have the experience & resources to make the project run
              smoothly. We can ensure a job is done on time.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-5.png' />
            <ServicesH2>Value For Money</ServicesH2>
            <ServicesP>
              Competitive price with excellent customer service (quick return
              and good quality) is our strength point.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-6.png' />
            <ServicesH2>Customer Satisfaction</ServicesH2>
            <ServicesP>
              We will do everything possible, use the necessary resources to
              solve all the issues on hand.
            </ServicesP>
          </ServicesCard>
        </Fade>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
