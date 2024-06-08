import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

// Styled components
const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 20px 40px;
  text-align: left;
  margin-top:150px
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const AppLinks = styled.div`
  margin-top: 10px;
`;

const AppIcon = styled.a`
  display: inline-block;
  width: 135px;
  height: 50px;
  margin-right: 10px;
  transition: transform 0.3s;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  color: #000;
  

  &:hover {
    transform: scale(1.05);
    color: #000;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Section>
          <SectionTitle>Company</SectionTitle>
          <List>
            <ListItem><Link href="https://www.urbancompany.com/about">About us</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/terms">Terms & conditions</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/privacy-policy">Privacy policy</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/anti-discrimination-policy">Anti-discrimination policy</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/impact">UC impact</Link></ListItem>
            <ListItem><Link href="https://careers.urbancompany.com/">Careers</Link></ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>For customers</SectionTitle>
          <List>
            <ListItem><Link href="https://www.urbancompany.com/reviews">UC reviews</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/near-me">Categories near you</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/blog/">Blog</Link></ListItem>
            <ListItem><Link href="https://www.urbancompany.com/contact-us">Contact us</Link></ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>For partners</SectionTitle>
          <List>
            <ListItem><Link href="https://partner.urbancompany.com/">Register as a professional</Link></ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Social links</SectionTitle>
          <SocialLinks>
            <Link href="https://twitter.com/urbancompany_UC"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link>
            <Link href="https://www.facebook.com/UrbanCompany/"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
            <Link href="https://www.instagram.com/urbancompany/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
            <Link href="https://www.linkedin.com/company/urbancompany/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link>
          </SocialLinks>
          <AppLinks>
            <AppIcon href="https://apps.apple.com/us/app/urban-company-prev-urbanclap/id1032480595?mt=8"><FontAwesomeIcon icon={faApple} size="2x" /></AppIcon>
            <AppIcon href="https://play.google.com/store/apps/details?id=com.urbanclap.urbanclap&referrer=af_tranid%3DiK3aiJXd0-_aa5j_bPtYsQ%26c%3Dhome_app_buttons%26pid%3DMobileWeb"><FontAwesomeIcon icon={faGooglePlay} size="2x" /></AppIcon>
          </AppLinks>
        </Section>
      </Container>
      <FooterBottom>
        <p>© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
