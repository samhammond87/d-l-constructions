import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import ProfileImage01 from './Images/01.jpg';
import ProfileImage02 from './Images/02.jpg';
import ProfileImage03 from './Images/03.jpg';
import ProfileImage04 from './Images/04.jpg';
import ProfileImage05 from './Images/05.jpg';
import ProfileImage06 from './Images/06.jpg';
import ProfileImage07 from './Images/07.jpg';
import ProfileImage08 from './Images/08.jpg';
import ProfileImage09 from './Images/09.jpg';

function TestimonialCarusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='testimonialSlideContainer'>
          <h1>Client Testimonials</h1>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage01}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
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
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage02}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "Thank you for all of your hard work on our project…I seriously
                don’t know how you did it but it came together SO WELL. I know
                we are a particular bunch and want things a certain way but you
                guys did such an amazing job!”
              </p>
              <h3>Karen Bogdan</h3>
              <p> Varde</p>
            </div>
          </div>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage03}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "D&L Construction could not have taken better care of us. The
                entire team lives and breathes excellence in everything they do.
                Integrity, initiative and intelligence are built into this
                project. What an awesome job! Thank you!"
              </p>
              <h3>David Jones</h3>
              <p>Airbone</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='testimonialSlideContainer'>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage04}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "D&L Construction had great input from the time we were
                initially selecting the land through the successful construction
                of our new building. We felt D&L Construction was our partner in
                this endeavor and kept our best interests in mind.
              </p>
              <h3>Craig Levering</h3>
              <p> Electric Supply Company</p>
            </div>
          </div>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage05}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "We are totally pleased with your company, your people, and your
                subcontractors on the craftsmanship of your product. We continue
                to be totally satisfied with the building that you built for me
                two years ago."
              </p>
              <h3>Mark Dunn</h3>
              <p> United Notions/Moda Lani</p>
            </div>
          </div>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage06}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "D&L Construction has built a facility for me that I take great
                pride in. I believe the best testimonial I could give is that
                given the opportunity to build again, I would choose D&L
                Construction. Thanks for a beautiful building!"
              </p>
              <h3>Byron Branscum</h3>
              <p> Elite Transport, Inc</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='testimonialSlideContainer'>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage07}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "I have enjoyed working with you and your company on many
                projects over the years. I have worked with many contractors, on
                many projects, all over the country and have had the opportunity
                to meet many impressive and very nice people."
              </p>
              <h3>Dana Johnson</h3>
              <p> Corporate Real Estate</p>
            </div>
          </div>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage08}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "I cannot say enough about Raymond Construction. They were
                absolutely great! They met their project dates and were so
                organized throughout the project..I would recommend them to
                anyone.
              </p>
              <h3>Carol Gardner</h3>
              <p>Savage Precision Fabrication</p>
            </div>
          </div>
          <div className='testimonialElementContainer'>
            <img
              src={ProfileImage09}
              alt='randomProfileImage01'
              className='testimonialProfileImage'
            />
            <div className='testimonialTextContainer'>
              <p>
                "Your efforts were instrumental in getting this project onto a
                successful track after all the stops, starts and design changes
                we had along the way."
              </p>
              <h3>Richard A. Motycka</h3>
              <p>Beltline Realty Partners</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TestimonialCarusel;
