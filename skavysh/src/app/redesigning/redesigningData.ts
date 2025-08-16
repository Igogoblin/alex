export const REDESIGNING = {
  about: {
    title: "about the project",
    subtitle:
      "Global consulting firm offering tools to optimize enterprise travel programs. The product manages vendor contracts, discounts, payment conditions, and analytics",
    description:
      "The client needed a scalable interface to manage hundreds of complex contract-based travel discounts across multiple vendors. Users were deeply tied to legacy workflows in Microsoft Access — and that familiarity shaped both the constraints and the expectations.",
    team: "team",
    teamList: [
      "1 Product Manager",
      "2 Business Analysts",
      "2 Full-stack Developers",
      "1 QA Engineers",
      "1 Database Engineer",
      "1 Product Designer",
    ],
    users: "users",
    description1:
      "internal analysts used to large data tables and batch-editing in Microsoft Access.",
    challenges: "challenges",
    description2: "We had to design an interface that could handle:",
    challenges1: "",
    challengesList: [
      "44+ dynamic and sometimes interdependent discount rules per contract",
      "nested rule exceptions and ambiguous logic",
      "mixed validation states (manual and automated)",
      "user expectations for “Access-like” table behavior",
      "risk of DB crashes with large datasets",
      "performance issues when rendering multi-condition contracts",
    ],
  },
  iterations: {
    title: "iterations & design process",
    subtitle:
      "Multiple iterations, live rule testing, and continuous user sessions revealed which assumptions held — and which we had to let go",
    description:
      "We started by attempting a unified table with all rules visible. Testing quickly revealed limits: users couldn’t parse it, and performance suffered. Code overlaps, inconsistent rule formats, and missing validation logic became blockers. Prototyping with real users helped us identify what they truly needed — and what they didn’t.",
    key: "key iteration steps",
    keyList: [
      "mapped actual rule types and contracts with BAs",
      "tested unified-table concept — rejected by users",
      "added in-table rule validation and tooltips",
      "confirmed users work with one condition at a time",
      "introduced high-fidelity prototype for semantic grouping",
    ],
  },
  examples: {
    title: "examples",
    subtitle: "Each rule had several iterations",
    description:
      "Here is an example of the 'Geography' rule with several of its iterations. We were looking for the most effective way to visualize exceptions within the rule.",
    subtitle1:
      "We had unique cases where we had to find ways to visualize rules within the limits of the library, the database, and user needs",
    description1:
      "For example, there was an issue with the rule based on fare names: if a fare contains certain words or symbols, it may qualify for a discount. The challenge was that rules were stored as plain text in the DB, so we had to come up with symbolic representations.",
  },
  design: {
    title: "Design Shift: From Unified to Contextual",
    subtitle:
      "Instead of forcing everything into one grid, we broke the data into manageable chunks aligned with how users actually worked",
    description:
      "Users rarely worked across payment conditions simultaneously — yet the UI was trying to support that. We moved to smaller, grouped tables based on rule type and condition. This reduced system load, improved usability, and gained stronger user support in testing.",
    key: "key improvements",
    keyList: [
      "grouped rules into semantic blocks",
      "switched to per-condition table views",
      "created dynamic row height for cleaner display",
    ],
  },
  summary: {
    title: "summary",
    subtitle:
      "A case of overengineering — corrected through listening, testing, and reducing to what users actually needed",
    description:
      "I redesigned a complex table structure for discount rule management, transforming it from a monolithic Access-like grid into a lightweight, focused tool. Through iterative design and live testing, we delivered a solution that honored both business logic and user reality — while creating a scalable foundation for the future.",
    key: "key results",
    keyList: [
      "~90% fewer table rendering issues with smaller tables",
      "~40% reduction in user-reported errors from code confusion",
      "faster table load times across large contracts",
      "increased user clarity on rule status and validation",
      "better adoption thanks to “Access-like but better” design",
    ],
  },
};
