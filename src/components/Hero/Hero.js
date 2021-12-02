import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nduduzo Gift Ndabandaba<br />
          Software Dev Portfolio
        </SectionTitle>
        <SectionText>
        I would describe myself as a young man with sunshine for a personality,
         I especially enjoy being in a team and building synergy towards achieving a common goal
         , I want to be a SovTech developer in order to gain the skills necessary to produce systems
          and web applications that solve current problems and at the same time be doing something that I love
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;