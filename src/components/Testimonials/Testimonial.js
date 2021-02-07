import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

function TestimonialCarusel() {
  return (
    <div>
      <h1 className="TestimonialHeader">Client Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <div className="testimonialSlideContainer">
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/01.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "Thank you for guiding us through the construction process,
                  being kind, understanding, and always ready to accommodate our
                  needs. We love our new space and know that it was built by the
                  very best!"
                </p>
                <h3>Naomi</h3>
                <p> Fulton Hogan</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/02.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "Thank you for all of your hard work on our project…I
                  seriously don’t know how you did it but it came together SO
                  WELL. I know we are a particular bunch and want things a
                  certain way but you guys did such an amazing job!”
                </p>
                <h3>Karen Bogdan</h3>
                <p> Varde</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/03.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "D&L Constructions could not have taken better care of us. The
                  entire team lives and breathes excellence in everything they
                  do. Integrity, initiative and intelligence are built into this
                  project. What an awesome job! Thank you!"
                </p>
                <h3>David Jones</h3>
                <p>Airbone</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonialSlideContainer">
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/04.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "D&L Constructions had great input from the time we were
                  initially selecting the land through the successful
                  construction of our new building. We felt D&L Constructions
                  was our partner in this endeavor and kept our best interests
                  in mind.
                </p>
                <h3>Craig Levering</h3>
                <p> Electric Supply Company</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/05.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "We are totally pleased with your company, your people, and
                  your subcontractors on the craftsmanship of your product. We
                  continue to be totally satisfied with the building that you
                  built for me two years ago."
                </p>
                <h3>Mark Dunn</h3>
                <p> United Notions/Moda Lani</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/06.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "D&L Constructions has built a facility for me that I take
                  great pride in. I believe the best testimonial I could give is
                  that given the opportunity to build again, I would choose D&L
                  Constructions. Thanks for a beautiful building!"
                </p>
                <h3>Byron Branscum</h3>
                <p> Elite Transport, Inc</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonialSlideContainer">
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/07.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "I have enjoyed working with you and your company on many
                  projects over the years. I have worked with many contractors,
                  on many projects, all over the country and have had the
                  opportunity to meet many impressive and very nice people."
                </p>
                <h3>Dana Johnson</h3>
                <p> Corporate Real Estate</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/08.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "I cannot say enough about D&L Constructions. They were
                  absolutely great! They met their project dates and were so
                  organized throughout the project..I would recommend them to
                  anyone.
                </p>
                <h3>Carol Gardner</h3>
                <p>Savage Precision Fabrication</p>
              </div>
            </div>
            <div className="testimonialElementContainer">
              <img
                src="https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/09.jpg"
                alt="Customer Photo"
                className="testimonialProfileImage"
              />
              <div className="testimonialTextContainer">
                <p>
                  "Your efforts were instrumental in getting this project onto a
                  successful track after all the stops, starts and design
                  changes we had along the way."
                </p>
                <h3>Richard A. Motycka</h3>
                <p>Beltline Realty Partners</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TestimonialCarusel;
