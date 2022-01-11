import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';
import { projects } from '../../constants/constants';
import  { nicksprofile } from '../../constants/constants';





const Hero = (props) => (
  <>
    <Section row nopadding id="hero">
      <LeftSection>
        <SectionTitle main center>
          Welcome  <br />
          To My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am an aspiring full stack developer who graduated from the University of Toronto six month coding boot camp in 2021. Here you will find examples of some of my past projects and what I am currently working on to expand my skills.
        </SectionText>
        
     
    
        
      </LeftSection>
      <Section>
        {nicksprofile.map((p) => {
          return (
           <Img src={p.image} alt="Profile Photo"/>     
         );
        })}
      </Section>
      
    </Section>
  </>
);

export default Hero;