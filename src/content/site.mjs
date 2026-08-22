export const site = {
  origin: "https://www.agentstration.io",
  analyticsMeasurementId: "G-J03WSTZ19R",
  languages: ["en", "fr"],
  pages: ["home", "features", "workplace", "architecture", "extensions", "packs", "privacy"],
  navigation: ["home", "features", "workplace", "architecture", "extensions", "packs"],
  paths: {
    home: "",
    features: "features",
    workplace: "workplace",
    architecture: "architecture",
    extensions: "extensions",
    packs: "packs",
    privacy: "privacy"
  },
  externalLinks: {
    github: "https://github.com/gbaudrit/agentstration",
    docs: "https://github.com/gbaudrit/agentstration/tree/main/docs",
    maf: "https://learn.microsoft.com/en-us/agent-framework/",
    dotnet: "https://dotnet.microsoft.com/",
    packs: "https://github.com/gbaudrit/agentstration-packs"
  }
};

const shared = {
  en: {
    locale: "en_US",
    skip: "Skip to content",
    navLabel: "Primary navigation",
    menu: "Open menu",
    close: "Close menu",
    language: "Français",
    languageLabel: "View this page in French",
    theme: "Change color theme",
    eyebrow: "Open agent control plane",
    nav: { home: "Home", features: "Features", workplace: "Workplace", architecture: "Architecture", extensions: "Extensions", packs: "Packs", privacy: "Privacy" },
    footer: {
      statement: "A control plane to define, orchestrate and operate AI agent systems.",
      product: "Product",
      resources: "Resources",
      documentation: "Documentation",
      github: "GitHub",
      packs: "Packs repository",
      comingSoon: "Coming soon",
      legal: "Agentstration is an evolving open platform.",
      built: "Designed for local-first, provider-independent systems.",
      privacy: "Privacy",
      cookies: "Manage analytics cookies"
    },
    consent: {
      title: "Help us improve Agentstration",
      body: "With your permission, we use Google Analytics to understand how this website is used. Analytics stays off until you accept.",
      accept: "Accept analytics",
      reject: "Reject analytics",
      learnMore: "Read the privacy notice"
    },
    cta: {
      eyebrow: "Build the system around your agents",
      title: "From promising prototype to dependable platform.",
      body: "Explore the architecture today. Connect to the project as public resources become available.",
      primary: "Explore architecture",
      secondary: "See all features"
    },
    flowModes: {
      kicker: "Flow execution models",
      title: "From explicit routing to dynamic multi-agent collaboration.",
      body: "Choose a structured Flow when the application owns the path, or an Orchestration when several agents must cooperate through a dedicated strategy.",
      structured: { label: "STRUCTURED FLOWS", title: "The application controls the path", body: "Route and process work through a visible, versioned execution model.", items: [["direct", "Direct", "Send the request to one known Agent."], ["routing", "Routing", "Select one Agent from declared destinations. Deterministic selection is available today."], ["workflow", "Workflow", "Run an explicit graph of typed steps, conditions and transitions."]] },
      orchestration: { label: "MULTI-AGENT ORCHESTRATIONS", title: "Agents collaborate through a strategy", body: "Multi-agent orchestration relies on an agent runtime. Agentstration natively integrates Microsoft Agent Framework (MAF) today to execute these five strategies while preserving one observable FlowRun.", runtime: "NATIVELY INTEGRATED RUNTIME · MICROSOFT AGENT FRAMEWORK", items: [["sequential", "Sequential", "Each Agent enriches the result in declaration order."], ["concurrent", "Concurrent", "Agents work independently from the same initial request."], ["handoff", "Handoff", "The active specialist transfers control through declared routes."], ["group-chat", "Group Chat", "Agents contribute to a bounded shared conversation."], ["magentic", "Magentic", "A dedicated manager adapts the plan and selects the next specialist."]] },
      note: "Composite Flow is already part of the declarative contract; its execution engine is still in preparation.",
      link: "Explore all Flow capabilities"
    }
  },
  fr: {
    locale: "fr_FR",
    skip: "Aller au contenu",
    navLabel: "Navigation principale",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    language: "English",
    languageLabel: "Afficher cette page en anglais",
    theme: "Changer de thème",
    eyebrow: "Plan de contrôle ouvert pour agents",
    nav: { home: "Accueil", features: "Fonctionnalités", workplace: "Workplace", architecture: "Architecture", extensions: "Extensions", packs: "Packs", privacy: "Confidentialité" },
    footer: {
      statement: "Un plan de contrôle pour définir, orchestrer et opérer des systèmes d’agents IA.",
      product: "Produit",
      resources: "Ressources",
      documentation: "Documentation",
      github: "GitHub",
      packs: "Dépôt des packs",
      comingSoon: "Bientôt disponible",
      legal: "Agentstration est une plateforme ouverte en évolution.",
      built: "Pensée pour des systèmes local-first et indépendants des fournisseurs.",
      privacy: "Confidentialité",
      cookies: "Gérer les cookies de mesure d’audience"
    },
    consent: {
      title: "Aidez-nous à améliorer Agentstration",
      body: "Avec votre accord, nous utilisons Google Analytics pour comprendre l’utilisation de ce site. La mesure d’audience reste désactivée tant que vous n’avez pas accepté.",
      accept: "Accepter la mesure",
      reject: "Refuser la mesure",
      learnMore: "Lire la politique de confidentialité"
    },
    cta: {
      eyebrow: "Construisez le système autour de vos agents",
      title: "Du prototype prometteur à la plateforme fiable.",
      body: "Explorez l’architecture dès aujourd’hui. Suivez le projet à mesure que ses ressources publiques arrivent.",
      primary: "Explorer l’architecture",
      secondary: "Voir les fonctionnalités"
    },
    flowModes: {
      kicker: "Modèles d’exécution des Flows",
      title: "Du routage explicite à la collaboration multi-agent dynamique.",
      body: "Choisissez un Flow structuré lorsque l’application maîtrise le parcours, ou une Orchestration lorsque plusieurs agents doivent coopérer selon une stratégie dédiée.",
      structured: { label: "FLOWS STRUCTURÉS", title: "L’application maîtrise le parcours", body: "Routez et traitez le travail dans un modèle d’exécution visible et versionné.", items: [["direct", "Direct", "Confier la demande à un Agent connu."], ["routing", "Routing", "Sélectionner un Agent parmi des destinations déclarées. La sélection déterministe est disponible aujourd’hui."], ["workflow", "Workflow", "Exécuter un graphe explicite d’étapes typées, de conditions et de transitions."]] },
      orchestration: { label: "ORCHESTRATIONS MULTI-AGENTS", title: "Les agents collaborent selon une stratégie", body: "L’orchestration multi-agent s’appuie sur un runtime d’agents. Agentstration intègre aujourd’hui nativement Microsoft Agent Framework (MAF) pour exécuter ces cinq stratégies tout en conservant un FlowRun unique et observable.", runtime: "RUNTIME INTÉGRÉ NATIVEMENT · MICROSOFT AGENT FRAMEWORK", items: [["sequential", "Sequential", "Chaque Agent enrichit le résultat dans l’ordre déclaré."], ["concurrent", "Concurrent", "Les Agents travaillent indépendamment à partir de la même demande."], ["handoff", "Handoff", "Le spécialiste actif transfère le contrôle par des routes déclarées."], ["group-chat", "Group Chat", "Les Agents contribuent à une conversation partagée et bornée."], ["magentic", "Magentic", "Un manager dédié adapte le plan et choisit le prochain spécialiste."]] },
      note: "Composite Flow fait déjà partie du contrat déclaratif ; son moteur d’exécution est encore en préparation.",
      link: "Explorer toutes les capacités des Flows"
    }
  }
};

