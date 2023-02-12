import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nduduzo Gift Ndabandaba<br />
          Software Developer Portfolio
        </SectionTitle>
        <SectionText>
        With years of grooming and refined my skills in full-stack web development, I am confident I will be an excellent fit for your company. My curiosity has provided me with the innovative skills necessary to successfully provide your company with technical solutions across a wide range of software platforms. I am aware of the need to consistently evolve as a developer, it would be a pleasure to learn more from your company, I would welcome the chance to provide further insight into my knowledge of software development, technical abilities, and personal attributes. </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
