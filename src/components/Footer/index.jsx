import React from "react";
import Nav from "../Nav/";
import NavIcons from "../Nav/Nav-icons";
import { Menu, FooterMenu, SocialMenu } from "../Nav/Nav-menu";
import { Section } from "./../Ui/Section";

const Footer = () => {
  return (
    <footer>

      <Section classname="fullWidth">

      <Section>
        <ul>
          {Menu.data.map((menunav, index) => (
            <Nav menunav={menunav} key={index} />
          ))}
        </ul>
      </Section>
      <Section>
        <h2> Legales Menu</h2>
        <ul>
          {FooterMenu.data.map((footerMenu, index) => (
            <Nav menunav={footerMenu} key={index} />
          ))}
        </ul>
      </Section>
      <Section classname='three'>
        <h2>Sociales</h2>
        <ul>
          {SocialMenu.data.map((sociales, index) => (
            <NavIcons menunav={sociales} key={index} />
          ))}
        </ul>
      </Section>
    
    
      </Section>
    </footer>
  );
};

export default Footer;
