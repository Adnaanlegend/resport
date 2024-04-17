import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { GiSkills } from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies in the web development
      world. From Front-end To Back-end and also Design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            ReactJs/NextJs/ React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDb, FireBase, Cloudinary, Convex, Kinde, Clerk
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            On trend <br />
            and upto the <br /> Market Standards
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiSkills size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Soft SKills</ListTitle>
          <ListParagraph>
            Communication, Leadership <br />
            Adaptability, Problem-solving.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
