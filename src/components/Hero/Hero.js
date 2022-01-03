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
        I would describe myself as a young man with sunshine for a personality, I especially enjoy being in a team and building synergy towards achieving a common goal, with years of grooming and refining my skills in software and web development, I am confident that I will be a perfect fit for your company, my education has provided me with the innovation and technical skills necessary to successfully provide your company with technical solutions across a wide range of software platforms.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;