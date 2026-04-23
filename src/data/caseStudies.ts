export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    conversionIncrease: string;
    loadTimeDrop: string;
    roi: string;
  };
  images: {
    before: string;
    after: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-velocity-rebuild",
    client: "TechFlow Systems",
    industry: "SaaS / B2B",
    title: "Scaling TechFlow's MRR with a High-Velocity Conversion Engine",
    summary: "TechFlow possessed a powerful product but an outdated, clunky 2010s website that failed to communicate value. We ripped out the old architecture and replaced it with our 'Velocity' framework.",
    challenge: "The client was suffering from massive bounce rates (over 82%) because their landing page was cluttered with generic stock photos, bad typography, and overwhelming text blocks. Their lead capture form was buried at the bottom of the page.",
    solution: "We deployed a dark mode, deep purple and indigo theme utilizing glassmorphism to establish a highly technical, modern aesthetic. We utilized an F-pattern layout to optimize readability and placed striking CTAs aggressively above the fold.",
    metrics: {
      conversionIncrease: "210%",
      loadTimeDrop: "4.2s",
      roi: "15x",
    },
    images: {
      before: "/mockups/mockup_old_saas_1776971788765.png",
      after: "/mockups/mockup_velocity_1776801528906.png",
    }
  },
  {
    slug: "merchant-industrial-scale",
    client: "Horizon Supply Co.",
    industry: "E-Commerce",
    title: "Un-breaking a massive e-commerce catalog to drive millions in revenue",
    summary: "Horizon Supply had outgrown their early 2000s store template. The messy grids and loud banners were causing intense consumer decision fatigue, killing checkout rates.",
    challenge: "With over 800 SKUs, the old website was unnavigable. Red banners screamed at the user, and sorting through categories required painfully slow page reloads. The cart abandonment rate was nearing 75%.",
    solution: "We implemented our heavy-duty 'Merchant' layout. Rooted in a clinical palette of pure white and cyan, we introduced a sticky, persistently visible sidebar filter system allowing instant sorting natively without page reloads.",
    metrics: {
      conversionIncrease: "340%",
      loadTimeDrop: "6.8s",
      roi: "22x",
    },
    images: {
      before: "/mockups/mockup_old_ecom_1776971949980.png",
      after: "/mockups/mockup_merchant_1776801697260.png",
    }
  }
];
