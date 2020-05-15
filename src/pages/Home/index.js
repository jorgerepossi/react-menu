import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Ui/Section";

export const Home = () => {
  return (
  
      <Section classname="home">
      Go to <Link to="/admin">Admin</Link>
      </Section>
     
   
  );
};
