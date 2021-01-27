import React from "react";
import Icon1 from "../../images/svg-4.png";
import Icon2 from "../../images/svg-5.png";
import Icon3 from "../../images/svg-6.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="whyus">
      <ServicesH1>Why us?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Fast & Effective Services</ServicesH2>
          <ServicesP>
            We have the experience & resources to make the project run smoothly.
            We can ensure a job is done on time.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Value For Money</ServicesH2>
          <ServicesP>
            Competitive price with excellent customer service (quick return and
            good quality) is our strength point.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Customer Satisfaction</ServicesH2>
          <ServicesP>
            We will do everything possible, use the necessary resources to solve
            all the issues on hand.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
