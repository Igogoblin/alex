export const AVODARK = {
  about: {
    title: "about the project",
    subtitle:
      "AVO bank is one of the first banks in Uzbekistan to offer a credit card with a grace period. This B2C product is actively used in retail, and the app includes both a credit card and instalment plan scenarios.",
    description:
      "It’s a B2C project, where the primary user is an individual who applies for a bank card and subsequently manages it through a mobile application",
    role: "my role",
    roleList: ["design system architect"],
    problem: "problem",
    problemList: [
      "outdated and overloaded component library",
      "components reused inconsistently without rules and documentation",
      "missing logic in light/dark theme behavior",
      "poor scalability for color tokens",
      "lack of design-to-dev alignment",
    ],
    project: "project team",
    projectList: [
      "UX/UI designer (me)",
      "technical writer",
      "flutter developer",
    ],
  },
  audit: {
    title: "audit & analysis",
    subtitle:
      "The library worked, but no one maintained it. New components were added without reviewing what was already there. Some older ones were never updated or improved.",
    description:
      "I started with an audit of the layouts and Figma library. Many elements were reused but not included in the system. Some components were outdated, while others were almost identical and needed to be cleaned up and organized.",
  },
  library: {
    title: "library cleanup",
    subtitle:
      "The library became more compact by merging duplicate or similar components while gaining more variability",
    description:
      "The library became cleaner and easier to maintain, with fewer outdated and unnecessary elements",
  },
  results: [
    {
      title: "197",
      subtitle: "components audited",
      isUp: false,
    },
    {
      title: "60+",
      subtitle: "snowflakes cleared",
      isUp: false,
    },
    {
      title: "990",
      subtitle: "unique style variants created and modified",
      isUp: true,
    },
    {
      title: "550",
      subtitle: "components merged",
      isUp: false,
    },
  ],
  color: {
    title: "color palette refactoring",
    subtitle:
      "The color palette was limited and couldn't meet the growing UI demands",
    description:
      "It also lacked tonal harmony, which affected visual perception and made design work harder.",
    description1:
      "I analyzed the layouts and created an extended palette designed to scale with the product and remain effective long-term.",
    colors: "",
    colorList: [
      "updated core and semantic colors with revised color scales",
      "unified palette for both light and dark themes",
      "simplified and redefined grayscale system",
    ],
  },
  token: {
    title: "token system redesign",
    subtitle:
      "Legacy tokens combined usage context and visual priority in their names, leading to confusion and inconsistent application. Names often didn’t match how tokens were actually used.",
    description:
      "I restructured the system using semantic grouping, making it easier to scale and maintain. This allowed us to switch to a new color palette and implement dark mode within 2 months — with minimal design refactoring",
    tokens: "global tokens",
    description1:
      "I started by creating global color tokens to define all fundamental values",
  },
  semantic: "semantic tokens",
  semanticList:
    "I started by creating global color tokens to define all fundamental values",
  description2:
    "The semantic token is to systemize the design language for a specific semantic group of components.",
  working: [
    {
      task: "audit & analysis",
      subtasks: [
        "review the current state of the UI kit & existing design mockups",
        "analyze the component library",
        "audit the token system",
        "team discussion",
      ],
    },
    {
      task: "library cleanup",
      subtasks: [
        "rebuild components: add missing components, optimize existing ones, clean snowflakes",
        "adapt UI in Mockups",
        "prepare the documentation for updated components",
        "align with the development team",
      ],
    },
    {
      task: "color palette refactoring",
      subtasks: [
        "examine the color palette",
        "add missing colors and and optimize existing ones",
        "adapt components based on the new color palette",
        "define token levels & optimize hierarchy and eliminate redundant tokens",
        "align with the development team",
      ],
    },
    {
      task: "token system redesign",
      subtasks: [
        "decide whether the dark theme will be completely independent or based on modifications of the light theme",
        "set up color tokens for dark mode",
        "test and refine core dark theme scenarios",
        "align with the development team",
      ],
    },
    {
      task: "dark theme implementation",
      subtasks: [
        "design and test dark theme versions of the mockups based on the tokens",
        "align with the development team",
        "test and refine core dark theme scenarios",
        "testing and final adjustments",
      ],
    },
  ],
};
