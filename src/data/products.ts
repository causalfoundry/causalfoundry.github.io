export const features = [
  {
    active: true,
    image: "/images/products/features/preview.png",
    title: "Track and label",
    description:
      "Most data is not AI-ready. Our open-sourced SDK organizes data from provider- and patient-facing applications enabling the full potential of rich behavioral and clinical information.",
  },
  {
    title: "Learn",
    description:
      "Our data pipelines and models transform scattered data into actionable insights. Better understand the past, predict the future and adapt to evolving needs.",
  },
  {
    title: "Nudge",
    description:
      "Take action through personalized recommendations, incentives, content and workflows. Empower your users. When they need it. How they need it.",
  },
];

export const sections = [
  {
    title: "Analytics",
    description:
      "Visualize your data. Reveal behavioral and clinical trends. Assess performance and risk.",
    features: [
      {
        title: "Use-case specific",
        imageUrl: "/images/products/analytics1.gif",
        icon: "/images/products/analytics_usecase.png",
        description:
          "We have identified the minimum de-identified data needed to be tracked for specific use-cases for improved patient management, disease care, e-learning/training and supply-chain efficiency.",
      },
      {
        title: "Cohorts",
        imageUrl: "/images/products/analytics2.gif",
        icon: "/images/products/analytics_cohort.png",
        description:
          "Segment your users into relevant groups (healthcare facilities, personnel, patients, drugs, tests, etc.)",
      },
      {
        title: "Dashboards",
        icon: "/images/products/analytics_dashboard.png",
        description:
          "Customize your dashboard to track the evolution of what matters most to you. We provide ways of visualizing data that will allow you to easily compare different cohorts, extract meaning, and guide evidence based decisions, with a strong focus in the dynamic nature of clinical and behavioral traits.",
      },
    ],
  },
  {
    title: "Models",
    description:
      "Easily deploy machine learning AI to anticipate user behavior, needs and preferences",
    features: [
      {
        title: "Advanced AI at your fingertips",
        imageUrl: "/images/products/models1.gif",
        icon: "/images/products/models_define.png",
        description:
          "Access state-of the-art algorithms through your platform profile and deploy them with one click without writing one single line of code. Create, compare and deploy recommendation (collaborative filtering with neural embeddings), user (censoring models) and demand (probabilistic time series) machine learning models.",
      },
      {
        title: "Track model performance",
        imageUrl: "/images/products/models2.gif",
        icon: "/images/products/models_track.png",
        description:
          "The Causal Foundry platform offers you full transparency of which models are running and full verification suite. Understand the tradeoffs between different models. See what works best for your uses and quickly detect any performance degradation.",
      },
      {
        title: "Constant improvement",
        imageUrl: "/images/products/models3.gif",
        icon: "/images/products/models_traits.png",
        description:
          "New traits are being offered regularly. The more our models are used, the better we can characterize recommendations, predictions and uncertainty for you to improve your outcomes.",
      },
    ],
  },
  {
    title: "Intervention",
    description:
      "You may trust your data. You may understand your data. But do you have a process to turn that into a personalized user experience?",
    features: [
      {
        title: "Define and deploy adaptive interventions",
        imageUrl: "/images/products/interventions1.gif",
        icon: "/images/products/intervention_icon.png",
        description:
          "Quickly craft content and message interventions and choose delivery mechanisms from a range of RL-based algorithms tailored to your personalization needs (neural bandits), knowledge extraction (linear bandits), or resource allocation (restless bandits). Deploying user nudges is just minutes away with the Causal Foundry platform.",
      },
      {
        title: "Experimentation",
        imageUrl: "/images/products/interventions2.gif",
        icon: "/images/products/intervention_experimentation.png",
        description:
          "What used to take months if not years to prepare, can now be done in a matter of minutes. Our platform facilitates various designs: fully randomized or adaptive, single or multiple assignments per subject, cluster randomization and pairwise matching. Utilize our platform's algorithmic capabilities for digital trials that minimize risk and maximize statistical power.",
      },
      {
        title: "Measure and track impact",
        icon: "/images/products/intervention_metrics.png",
        description:
          "Experiments and interventions come with near real time monitoring and thorough statistical analyses to measure and track impact.",
      },
    ],
  },
  {
    title: "Large Language Models",
    description:
      "Query any of your data on our platform with our LLM-based assistant. You can even send interventions typing one sentence.",
    features: [
      {
        title: "LLM-based assistant for patients and providers",
        imageUrl: "/images/products/llm1.gif",
        icon: "/images/products/llm_icon_1.png",
        description:
          "Give patients and providers the power of access to their own data and standards of care. Our large language models can be integrated to digital applications to support self-management, workflows and improve general/specialized knowledge.",
      },
      {
        title: "Speech-to-Text Hands-Free Assistant",
        imageUrl: "/images/products/llm2.gif",
        icon: "/images/products/speech_to_text.png",
        description:
          "MedScribe, our LLM-based product, seamlessly integrates into electronic health records and digital tools, enhancing patient-provider conversations with data like clinic visits and diagnostic codes. Providers initiate device-less interactions with patient consent, enabling a personalized connection, with conversations transcribed, merged with Causal Foundry data, and processed by an LLM to generate a summary reviewed and edited by the provider. Additionally, the system creates simplified summaries and care plan takeaways, communicated to patients via SMS or WhatsApp, promoting patient engagement and health management.",
      },
    ],
  },
];
