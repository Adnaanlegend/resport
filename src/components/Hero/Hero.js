import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          I like complex problems and I love simple solutions. So in 2021, I
          took a life altering decision to follow my Passion for Programming,
          Fast forward to 2024, <br />
          I am a ReactJs/NextJs Developer. <br />
          Now that you know, <br />
          Check out my Projects and Resume.
        </SectionText>
        <Button>
          <a download href="/Adnaan Hussain_Resume.pdf">Resume</a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
