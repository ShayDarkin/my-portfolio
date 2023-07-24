import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  AboutSection,
  AboutSectionContent,
  AboutSectionText,
  AboutCardContent,
  AboutMeSection,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const About = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <AboutSection id="about-me">
      <Container>
        <AboutSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <AboutSectionText>
              <Text type="heading2" color="grey4">
                About my journey as{" "}
                <Text as="span" type="heading2" color="brand1">
                  Building Digital Worlds: The Journey of a Master Coder
                </Text>
              </Text>
            </AboutSectionText>
          </motion.div>
        </AboutSectionContent>
        <AboutMeSection>
          <Text>
            Imagine a universe where ideas materialize in lines of code and
            creativity is the driving force to create new digital horizons. In
            this vast landscape, I am a dream architect and fullstack developer
            with a burning passion for exploring the unexplored frontiers of
            technology. I am a tireless curious person, always looking for
            challenges that allow me to expand my knowledge and skills. My fuel
            is the inexhaustible desire to learn, innovate and leave a lasting
            mark in the digital world. Every project I take on is an opportunity
            to create something extraordinary and useful for others. Since my
            childhood, I have been captivated by the magic of computers and the
            way they can translate our ideas into something concrete. As a
            teenager, I started to explore the secrets of software development,
            and that's how a passion was born that has never faded. My journey
            as a fullstack developer allows me to move fluidly through all
            layers of project development. I can dance with the elegance of
            front-ends, where I bring to life intuitive and engaging interfaces,
            capable of delighting users at first sight. Simultaneously, my
            mastery of the backend allows the inner gears to work in perfect
            harmony, ensuring that the user experience is exceptional. In the
            vast field of development, I seek not only to master programming
            languages, but also to understand the needs and desires of the
            audience for which I am developing. It's like being a digital
            alchemist, turning abstract ideas into tangible products that can
            change lives. But like every digital adventurer, I understand that
            the journey never ends. The technological world is dynamic and
            constantly evolving, which is why I am always looking for new
            challenges to improve my skills and deepen my knowledge.
          </Text>
        </AboutMeSection>
      </Container>
    </AboutSection>
  );
};