const packCatalog = [
  { name: "daily-life-assistant", displayName: "Daily Life Assistant", audience: "personal", strategy: "handoff", resources: 6, description: { en: "Route an everyday request to the most relevant declared specialist.", fr: "Oriente une demande du quotidien vers le spécialiste déclaré le plus pertinent." } },
  { name: "event-planner", displayName: "Adaptive Event Planner", audience: "personal", strategy: "magentic", resources: 7, description: { en: "Adaptively coordinate specialists to prepare a small personal event.", fr: "Coordonne des spécialistes de façon adaptative pour préparer un événement personnel." } },
  { name: "personal-advisor-panel", displayName: "Personal Advisor Panel", audience: "personal", strategy: "concurrent", resources: 5, description: { en: "Collect independent budget, practicality and sustainability perspectives.", fr: "Réunit en parallèle des avis indépendants sur le budget, la faisabilité et la durabilité." } },
  { name: "personal-decision-guide", displayName: "Personal Decision Guide", audience: "personal", strategy: "sequential", resources: 5, description: { en: "Turn an everyday decision into a clear, balanced recommendation.", fr: "Transforme une décision du quotidien en recommandation claire et équilibrée." } },
  { name: "weekend-planning-room", displayName: "Weekend Planning Room", audience: "personal", strategy: "group-chat", resources: 6, description: { en: "Build a balanced weekend plan through one bounded shared discussion.", fr: "Construit un programme de week-end équilibré au cours d’une discussion collective cadrée." } },
  { name: "adaptive-delivery-plan", displayName: "Adaptive Delivery Plan", audience: "professional", strategy: "magentic", resources: 7, description: { en: "Coordinate specialists to build a delivery plan for a complex initiative.", fr: "Coordonne des spécialistes pour construire le plan de livraison d’une initiative complexe." } },
  { name: "brief-to-spec", displayName: "Brief to Spec", audience: "professional", strategy: "sequential", resources: 5, description: { en: "Turn a product or engineering brief into a reviewed implementation specification.", fr: "Transforme un brief produit ou technique en spécification d’implémentation revue." } },
  { name: "design-review-room", displayName: "Design Review Room", audience: "professional", strategy: "group-chat", resources: 6, description: { en: "Run a bounded collaborative design review and record a final decision.", fr: "Conduit une revue de conception collaborative cadrée et consigne la décision finale." } },
  { name: "expert-panel", displayName: "Independent Expert Panel", audience: "professional", strategy: "concurrent", resources: 5, description: { en: "Run independent security, operability and experience reviews.", fr: "Mène en parallèle des revues indépendantes de sécurité, d’opérabilité et d’expérience." } },
  { name: "smart-support-desk", displayName: "Smart Support Desk", audience: "professional", strategy: "handoff", resources: 6, description: { en: "Qualify a support request and hand it to the appropriate specialist.", fr: "Qualifie une demande de support et la transmet au spécialiste approprié." } }
];

