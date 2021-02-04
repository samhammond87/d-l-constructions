import React from "react";
// enable react scroll effect for smoother user experience
import { animateScroll as scroll } from "react-scroll";
// import icons from react icons library
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  // react-scroll built in method to scroll page all the way to the top when clicked
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Services</FooterLinkTitle>
              <FooterLink to="/">Cladding</FooterLink>
              <FooterLink to="/">Glass Partition</FooterLink>
              <FooterLink to="/">Insulation</FooterLink>
              <FooterLink to="/">Partitioning</FooterLink>
              <FooterLink to="/">Plastering</FooterLink>
              <FooterLink to="/">Rendering</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Quick Links</FooterLinkTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Services</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Connect With Us</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              D & L Constructions
            </SocialLogo>
            <WebsiteRights>
              {/* current year retrieved automatically */}
              {new Date().getFullYear()} © All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink target="_blank" aria-label="Twitter" href="/">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
