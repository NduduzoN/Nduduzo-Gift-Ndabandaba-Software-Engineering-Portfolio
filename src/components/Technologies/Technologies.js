import React from 'react';
import { DiFirebase, DiReact, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range off technologies which include but are not limited to.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Next.js <br />
            Bootstrap <br />
            Razor Pages <br />
            CSS <br />
            HTML <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            C#,Javascript,PHP <br />
            ASP.NET Core <br />
            SQL Server <br />
            MongoDB <br />
            REST API <br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>  
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Dev Ops</ListTitle>
          <ListParagraph>
            Azure DevOps <br />
            Microsoft Azure Cloud <br />
            Agile Methodology<br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>    
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
