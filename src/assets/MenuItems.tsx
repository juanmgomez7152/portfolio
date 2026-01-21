import { type StaggeredMenuItem, type StaggeredMenuSocialItem } from "@/components/StaggeredMenu";
export const menuItems: StaggeredMenuItem[] = [
  {
    label: "Welcome",
    ariaLabel: "Go to welcome section",
    link: "#intro",
  },
  { label: "About", ariaLabel: "Learn about me", link: "#summary" },
  {
    label: "Experience",
    ariaLabel: "View our my work experience",
    link: "#experience",
  },
  { label: "Projects", ariaLabel: "Get in touch", link: "#projects" },
  { label: "Skills", ariaLabel: "View my skills", link: "#skills" },
  { label: "Comments", ariaLabel: "Developer comments", link: "#dev-comments" },
];

export const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/juanmgomez7152" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/jmgomezguzman7/" },
  { label: "Email", link: "mailto:juan.m.gomez7152@gmail.com" },
];
