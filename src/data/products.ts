export const features = [
  {
    active: true,
    title: "Track and label",
    description:
      "Our machine learning purposed SDK integrates into provider- and patient-facing mobile health apps and platforms and ensures all the rich behavioral and clinical information latent in their usage is adequately tracked and AI-ready",
  },
  {
    title: "Learn",
    description:
      "Our use case specific data pipelines and models transform incoming data into insights to help understand the past and predict the future, allowing to better understand provider and patient evolving needs and context",
  },
  {
    title: "Nudge",
    description:
      "Use all that knowledge to take action through personalized recommendations, incentives, content and workflows to empower your users and provide them with additional support precisely how and when they need it, delivered to them directly in their devices through our SDK",
  },
];

export const sections = [
  {
    title: "Analytics",
    description:
      "Visualize your data to understand behavioral and clinical trends, and to assess risk and performance",
    features: [
      {
        title: "Use-case specific",
        imageUrl: "/images/products/analytics1.gif",
        icon: "/images/products/analytics_usecase.png",
        description:
          "Causal Foundry data pipelines will turn incoming tool usage information into functionality specific traits characterizing meaningful quantities well suited to tackle use cases for patient and condition management, clinical decision support, capacity building and medical supply chain tools",
      },
      {
        title: "Cohorts",
        imageUrl: "/images/products/analytics2.gif",
        icon: "/images/products/analytics_cohort.png",
        description:
          "Use the resulting traits to easily define cohorts of interest of the different relevant subjects (healthcare facilities and personel, patients, drugs or tests) that will be available throughout the platform to act as basic units of aggregate inspection, modeling and intervention",
      },
      {
        title: "Dashboards",
        imageUrl: "/images/products/analytics2.gif",
        icon: "/images/products/analytics_dashboard.png",
        description:
          "Customize your dashboard to track the evolution of what matters most to you. We provide ways of visualizing data that will allow you to easily compare different cohorts, extract meaning, and guide evidence based decisions, with a strong focus in the dynamic nature of clinical and behavioral traits",
      },
    ],
  },
  {
    title: "Models",
    description:
      "Easily deploy predictive and recommendation machine learning models to anticipate user behavior, needs and preferences",
    features: [
      {
        title: "Define and deploy models",
        imageUrl: "/images/products/models2.gif",
        icon: "/images/products/models_define.png",
        description:
          "Create, compare and deploy recommendation (collaborative filtering with neural embeddings) and user (censoring models) and demand (probabilistic time series) machine learning models. Access state-of-the-art algorithms through our UI in a few steps and deploy them with one click without writing a single line of code",
      },
      {
        title: "Track model performance",
        imageUrl: "/images/products/models2.gif",
        icon: "/images/products/models_track.png",
        description:
          "The Causal Foundry platform offers you full transparency of which models are running and comes with a full model specific verification suite. Understand the tradeoffs between different models and what works best for your use cases and quickly detect any performance degradation",
      },
      {
        title: "Machine Learning traits",
        imageUrl: "/images/products/models1.gif",
        icon: "/images/products/models_traits.png",
        description:
          "Our data pipelines process the outputs of models to build additional traits that characterize recommendations, predictions and their uncertainty that are then available throughout the platform for cohort definition, inspection and as intervention metrics",
      },
    ],
  },
  {
    title: "Intervention",
    description:
      "Unleash the potential of data and AI to empower providers and patients and furnish them with adequate timely support",
    features: [
      {
        title: "Define and deploy adaptive interventions",
        imageUrl: "/images/products/interventions1.gif",
        icon: "/images/products/intervention_icon.png",
        description:
          "Quickly craft content and message interventions and choose delivery mechanisms from a range of RL-based algorithms tailored to your personalization needs (neural bandits), knowledge extraction (linear bandits), or resource allocation (restless bandits). Deploying user nudges is just minutes away with the Causal Foundry platform",
      },
      {
        title: "Experimentation",
        imageUrl: "/images/products/interventions2.gif",
        icon: "/images/products/intervention_experimentation.png",
        description:
          "Run interventions in experiments comparing them to the status quo for safe production rollout. Our platform facilitates various designs: fully randomized or adaptive, single or multiple assignments per subject, including cluster randomization and pairwise matching. Utilize our platform's algorithmic capabilities for digital trials that minimize risk and maximize statistical power",
      },
      {
        title: "Measure and track impact",
        imageUrl: "/images/products/interventions3.gif",
        icon: "/images/products/intervention_metrics.png",
        description:
          "Experiments and interventions running in production come with near real time monitoring and thorough statistical analyses to measure and track their impact, and to understand for which users and in which contexts they are working better",
      },
    ],
  },
  {
    title: "Large Language Models",
    description:
      "Access your data, intervention results, predictions, and insights with the LLM-based assistant that allows you to query any information. You can even send interventions with a sentence",
    features: [
      {
        title: "LLM-based assistant for patients and providers",
        imageUrl: "/images/products/llm1.gif",
        icon: "/images/products/llm_icon_1.png",
        description:
          "Large Language Models can also be integrated within digital applications to support patients and providers with trustful and real-time information. They can access data about  their own health and support the self-management of diseases or to providers to get information about their patients and help prioritize within a chatbot format, as well as  to get access to workflow procedures information or public health policies",
      },
      {
        title: "Speech-to-Text Hands-Free Assistant",
        imageUrl: "/images/products/llm2.gif",
        icon: "/images/products/speech_to_text.png",
        description:
          "MedScribe, our LLM-based product, seamlessly integrates into electronic health records and digital tools, enhancing patient-provider conversations with data like clinic visits and diagnostic codes. Providers initiate deviceless interactions with patient consent, enabling a personalized connection, with conversations transcribed, merged with Causal Foundry data, and processed by an LLM to generate a summary reviewed and edited by the provider. Additionally, the system creates simplified summaries and care plan takeaways, communicated to patients via SMS or WhatsApp, promoting patient engagement and health management.",
      },
    ],
  },
];
