import React from "react";
import {FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer,FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterWrap,Rights,SocialMedia,SocialMediaLogo,SocialMediaWrap,SocialIconLink,SocialIcons } from "./FooterElements";

const Footer = () => {

  const toggleHome = () =>{
    scroll.scrollToTop();
}

  return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/login">Contact</FooterLink>
                <FooterLink to="/login">Support</FooterLink>
                <FooterLink to="/login">Address</FooterLink>
                <FooterLink to="/login">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialMediaLogo to='/home' onClick={toggleHome}>
                Opus Focus
              </SocialMediaLogo>
              <Rights>Opus Focus © {new Date().getFullYear()} All rights reserved.</Rights>
              <SocialIcons>
                <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='https://twitter.com/?lang=en' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
  );
};

export default Footer;
