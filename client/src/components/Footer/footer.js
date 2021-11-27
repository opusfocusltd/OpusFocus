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
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Address</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            {/* <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">aassdd</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper> */}
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialMediaLogo to='/home' onClick={toggleHome}>
                Opus Focus
              </SocialMediaLogo>
              <Rights>Opus Focus © {new Date().getFullYear()} All rights reserved.</Rights>
              <SocialIcons>
                <SocialIconLink href='/home' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/home' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/home' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/home' target='_blank' aria-label='Linkedin'>
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
