import { styled } from "@/styles/stitches.config";

export const AboutSection = styled("section", {
  background: "$grey1",
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "@mobile": {
    flexDirection: "column",
  },
});

export const AboutSectionText = styled("aside", {
  maxWidth: "26.25rem",
  display: "grid",
  gridGap: "$2",
  height: "max-content",

  top: "8rem",
  "@mobile": {
    position: "static",
    marginBottom: "$5",
  },
});

export const AboutCardContent = styled("div", {
  display: "grid",
  gridGap: "$2",
});

export const AboutMeSection = styled("div", {
  color: "white",
  padding: 5,
});