const pages = {
  en: {
    home: {
      title: "Agentstration — The control plane for AI agents",
      description: "Define, orchestrate and operate AI agents and workflows with an open, local-first control plane.",
      hero: {
        kicker: "Open source · Self-hosted",
        title: "Govern. Orchestrate. <em>Run.</em>",
        body: "Agentstration lets you declare agents and model profiles, compose them into versioned visual flows, distribute reusable Packs, then execute and track delegated work from the Console and Workplace. Agent execution currently runs through Microsoft Agent Framework.",
        primary: "See what Agentstration can do",
        secondary: "View on GitHub",
        proof: ["Provider-neutral", "Cloud-optional", "Extensible"]
      },
      problem: {
        kicker: "What Agentstration enables",
        title: "Define, compose and operate agentic work end to end.",
        body: "Agentstration covers the complete path from governed definitions to the durable result delivered to a user.",
        stats: [["", "Define the system", "Create declarative agents, model profiles and deployments, tool catalogs and governed configuration."], ["", "Compose and distribute", "Assemble agents and tools into versioned visual flows, then share installable experiences as Packs."], ["", "Execute and track", "Run work through MAF, manage human interactions and durable Work Items, and follow runs, results and failures in the Console and Workplace."]]
      },
      experience: {
        kicker: "From orchestration to user experience",
        title: "Entries turn agents and flows into services people can actually use.",
        body: "An Entry is a declarative access point published into a Workspace. It connects a user-facing experience to an agent or a versioned flow without exposing runtime, provider or orchestration details.",
        entryLabel: "Published Entry",
        entryTitle: "One governed access point",
        entryBody: "It defines the presentation, expected inputs and execution target. The same building block can become a prompt, a form or a conversation in the Workplace.",
        presentations: ["Prompt", "Form", "Conversation"],
        link: "Discover the Workplace",
        journeyLabel: "What the user experiences",
        stages: [["workplace", "Available in the Workplace", "The Workspace organizes Entries as primary, featured or standard experiences so people immediately see what they can launch."], ["control", "A durable interaction", "Submitting an Entry opens a conversation that keeps the request, follow-ups and any input, choice, confirmation or approval needed along the way."], ["flow", "A task, then useful outcomes", "When execution is required, the technical Work Item becomes a readable Task. Progress, results, downloadable artifacts and notifications remain available in the Workplace."]]
      },
      runtime: {
        kicker: "Agent runtime",
        title: "A control plane built to execute through a real agent runtime.",
        body: "Agentstration governs definitions, work and orchestration. Its Runtime Plane materializes agents and delegates their execution to an agent runtime. The current built-in adapter integrates Microsoft Agent Framework (MAF), isolated behind stable, provider-neutral contracts.",
        label: "Current runtime integration",
        name: "Microsoft Agent Framework",
        points: [["Materialize", "Turn governed agent definitions into executable runtime instances."], ["Execute", "Run agents through MAF while keeping provider selection outside the orchestration model."], ["Observe", "Normalize lifecycle events, progress and results back into Agentstration."]]
      },
      providers: {
        kicker: "Model provider integrations",
        title: "Multiple model runtimes. One governance model.",
        body: "Agentstration integrates Ollama, llama.cpp and LocalAI through AEP. Each runtime keeps its own strengths while model profiles, capabilities and tools remain governed consistently by the platform.",
        items: [["Ollama", "Run and discover local models with streaming, tool calls and usage reporting."], ["llama.cpp", "Operate lightweight local deployments and expose only the capabilities the server actually supports."], ["LocalAI", "Connect a broad local model ecosystem while keeping discovery, streaming and tool use inside Agentstration’s governance boundary."]],
        future: "Agents reference a governed model profile—not a vendor endpoint or credential—so the underlying runtime can change without redesigning orchestration.",
        stages: [["Provider", "Connectivity & capabilities"], ["Deployment", "Concrete model"], ["Profile", "Governed defaults"], ["Agent", "Portable definition"]]
      },
      governance: {
        kicker: "Governed tool execution",
        title: "Every agent action stays under control.",
        body: "Agentstration applies the platform’s rules before a tool is exposed or invoked. Sensitive actions can require human approval, and every decision remains traceable alongside the work that produced it.",
        items: [["control", "Apply policies", "Allow, restrict or block tools according to the Workspace and execution context."], ["workplace", "Request approval", "Bring sensitive decisions to the user inside the ongoing Workplace interaction."], ["flow", "Keep an audit trail", "Record governance decisions and tool execution as durable, inspectable activity."]]
      },
      blocks: {
        kicker: "Core building blocks",
        title: "A shared language for agent systems.",
        body: "Every concept has a focused role, so the platform stays understandable as your system grows.",
        items: [
          ["agent", "Agents", "Purposeful units with defined instructions, capabilities and provider settings."],
          ["flow", "Flows", "Explicit orchestration that turns agent steps into repeatable work."],
          ["provider", "Model providers", "A provider-neutral layer for choosing the right model for each job."],
          ["extension", "Extensions", "Contract-based integrations that expand the platform without tight coupling."],
          ["workplace", "Workplace", "The human-facing environment where people launch and follow work."],
          ["control", "Management & runtime", "Distinct planes for configuration and dependable execution."]
        ]
      },
      local: {
        kicker: "Local-first by design",
        title: "Your infrastructure is the default—not an escape hatch.",
        body: "Run Agentstration close to your data and tools. Add cloud services when they earn their place, without making a hosted platform mandatory.",
        points: [["Local operation", "Keep the control plane and workloads where they belong."], ["Cloud optional", "Connect hosted capabilities selectively, on your terms."], ["Provider choice", "Match models to workloads without redesigning the system."], ["Open architecture", "Build around explicit contracts and replaceable components."]]
      },
      architecture: {
        kicker: "Architecture at a glance",
        title: "Clear boundaries. One coherent system.",
        body: "People work through a focused Workplace. Flows coordinate agents. Agents use model providers, tools and extensions. Management defines the system; Runtime executes it.",
        link: "Take the architecture tour"
      },
      extensions: {
        kicker: "Extension architecture",
        title: "Integrate through contracts, not hidden coupling.",
        body: "AEP—the Agentstration Extension Protocol—is Agentstration’s native extension model. It defines how the platform discovers, connects to and invokes capabilities running outside the main process, with safer boundaries, broader technology choice and independent lifecycles.",
        link: "Discover the extension model"
      },
      preview: {
        kicker: "Already operational",
        title: "A real product surface for every role.",
        body: "Operators govern the platform in the Console. People delegate and follow work in the Workplace. Both share the same durable application services and explicit contracts.",
        cards: [["Operations Console", "Manage agents, model profiles, tool catalogs, flow versions and runtime runs."], ["End-user Workplace", "Publish entries, delegate work, continue interactions and retrieve durable results."]],
        placeholder: "Live product surface"
      }
    },
    workplace: {
      title: "Workplace — Agentstration",
      description: "Discover the Agentstration Workplace, where published Entries become durable user interactions, tasks, results and deliverables.",
      hero: ["End-user experience", "Where agentic systems become useful work.", "Workplace is the user-facing Agentstration experience. People launch governed capabilities through Entries, stay in the same conversation while work runs, answer requests for input and retrieve durable results—without seeing runtime or orchestration internals."],
      overview: { kicker: "A separate product surface", title: "Purpose-built for people who need an outcome, not a control plane.", body: "Each Workspace brings together dashboards, available services and ongoing work for a team or business context. People express an intention, follow progress and use what was produced while Agentstration handles flows, runtimes and providers behind the scenes.", primary: "Primary Entry", prompt: "What do you want to accomplish?", request: "Review this change, identify the main risks and prepare an executive brief.", shortcuts: "Available experiences", tasks: "Recent work", taskName: "Change risk brief", taskState: "Completed", notice: "Deliverable ready" },
      entries: { kicker: "Ready-to-use experiences", title: "An Entry turns a capability into an experience people can use in the Workplace.", body: "Each Entry gives users the right way to express their need—through a prompt, a form or a conversation—then mobilizes the most suitable agent or flow to handle it. Complex orchestration becomes a clear, accessible service.", types: [["entry", "Prompt", "A focused request surface with suggestions and a permanent composer."], ["control", "Form", "Structured fields for the information an execution needs."], ["workplace", "Conversation", "A durable exchange for requests that evolve through follow-ups."]], rolesLabel: "Workspace presentation", roles: ["Primary", "Featured", "Standard"] },
      dashboards: { kicker: "Dashboards by Workspace", title: "Give every team a focused view of its services and work.", body: "Dashboards organize the experiences a team can launch, the tasks that need attention and the results that are ready to use—without mixing unrelated contexts.", items: [["entry", "Available services", "Highlight the Entries that matter for this Workspace."], ["workplace", "Attention required", "Surface questions, choices and approvals exactly when a user needs to act."], ["flow", "Work and outcomes", "Follow active tasks, completed results and downloadable deliverables from one place."]] },
      journey: { kicker: "A simple experience from start to finish", title: "Make a request, follow the work and retrieve the result in one place.", body: "From the Workplace, users choose an available service, describe what they need, provide additional details if Agentstration asks for them, then follow progress until the result is ready.", stages: [["entry", "Choose a service", "Start from an experience designed for a specific need."], ["control", "Describe the request", "Use a prompt, a form or a conversation to explain the expected outcome."], ["workplace", "Add details when needed", "Answer a question, make a choice, confirm an action or attach a file."], ["flow", "Follow the work", "See progress and know when attention is required."], ["extension", "Use the result", "Read the response, download the deliverables and continue the request if needed."]] },
      conversation: { kicker: "Durable by design", title: "Completion does not end the conversation.", body: "A completed Task returns its Interaction to an idle state instead of closing it. A follow-up can start another execution while preserving the same public Task and the useful functional context. The user sees successive outputs—not a trail of technical run records.", messages: [["user", "Make the report shorter and suitable for executives."], ["agent", "I’m preparing an executive version while keeping the initial report available."], ["result", "Executive brief ready", "Download .docx"]], points: [["Conversation-native actions", "Choices, confirmations and required input appear inline and are recorded in context."], ["Readable progression", "Functional activity labels replace provider events, storage identifiers and raw traces."], ["Living results", "Revisions and artifacts stay attached to the same task instead of fragmenting the experience."]] },
      capabilities: { kicker: "What users can do", title: "Everything needed to delegate and follow agentic work.", items: [["workplace", "Launch available services", "Start from Primary, Featured or Standard Entries configured for the Workspace."], ["control", "Answer at the right moment", "Respond to input, choice, confirmation, file or approval requests without leaving the conversation."], ["flow", "Follow durable Tasks", "See status, functional progression and available pause, resume or cancel actions."], ["entry", "Continue a request", "Add follow-ups after an immediate reply, during execution or after a result."], ["extension", "Retrieve deliverables", "Read successive results and download the artifacts produced by the work."], ["provider", "Stay informed", "Receive attention-first notifications when action is required or work completes."]] }
    },
    features: {
      title: "Features — Agentstration",
      description: "Explore Agentstration’s building blocks for defining, orchestrating and operating AI agent systems.",
      hero: ["Platform capabilities", "The infrastructure agents need to become a system.", "Focused building blocks keep configuration explicit, orchestration reusable and operation understandable—from a single machine to a distributed environment."],
      groups: [
        ["Define", "Model the system deliberately", "Replace scattered prompts and glue code with durable platform concepts.", [["Agents", "Capture purpose, instructions and capabilities as a manageable resource."], ["Providers", "Keep model selection separate from the work agents perform."], ["Resources", "Give configuration a clear home and lifecycle."]]],
        ["Orchestrate", "Turn behavior into durable, interactive flows", "Compose work visibly, let it wait for human input and resume without losing its state.", [["Versioned flows", "Coordinate agent steps through explicit, reusable definitions."], ["Human interaction", "Request information, a choice or an approval while work is running."], ["Durable recovery", "Resume execution after an interruption and preserve the path to the result."]]],
        ["Govern", "Control what agents are allowed to do", "Apply policies before tool invocation and keep sensitive actions accountable.", [["Tool policies", "Allow, restrict or block capabilities according to context."], ["Human approval", "Require confirmation before an agent performs a sensitive action."], ["Durable audit", "Trace governance decisions and tool activity alongside each execution."]]],
        ["Operate", "Management and runtime, each with a purpose", "Change the platform without blurring configuration and execution.", [["Management plane", "Define, validate and govern the desired system state."], ["Runtime plane", "Execute work through stable runtime contracts."], ["Workplace", "Expose useful workflows without exposing operational complexity."]]],
        ["Extend", "Connect without surrendering the architecture", "Use provider and extension contracts to evolve one capability at a time.", [["Provider independent", "Choose and change AI providers at the platform boundary."], ["AEP extension model", "Connect out-of-process extensions through Agentstration’s native protocol."], ["Open composition", "Bring tools and services into focused integration points."]]]
      ],
      principles: ["Local-first operation", "Cloud services remain optional", "Small, explicit concepts", "Human and machine-facing surfaces", "Replaceable providers", "Contract-based integrations"]
    },
    architecture: {
      title: "Architecture — Agentstration",
      description: "Understand the Management, Work, Flow and Runtime boundaries behind Agentstration’s open agent architecture.",
      hero: ["System architecture", "Structure for agents that have to operate in the real world.", "Agentstration separates governance, delegated work, orchestration and execution—then reconnects them through explicit, provider-neutral contracts."],
      planes: [["Management plane", "Govern the desired system", "Own declarative agents, model profiles, tool catalogs, deployments and access boundaries."], ["Work plane", "Track delegated work", "Own durable Work Items, interactions, tasks, results and artifacts exposed through the Workplace."], ["Flow plane", "Orchestrate visibly", "Turn editable graph drafts into immutable published versions and observable Flow Runs."], ["Runtime plane", "Execute through an agent runtime", "Materialize and run agents through today’s Microsoft Agent Framework adapter, behind stable contracts."]],
      flow: [["Users", "Start work and consume results"], ["Workplace", "Presents available tasks and progress"], ["Flows", "Coordinate the sequence of work"], ["Agents", "Apply instructions and capabilities"], ["Providers · Tools · Extensions", "Supply models and external capabilities"]],
      boundaries: [["Declarative by design", "Management owns durable definitions; Runtime materializes them only when work is executed."], ["Explicit boundaries", "Planes exchange stable contracts so each can evolve without depending on another’s internals."], ["Local-first, cloud when useful", "Run the control plane close to your data and add remote services selectively."], ["Replaceable components", "Runtimes, model providers and AEP extensions can evolve without redesigning orchestration."]]
    },
    extensions: {
      title: "Extensions — Agentstration",
      description: "Discover AEP, Agentstration’s native contract-based extension model.",
      hero: ["Native extension model", "Capabilities connect cleanly—and evolve independently.", "AEP—Agentstration Extension Protocol—is Agentstration’s native extension model. It defines how the platform discovers, connects to and invokes capabilities running outside its core process, so each extension retains its own technology, lifecycle and failure boundary."],
      capabilities: [["Model providers", "Connect local or hosted model runtimes through one contract, with model discovery, chat, streaming and declared capabilities."], ["Tools", "Expose tools and their schemas to Agentstration. AEP tool contributions can rely on MCP for discovery and invocation."], ["Configuration", "Publish versioned configuration schemas and secret annotations without hard-coding provider-specific fields into the platform."], ["Specialized capabilities", "Add namespaced capabilities outside the core process and evolve them on their own lifecycle."]],
      aep: { title: "AEP is Agentstration’s extension model.", body: "The Agentstration Extension Protocol defines the native contract between the platform and its extension processes. It gives Agentstration a consistent way to discover capabilities, invoke them and observe their lifecycle without loading arbitrary plugins into the core process.", stages: [["Discover", "An extension describes its identity, version and capabilities."], ["Connect", "Agentstration communicates with the extension through the AEP contract."], ["Invoke", "Runtime work calls a declared capability with structured input."], ["Observe", "Results, failures and health remain visible across the boundary."]] }
    },
    packs: {
      title: "Packs Gallery — Agentstration",
      description: "Explore official, versioned Agentstration Packs for personal and professional agent orchestration.",
      hero: ["Official pack catalog", "Start with an orchestration you can inspect, run and adapt.", "Packs bundle declarative agents, flows and supporting resources into versioned, installable experiences. The official gallery currently lives in the Agentstration Packs repository."],
      gallery: { kicker: "10 official samples · 5 orchestration strategies", title: "Choose a starting point, not a blank page.", body: "Browse the current catalog by audience. Every card links to its versioned source in the official repository.", all: "All packs", personal: "Personal", professional: "Professional", resources: "resources", view: "View pack", repository: "Open the packs repository", source: "Git-backed catalog" },
      authoring: { kicker: "From catalog to your own Pack", title: "Install, compose and adapt without starting over.", body: "Use a Pack as-is or compose one from the agents, flows, model profiles and resources already governed in a Workspace.", items: [["extension", "Install", "Bring a versioned Pack into a Workspace with explicit resource bindings."], ["control", "Compose", "Select the governed resources that belong together in a reusable experience."], ["flow", "Adapt", "Fork a Pack, evolve it in isolation and rebuild your own version deterministically."]] },
      items: packCatalog.map(pack => ({ ...pack, description: pack.description.en }))
    },
    privacy: {
      title: "Privacy — Agentstration",
      description: "Learn how the Agentstration website handles analytics consent and visitor data.",
      hero: ["Privacy", "Your choice comes before audience measurement.", "The Agentstration website only activates Google Analytics after you explicitly accept it. You can refuse or change your choice at any time."],
      sections: [
        ["What we measure", "If you consent, Google Analytics records audience and navigation information such as viewed pages, approximate location, device and browser characteristics, and interaction events. We do not ask Google Analytics to collect the content of forms, conversations or Agentstration workloads."],
        ["Why we use it", "These statistics help us understand which public pages are useful, detect navigation problems and improve the website. The legal basis for this optional processing is your consent."],
        ["Google Analytics", "The audience measurement service is provided by Google. Its use may involve cookies and the processing of data by Google outside the European Economic Area under the safeguards described in Google’s own privacy documentation."],
        ["Your choice", "Analytics is disabled by default. Accepting or rejecting stores only your preference in this browser for up to six months. Use “Manage analytics cookies” in the footer to change it. Withdrawing consent disables further measurement from this website and removes the Google Analytics cookies accessible to it."],
        ["Contact", "For a question about this website or its use of audience measurement, contact the Agentstration maintainers through the public GitHub repository."]
      ],
      googleLink: "Google privacy and terms",
      contactLink: "Agentstration on GitHub"
    }
  },
  fr: {
    home: {
      title: "Agentstration — Le plan de contrôle pour agents IA",
      description: "Définissez, orchestrez et opérez agents IA et workflows grâce à un plan de contrôle ouvert et local-first.",
      hero: { kicker: "Open source · Auto-hébergé", title: "Gouvernez. Orchestrez. <em>Exécutez.</em>", body: "Agentstration permet de déclarer des agents et leurs profils de modèles, de les composer dans des flows visuels versionnés, de distribuer des Packs réutilisables, puis d’exécuter et suivre le travail délégué depuis la Console et le Workplace. L’exécution des agents repose aujourd’hui sur Microsoft Agent Framework.", primary: "Voir ce que permet Agentstration", secondary: "Voir sur GitHub", proof: ["Indépendant des fournisseurs", "Cloud optionnel", "Extensible"] },
      problem: { kicker: "Ce que permet Agentstration", title: "Définir, composer et opérer le travail agentique de bout en bout.", body: "Agentstration couvre tout le parcours, depuis les définitions gouvernées jusqu’au résultat durable remis à l’utilisateur.", stats: [["", "Définir le système", "Créez agents déclaratifs, profils et déploiements de modèles, catalogues d’outils et configurations gouvernées."], ["", "Composer et distribuer", "Assemblez agents et outils dans des flows visuels versionnés, puis partagez des expériences installables sous forme de Packs."], ["", "Exécuter et suivre", "Lancez le travail via MAF, gérez interactions humaines et Work Items durables, puis suivez runs, résultats et erreurs dans la Console et le Workplace."]] },
      experience: { kicker: "De l’orchestration à l’expérience utilisateur", title: "Les Entries transforment agents et flows en services réellement accessibles.", body: "Une Entry est un point d’accès déclaratif publié dans un Workspace. Elle relie une expérience destinée à l’utilisateur à un agent ou à un flow versionné, sans lui exposer le runtime, le fournisseur de modèles ni les détails d’orchestration.", entryLabel: "Entry publiée", entryTitle: "Un point d’accès gouverné", entryBody: "Elle définit la présentation, les données attendues et la cible d’exécution. Le même concept peut se matérialiser dans le Workplace sous la forme d’un prompt, d’un formulaire ou d’une conversation.", presentations: ["Prompt", "Formulaire", "Conversation"], link: "Découvrir le Workplace", journeyLabel: "Ce que vit l’utilisateur", stages: [["workplace", "Disponible dans le Workplace", "Le Workspace organise les Entries comme expériences principales, mises en avant ou standard afin que chacun voie immédiatement ce qu’il peut lancer."], ["control", "Une interaction qui reste en contexte", "L’envoi ouvre une conversation durable qui conserve la demande, les relances et les saisies, choix, confirmations ou approbations nécessaires en cours de route."], ["flow", "Une tâche, puis des résultats utiles", "Lorsqu’une exécution est nécessaire, le Work Item technique devient une Task lisible. Progression, résultats, livrables téléchargeables et notifications restent accessibles dans le Workplace."]] },
      runtime: { kicker: "Runtime d’agents", title: "Un plan de contrôle conçu pour exécuter via un véritable runtime d’agents.", body: "Agentstration gouverne les définitions, le travail et l’orchestration. Son Runtime Plane matérialise les agents et délègue leur exécution à un runtime d’agents. L’adaptateur intégré actuellement est Microsoft Agent Framework (MAF), isolé derrière des contrats stables et indépendants des fournisseurs.", label: "Intégration runtime actuelle", name: "Microsoft Agent Framework", points: [["Matérialiser", "Transformer les définitions gouvernées en instances d’agents exécutables."], ["Exécuter", "Lancer les agents via MAF tout en gardant le choix du fournisseur hors du modèle d’orchestration."], ["Observer", "Normaliser cycle de vie, progression et résultats dans Agentstration."]] },
      providers: { kicker: "Intégrations de fournisseurs de modèles", title: "Plusieurs runtimes de modèles. Une gouvernance commune.", body: "Agentstration intègre Ollama, llama.cpp et LocalAI via AEP. Chaque runtime conserve ses atouts tandis que les profils de modèles, les capacités et les outils restent gouvernés de manière cohérente par la plateforme.", items: [["Ollama", "Exécutez et découvrez des modèles locaux avec streaming, appels d’outils et suivi de l’usage."], ["llama.cpp", "Opérez des déploiements locaux légers en n’exposant que les capacités réellement prises en charge par le serveur."], ["LocalAI", "Connectez un large écosystème de modèles locaux tout en maintenant découverte, streaming et outils dans la frontière de gouvernance d’Agentstration."]], future: "Les agents référencent un profil de modèle gouverné — pas un endpoint ni un secret fournisseur — afin de changer de runtime sans redessiner l’orchestration.", stages: [["Fournisseur", "Connexion et capacités"], ["Déploiement", "Modèle concret"], ["Profil", "Paramètres gouvernés"], ["Agent", "Définition portable"]] },
      governance: { kicker: "Exécution gouvernée des outils", title: "Chaque action d’un agent reste sous contrôle.", body: "Agentstration applique les règles de la plateforme avant qu’un outil soit exposé ou invoqué. Les actions sensibles peuvent nécessiter une approbation humaine et chaque décision reste traçable avec le travail qui l’a produite.", items: [["control", "Appliquer les règles", "Autorisez, restreignez ou bloquez les outils selon le Workspace et le contexte d’exécution."], ["workplace", "Demander une approbation", "Présentez les décisions sensibles à l’utilisateur dans l’interaction Workplace en cours."], ["flow", "Conserver une trace", "Enregistrez les décisions de gouvernance et l’exécution des outils comme une activité durable et consultable."]] },
      blocks: { kicker: "Briques fondamentales", title: "Un langage commun pour les systèmes agentiques.", body: "Chaque concept a un rôle précis afin que la plateforme reste compréhensible à mesure qu’elle grandit.", items: [["agent", "Agents", "Des unités dédiées avec instructions, capacités et paramètres de fournisseur définis."], ["flow", "Flows", "Une orchestration explicite qui transforme des étapes d’agents en travail reproductible."], ["provider", "Fournisseurs de modèles", "Une couche neutre pour choisir le bon modèle selon le besoin."], ["extension", "Extensions", "Des intégrations par contrat qui étendent la plateforme sans couplage fort."], ["workplace", "Workplace", "L’environnement où les personnes lancent et suivent leur travail."], ["control", "Management & runtime", "Des plans distincts pour la configuration et une exécution fiable."]] },
      local: { kicker: "Local-first par conception", title: "Votre infrastructure est le choix par défaut, pas une porte de sortie.", body: "Exécutez Agentstration au plus près de vos données et outils. Ajoutez des services cloud lorsqu’ils sont utiles, sans plateforme hébergée obligatoire.", points: [["Exécution locale", "Gardez plan de contrôle et workloads là où ils doivent être."], ["Cloud optionnel", "Connectez des capacités hébergées de façon sélective."], ["Choix des fournisseurs", "Associez modèles et workloads sans redessiner le système."], ["Architecture ouverte", "Construisez sur des contrats explicites et des composants remplaçables."]] },
      architecture: { kicker: "L’architecture en un regard", title: "Des frontières claires. Un système cohérent.", body: "Les utilisateurs travaillent dans un Workplace ciblé. Les flows coordonnent les agents. Les agents utilisent fournisseurs de modèles, outils et extensions. Le Management définit le système ; le Runtime l’exécute.", link: "Parcourir l’architecture" },
      extensions: { kicker: "Architecture d’extension", title: "Intégrer par contrat, sans couplage caché.", body: "AEP — Agentstration Extension Protocol — est le modèle d’extension natif d’Agentstration. Il définit comment la plateforme découvre, connecte et invoque des capacités exécutées hors du processus principal, avec des frontières plus sûres, un choix technologique plus large et des cycles de vie indépendants.", link: "Découvrir le modèle d’extension" },
      preview: { kicker: "Déjà opérationnel", title: "Une surface produit pour chaque rôle.", body: "Les opérateurs gouvernent la plateforme dans la Console. Les utilisateurs délèguent et suivent le travail dans le Workplace. Les deux reposent sur les mêmes services durables et contrats explicites.", cards: [["Console d’opérations", "Gérer agents, profils de modèles, catalogues d’outils, versions de flows et exécutions runtime."], ["Workplace utilisateur", "Publier des entrées, déléguer le travail, poursuivre les interactions et récupérer les résultats durables."]], placeholder: "Surface produit active" }
    },
    workplace: {
      title: "Workplace — Agentstration",
      description: "Découvrez le Workplace Agentstration, où les Entries publiées deviennent interactions, tâches, résultats et livrables durables pour l’utilisateur.",
      hero: ["Expérience utilisateur", "Là où les systèmes agentiques deviennent du travail utile.", "Workplace est l’expérience Agentstration destinée à l’utilisateur final. Chacun lance des capacités gouvernées via des Entries, reste dans la même conversation pendant l’exécution, répond aux demandes d’intervention et récupère des résultats durables — sans voir les détails du runtime ni de l’orchestration."],
      overview: { kicker: "Une surface produit distincte", title: "Conçu pour celles et ceux qui attendent un résultat, pas un plan de contrôle.", body: "Chaque Workspace réunit les dashboards, les services disponibles et les travaux en cours d’une équipe ou d’un contexte métier. Les utilisateurs expriment une intention, suivent l’avancement et exploitent les résultats pendant qu’Agentstration gère flows, runtimes et fournisseurs en arrière-plan.", primary: "Entry principale", prompt: "Que voulez-vous accomplir ?", request: "Analyse ce changement, identifie les principaux risques et prépare une synthèse pour la direction.", shortcuts: "Expériences disponibles", tasks: "Travaux récents", taskName: "Synthèse des risques", taskState: "Terminée", notice: "Livrable disponible" },
      entries: { kicker: "Des expériences prêtes à l’emploi", title: "Une Entry transforme une capacité en expérience accessible dans le Workplace.", body: "Chaque Entry offre à l’utilisateur la bonne manière d’exprimer son besoin — par un prompt, un formulaire ou une conversation — puis mobilise l’agent ou le flow le plus adapté pour y répondre. Une orchestration complexe devient ainsi un service clair et immédiatement utilisable.", types: [["entry", "Prompt", "Une surface ciblée avec suggestions et zone de saisie permanente."], ["control", "Formulaire", "Des champs structurés pour collecter les informations nécessaires à l’exécution."], ["workplace", "Conversation", "Un échange durable pour les demandes qui évoluent par relances successives."]], rolesLabel: "Présentation dans le Workspace", roles: ["Principale", "Mise en avant", "Standard"] },
      dashboards: { kicker: "Des dashboards par Workspace", title: "Donnez à chaque équipe une vue ciblée sur ses services et ses travaux.", body: "Les dashboards organisent les expériences qu’une équipe peut lancer, les tâches qui demandent son attention et les résultats disponibles, sans mélanger des contextes sans rapport.", items: [["entry", "Services disponibles", "Mettez en avant les Entries utiles dans ce Workspace."], ["workplace", "Intervention attendue", "Faites remonter questions, choix et approbations au moment où l’utilisateur doit agir."], ["flow", "Travaux et résultats", "Suivez tâches actives, résultats terminés et livrables téléchargeables au même endroit."]] },
      journey: { kicker: "Une expérience simple de bout en bout", title: "Faire une demande, suivre le travail et récupérer le résultat au même endroit.", body: "Depuis le Workplace, l’utilisateur choisit un service, décrit son besoin, apporte une précision si Agentstration la demande, puis suit l’avancement jusqu’à ce que le résultat soit disponible.", stages: [["entry", "Choisir un service", "Partir d’une expérience conçue pour répondre à un besoin précis."], ["control", "Décrire la demande", "Utiliser un prompt, un formulaire ou une conversation pour expliquer le résultat attendu."], ["workplace", "Préciser si nécessaire", "Répondre à une question, faire un choix, confirmer une action ou joindre un fichier."], ["flow", "Suivre le travail", "Voir la progression et savoir lorsqu’une intervention est nécessaire."], ["extension", "Utiliser le résultat", "Consulter la réponse, télécharger les livrables et poursuivre la demande si besoin."]] },
      conversation: { kicker: "Durable par conception", title: "La fin d’une exécution ne ferme pas la conversation.", body: "Une Task terminée replace son Interaction en attente au lieu de la fermer. Une relance peut démarrer une nouvelle exécution tout en conservant la même Task publique et le contexte fonctionnel utile. L’utilisateur voit des versions successives du résultat, pas une succession de runs techniques.", messages: [["user", "Raccourcis le rapport et adapte-le à un comité de direction."], ["agent", "Je prépare une version exécutive tout en conservant le rapport initial."], ["result", "Synthèse exécutive disponible", "Télécharger .docx"]], points: [["Actions dans la conversation", "Choix, confirmations et saisies requises apparaissent dans le fil et restent attachés au contexte."], ["Progression compréhensible", "Des activités fonctionnelles remplacent événements fournisseurs, identifiants de stockage et traces brutes."], ["Résultats vivants", "Révisions et artefacts restent rattachés à la même tâche au lieu de fragmenter l’expérience."]] },
      capabilities: { kicker: "Ce que l’utilisateur peut faire", title: "Tout le nécessaire pour déléguer et suivre le travail agentique.", items: [["workplace", "Lancer les services disponibles", "Démarrer depuis les Entries principales, mises en avant ou standard configurées dans le Workspace."], ["control", "Répondre au bon moment", "Traiter une demande de saisie, choix, confirmation, fichier ou approbation sans quitter la conversation."], ["flow", "Suivre des Tasks durables", "Consulter l’état, la progression fonctionnelle et les actions disponibles : pause, reprise ou annulation."], ["entry", "Poursuivre une demande", "Ajouter une relance après une réponse immédiate, pendant l’exécution ou après un résultat."], ["extension", "Récupérer les livrables", "Lire les résultats successifs et télécharger les artefacts produits par le travail."], ["provider", "Rester informé", "Recevoir des notifications centrées sur l’attention lorsqu’une action est requise ou qu’un travail se termine."]] }
    },
    features: {
      title: "Fonctionnalités — Agentstration", description: "Découvrez les briques d’Agentstration pour définir, orchestrer et opérer des systèmes d’agents IA.", hero: ["Capacités de la plateforme", "L’infrastructure nécessaire pour transformer des agents en système.", "Des briques ciblées rendent la configuration explicite, l’orchestration réutilisable et l’exploitation compréhensible — d’une machine locale à un environnement distribué."],
      groups: [["Définir", "Modéliser le système avec intention", "Remplacez prompts épars et code de liaison par des concepts de plateforme durables.", [["Agents", "Formalisez objectif, instructions et capacités dans une ressource gérable."], ["Fournisseurs", "Séparez le choix du modèle du travail réalisé par l’agent."], ["Ressources", "Donnez à la configuration un emplacement et un cycle de vie clairs."]]], ["Orchestrer", "Transformer le comportement en flows durables et interactifs", "Composez le travail visiblement, laissez-le attendre une intervention humaine et reprenez sans perdre son état.", [["Flows versionnés", "Coordonnez les étapes des agents par des définitions explicites et réutilisables."], ["Interaction humaine", "Demandez une information, un choix ou une approbation pendant l’exécution."], ["Reprise durable", "Relancez le travail après une interruption en conservant le chemin vers le résultat."]]], ["Gouverner", "Contrôler ce que les agents sont autorisés à faire", "Appliquez les règles avant l’appel d’un outil et rendez les actions sensibles responsables.", [["Politiques d’outils", "Autorisez, restreignez ou bloquez les capacités selon le contexte."], ["Approbation humaine", "Exigez une confirmation avant qu’un agent réalise une action sensible."], ["Audit durable", "Retracez les décisions de gouvernance et l’activité des outils pour chaque exécution."]]], ["Opérer", "Management et runtime, chacun avec son rôle", "Faites évoluer la plateforme sans confondre configuration et exécution.", [["Plan de management", "Définissez, validez et gouvernez l’état désiré du système."], ["Plan runtime", "Exécutez le travail via des contrats runtime stables."], ["Workplace", "Exposez les workflows utiles sans la complexité opérationnelle."]]], ["Étendre", "Connecter sans sacrifier l’architecture", "Évoluez une capacité à la fois grâce aux contrats de fournisseurs et d’extensions.", [["Indépendance fournisseur", "Choisissez et changez de fournisseur IA à la frontière de la plateforme."], ["Modèle d’extension AEP", "Connectez les extensions hors processus grâce au protocole natif d’Agentstration."], ["Composition ouverte", "Intégrez outils et services à des points dédiés."]]]],
      principles: ["Exécution local-first", "Services cloud optionnels", "Concepts simples et explicites", "Surfaces humaines et machine", "Fournisseurs remplaçables", "Intégrations par contrat"]
    },
    architecture: {
      title: "Architecture — Agentstration", description: "Comprenez les frontières Management, Work, Flow et Runtime de l’architecture ouverte d’Agentstration.", hero: ["Architecture système", "Une structure pour les agents qui opèrent dans le monde réel.", "Agentstration sépare gouvernance, travail délégué, orchestration et exécution — puis les relie par des contrats explicites et indépendants des fournisseurs."],
      planes: [["Plan de management", "Gouverner le système désiré", "Centralise et gouverne les agents déclaratifs, profils de modèles, catalogues d’outils, déploiements et règles d’accès."], ["Plan de travail", "Suivre le travail délégué", "Gère le cycle de vie des Work Items, interactions, tâches, résultats et artefacts durables accessibles dans le Workplace."], ["Plan de flow", "Orchestrer visiblement", "Transforme les graphes éditables en versions publiées immuables et Flow Runs observables."], ["Plan runtime", "Exécuter via un runtime d’agents", "Matérialise et exécute les agents grâce à l’adaptateur Microsoft Agent Framework actuel, derrière des contrats stables."]],
      flow: [["Utilisateurs", "Initient le travail et utilisent les résultats"], ["Workplace", "Présente tâches disponibles et progression"], ["Flows", "Coordonnent la séquence du travail"], ["Agents", "Appliquent instructions et capacités"], ["Fournisseurs · Outils · Extensions", "Apportent modèles et capacités externes"]],
      boundaries: [["Des ressources déclaratives", "Le Management gouverne des définitions durables ; le Runtime ne les matérialise qu’au moment d’exécuter le travail."], ["Des frontières explicites", "Les plans échangent par des contrats stables afin d’évoluer sans dépendre de leurs implémentations internes."], ["Local-first, cloud au choix", "Exécutez le plan de contrôle au plus près de vos données et ajoutez des services distants seulement lorsqu’ils sont utiles."], ["Des composants remplaçables", "Runtime, fournisseurs de modèles et extensions AEP peuvent évoluer sans redessiner l’orchestration."]]
    },
    extensions: {
      title: "Extensions — Agentstration", description: "Découvrez AEP, le modèle d’extension natif d’Agentstration fondé sur des contrats explicites.", hero: ["Modèle d’extension natif", "Les capacités se connectent proprement — et évoluent indépendamment.", "AEP — Agentstration Extension Protocol — est le modèle d’extension natif d’Agentstration. Il définit comment la plateforme découvre, connecte et invoque des capacités exécutées hors de son processus principal. Chaque extension conserve ainsi sa technologie, son cycle de vie et sa propre frontière de défaillance."],
      capabilities: [["Fournisseurs de modèles", "Connectez des runtimes de modèles locaux ou hébergés par un même contrat, avec découverte des modèles, chat, streaming et capacités déclarées."], ["Outils", "Exposez des outils et leurs schémas à Agentstration. Les contributions AEP peuvent s’appuyer sur MCP pour leur découverte et leur invocation."], ["Configuration", "Publiez des schémas de configuration versionnés et leurs annotations de secrets, sans coder les champs propres à chaque fournisseur dans la plateforme."], ["Capacités spécialisées", "Ajoutez des capacités métier nommées hors du processus principal et faites-les évoluer selon leur propre cycle de vie."]],
      aep: { title: "AEP est le modèle d’extension d’Agentstration.", body: "L’Agentstration Extension Protocol définit le contrat natif entre la plateforme et ses processus d’extension. Il fournit à Agentstration une manière cohérente de découvrir les capacités, de les invoquer et d’observer leur cycle de vie, sans charger arbitrairement des plugins dans le processus central.", stages: [["Découvrir", "Une extension décrit son identité, sa version et ses capacités."], ["Connecter", "Agentstration établit la communication avec l’extension selon le contrat AEP."], ["Invoquer", "Le runtime appelle une capacité déclarée avec une entrée structurée."], ["Observer", "Résultats, erreurs et état de santé restent visibles à travers la frontière."]] }
    },
    packs: {
      title: "Galerie de packs — Agentstration",
      description: "Découvrez les Packs Agentstration officiels et versionnés pour orchestrer des usages personnels et professionnels.",
      hero: ["Catalogue de packs officiels", "Partez d’une orchestration à inspecter, exécuter et adapter.", "Les Packs regroupent agents déclaratifs, flows et ressources associées dans des expériences versionnées et installables. La galerie officielle est actuellement portée par le dépôt Agentstration Packs."],
      gallery: { kicker: "10 exemples officiels · 5 stratégies d’orchestration", title: "Choisissez un point de départ, pas une page blanche.", body: "Parcourez le catalogue actuel par audience. Chaque carte mène vers sa source versionnée dans le dépôt officiel.", all: "Tous les packs", personal: "Personnel", professional: "Professionnel", resources: "ressources", view: "Voir le pack", repository: "Ouvrir le dépôt des packs", source: "Catalogue adossé à Git" },
      authoring: { kicker: "Du catalogue à votre propre Pack", title: "Installez, composez et adaptez sans repartir de zéro.", body: "Utilisez un Pack tel quel ou composez-en un à partir des agents, flows, profils de modèles et ressources déjà gouvernés dans un Workspace.", items: [["extension", "Installer", "Intégrez un Pack versionné dans un Workspace avec des liaisons de ressources explicites."], ["control", "Composer", "Sélectionnez les ressources gouvernées qui forment ensemble une expérience réutilisable."], ["flow", "Adapter", "Forkez un Pack, faites-le évoluer de façon isolée puis reconstruisez votre propre version de manière déterministe."]] },
      items: packCatalog.map(pack => ({ ...pack, description: pack.description.fr }))
    },
    privacy: {
      title: "Confidentialité — Agentstration",
      description: "Découvrez comment le site Agentstration gère le consentement à la mesure d’audience et les données des visiteurs.",
      hero: ["Confidentialité", "Votre choix précède toujours la mesure d’audience.", "Le site Agentstration n’active Google Analytics qu’après votre accord explicite. Vous pouvez refuser ou modifier votre choix à tout moment."],
      sections: [
        ["Données mesurées", "Si vous y consentez, Google Analytics collecte des informations d’audience et de navigation telles que les pages consultées, la localisation approximative, les caractéristiques de l’appareil et du navigateur ainsi que des événements d’interaction. Nous ne demandons pas à Google Analytics de collecter le contenu de formulaires, de conversations ou de workloads Agentstration."],
        ["Finalité", "Ces statistiques nous aident à comprendre quelles pages publiques sont utiles, à détecter les difficultés de navigation et à améliorer le site. La base légale de ce traitement facultatif est votre consentement."],
        ["Google Analytics", "Le service de mesure d’audience est fourni par Google. Son utilisation peut impliquer des cookies et le traitement de données par Google en dehors de l’Espace économique européen, selon les garanties décrites dans la documentation de confidentialité de Google."],
        ["Votre choix", "La mesure d’audience est désactivée par défaut. Accepter ou refuser enregistre uniquement votre préférence dans ce navigateur pour une durée maximale de six mois. Utilisez « Gérer les cookies de mesure d’audience » dans le pied de page pour la modifier. Le retrait du consentement désactive les mesures suivantes depuis ce site et supprime les cookies Google Analytics auxquels il peut accéder."],
        ["Contact", "Pour toute question concernant ce site ou sa mesure d’audience, contactez les mainteneurs d’Agentstration depuis le dépôt GitHub public."]
      ],
      googleLink: "Règles de confidentialité de Google",
      contactLink: "Agentstration sur GitHub"
    }
  }
};

export function getContent(lang, page) {
  return { ...shared[lang], ...pages[lang][page] };
}
