export const TRAVEL = {
  about: {
    title: "about the project",
    subtitle:
      "The client is a global consulting company specializing in corporate travel optimization",
    description:
      "The company offers solutions for travel booking, expense management, CO₂ analytics, and data-driven reporting — used by enterprises worldwide to manage business travel.",
    description1:
      "The product ecosystem included four independent service streams:",
    stack: "tech stack",
    stackList: "React + Material Design-based UI framework",
    team: "team",
    teamList: [
      "1 Product Manager",
      "4 Business Analysts",
      "4 Full-stack Developers",
      "8 QA Engineers",
      "1 Database Engineer",
      "solo Product Designer in a cross-functional team",
    ],
    role: "my role & contributions",
    description2:
      "When I joined the project, the MVP had been live for 2+ years with no unified design system or shared developer library. UI inconsistencies were a major issue across the product — both in Figma and in production.",
    roles: "",
    rolesList: [
      "rebuilt the design kit from scratch: defined typography, created a cohesive color system, and aligned styles across streams",
      "standardized components",
      "restructured Figma file management for scalability and clarity",
      "documented design patterns and usage rules for developers and BAs",
      "proposed and secured approval for creating a centralized component library in Storybook",
      "closely collaborated with engineers → 60 components migrated and standardized",
      "introduced a design review process and established sprint-based task prioritization with PM and BAs",
    ],
  },
  typography: {
    title: "typography",
    subtitle:
      "The project lacked unified typography guidelines. Developers manually set line heights, causing inconsistencies even within the same stream",
    description:
      "I conducted a joint typography audit with developers, standardized parameters, and implemented variables for future-proof styling. This ensured a consistent visual language and simplified typography management.",
    key: "key changes",
    keyList: [
      "standardized line heights",
      "introduced typography variables",
      "unified text style rules",
    ],
  },
  color: {
    title: "color palette",
    subtitle:
      "The color palette was inconsistent: 25+ shades of gray, no semantic colors, no variables",
    description:
      "I redesigned the color palette from scratch — introduced semantic and neutral colors, applied a stream-based numbering system, and ensured all combinations passed accessibility contrast checks. This gave developers a clear and consistent framework for using colors.",
    key: "key changes",
    keyList: [
      "new color palette created",
      "accessibility checks completed",
      "semantic and neutral colors introduced",
      "unified numbering system for color tones",
    ],
    subtitle1:
      "Initial color choices did not meet accessibility standards — many text elements failed contrast checks",
    description1:
      "I conducted a full contrast audit across the product. Non-compliant text and UI elements were updated to meet WCAG AA standards. The new color system ensures improved readability and a more accessible experience for all users.",
  },
  component: {
    title: "component library in figma",
    subtitle:
      "The component library was almost empty. Many elements were created in local files without being added to the shared library",
    description:
      "I systematically expanded the library, documented key components, and established usage guidelines. As a result, developers became more self-sufficient, reduced inquiries, and started refactoring outdated components themselves.",
    key: "key changes",
    keyList: [
      "expanded component library",
      "introduced documentation in Figma",
      "established cross-stream usage rules",
      "unified component states",
    ],
  },
  developer: {
    title: "developer component library",
    subtitle:
      "Before the project, no shared developer library existed — each stream implemented UI components independently",
    description:
      "I initiated the creation of a Storybook library, prepared a stakeholder presentation, and secured a dedicated developer resource. Together with the team, we migrated over 60 components, resulting in a more consistent UI and streamlined development",
    key: "key changes",
    keyList: [
      "created developer library in Storybook",
      "secured stakeholder approval and developer allocation",
      "migrated 60+ components",
      "established cross-stream standards",
    ],
  },
  resume: {
    title: "resume",
    subtitle:
      "I led a full redesign of the design system and developer library for a complex SaaS travel platform — improving UI consistency and accelerating delivery",
    results: [
      {
        title: "-70%",
        subtitle: "UI-related bugs",
        isUp: false,
      },
      {
        title: "+80%",
        subtitle: "speed in design creation",
        isUp: false,
      },
      {
        title: "-90%",
        subtitle: "number of broken links",
        isUp: false,
      },
      {
        title: ">60",
        subtitle: "number of components migrated to storybook",
        isUp: false,
      },
    ],
    description:
      "I rebuilt the design kit, standardized typography and color, improved accessibility, and launched a shared Storybook library. I also streamlined Figma structure and documentation, improving team collaboration. The result: fewer UI bugs, faster development cycles, and a scalable, consistent user experience across four product streams.",
  },
};

export const TRAVEL_IMAGES_SLIDER = [
  "../../../public/travel/travel10.png",
  "../../../public/travel/travel11.png",
  "../../../public/travel/travel12.png",
  "../../../public/travel/travel13.png",
  "../../../public/travel/travel14.png",
  "../../../public/travel/travel15.png",
  "../../../public/travel/travel16.png",
  "../../../public/travel/travel17.png",
  "../../../public/travel/travel18.png",
  "../../../public/travel/travel19.png",
  "../../../public/travel/travel20.png",
  "../../../public/travel/travel21.png",
  "../../../public/travel/travel22.png",
];
