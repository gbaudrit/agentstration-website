export const site = {
  origin: "https://agentstration.io",
  languages: ["en", "fr"],
  pages: ["home", "features", "architecture", "extensions"],
  paths: {
    home: "",
    features: "features",
    architecture: "architecture",
    extensions: "extensions"
  },
  externalLinks: {
    github: "",
    docs: ""
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
    nav: { home: "Home", features: "Features", architecture: "Architecture", extensions: "Extensions" },
    footer: {
      statement: "An open control plane for building and operating AI agent systems.",
      product: "Product",
      resources: "Resources",
      documentation: "Documentation",
      github: "GitHub",
      comingSoon: "Coming soon",
      legal: "Agentstration is an evolving open platform.",
      built: "Designed for local-first, provider-independent systems."
    },
    cta: {
      eyebrow: "Build the system around your agents",
      title: "From promising prototype to dependable platform.",
      body: "Explore the architecture today. Connect to the project as public resources become available.",
      primary: "Explore architecture",
      secondary: "See all features"
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
    nav: { home: "Accueil", features: "Fonctionnalités", architecture: "Architecture", extensions: "Extensions" },
    footer: {
      statement: "Un plan de contrôle ouvert pour construire et opérer des systèmes d’agents IA.",
      product: "Produit",
      resources: "Ressources",
      documentation: "Documentation",
      github: "GitHub",
      comingSoon: "Bientôt disponible",
      legal: "Agentstration est une plateforme ouverte en évolution.",
      built: "Pensée pour des systèmes local-first et indépendants des fournisseurs."
    },
    cta: {
      eyebrow: "Construisez le système autour de vos agents",
      title: "Du prototype prometteur à la plateforme fiable.",
      body: "Explorez l’architecture dès aujourd’hui. Suivez le projet à mesure que ses ressources publiques arrivent.",
      primary: "Explorer l’architecture",
      secondary: "Voir les fonctionnalités"
    }
  }
};

const pages = {
  en: {
    home: {
      title: "Agentstration — The control plane for AI agents",
      description: "Define, orchestrate and operate AI agents and workflows with an open, local-first control plane.",
      hero: {
        kicker: "Agent infrastructure, under your control",
        title: "Turn individual agents into an <em>operable system.</em>",
        body: "Agentstration is the open control plane for defining, orchestrating, managing and running agents and workflows—locally or across the infrastructure you choose.",
        primary: "Explore the platform",
        secondary: "Understand the architecture",
        proof: ["Local-first", "Provider independent", "Open extension model"]
      },
      problem: {
        kicker: "Why Agentstration?",
        title: "The hard part starts after the first agent works.",
        body: "Prototypes are easy to start. Real systems need stable configuration, reusable workflows, governed execution, user-facing workspaces and a clear operational model. Agentstration supplies that missing infrastructure.",
        stats: [["01", "Define once", "Keep agent identity, capabilities and configuration explicit."], ["02", "Compose safely", "Connect agents through flows instead of brittle scripts."], ["03", "Operate clearly", "Separate management concerns from runtime execution."]]
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
        body: "Agentstration is moving toward AEP—the Agentstration Extension Protocol—so extensions can live outside the main process and communicate through a defined contract. AEP is evolving, but the direction is deliberate: safer boundaries, broader technology choice and independent lifecycles.",
        link: "Discover the extension model"
      },
      preview: {
        kicker: "Product surfaces",
        title: "One platform, two focused experiences.",
        body: "The Console helps operators shape the system. The Workplace gives people a clear place to get work done.",
        cards: [["Console", "Configure agents, flows, providers and platform resources."], ["Workplace", "Launch tasks, follow progress and review useful results."]],
        placeholder: "Product preview coming soon"
      }
    },
    features: {
      title: "Features — Agentstration",
      description: "Explore Agentstration’s building blocks for defining, orchestrating and operating AI agent systems.",
      hero: ["Platform capabilities", "The infrastructure agents need to become a system.", "Focused building blocks keep configuration explicit, orchestration reusable and operation understandable—from a single machine to a distributed environment."],
      groups: [
        ["Define", "Model the system deliberately", "Replace scattered prompts and glue code with durable platform concepts.", [["Agents", "Capture purpose, instructions and capabilities as a manageable resource."], ["Providers", "Keep model selection separate from the work agents perform."], ["Resources", "Give configuration a clear home and lifecycle."]]],
        ["Orchestrate", "Turn behavior into repeatable flows", "Compose work visibly so complex outcomes do not depend on opaque application code.", [["Flows", "Coordinate agent steps through explicit, reusable definitions."], ["Inputs and results", "Create a consistent path from a user request to an inspectable outcome."], ["Boundaries", "Keep orchestration concerns separate from agent implementation."]]],
        ["Operate", "Management and runtime, each with a purpose", "Change the platform without blurring configuration and execution.", [["Management plane", "Define, validate and govern the desired system state."], ["Runtime plane", "Execute work through stable runtime contracts."], ["Workplace", "Expose useful workflows without exposing operational complexity."]]],
        ["Extend", "Connect without surrendering the architecture", "Use provider and extension contracts to evolve one capability at a time.", [["Provider independent", "Choose and change AI providers at the platform boundary."], ["AEP direction", "Move extensions out of process behind an explicit protocol."], ["Open composition", "Bring tools and services into focused integration points."]]]
      ],
      principles: ["Local-first operation", "Cloud services remain optional", "Small, explicit concepts", "Human and machine-facing surfaces", "Replaceable providers", "Contract-based integrations"]
    },
    architecture: {
      title: "Architecture — Agentstration",
      description: "Understand the management, runtime and workplace planes behind Agentstration’s open agent architecture.",
      hero: ["System architecture", "Structure for agents that have to operate in the real world.", "Agentstration separates how a system is defined, how work is experienced and how execution happens—while connecting each plane through explicit contracts."],
      planes: [["Management plane", "Define the desired system", "Create and govern agents, flows, providers, extensions and their relationships."], ["Experience plane", "Make capability usable", "The Workplace turns platform definitions into a focused, human-facing work environment."], ["Runtime plane", "Execute dependable work", "Resolve definitions, coordinate flows and run agents against providers, tools and extensions."]],
      flow: [["Users", "Start work and consume results"], ["Workplace", "Presents available tasks and progress"], ["Flows", "Coordinate the sequence of work"], ["Agents", "Apply instructions and capabilities"], ["Providers · Tools · Extensions", "Supply models and external capabilities"]],
      boundaries: [["Definitions over instances", "Management describes what should exist; runtime resolves what a task needs."], ["Contracts over internals", "Planes communicate through intentional interfaces rather than implementation knowledge."], ["Local over mandatory cloud", "The architecture can run locally and adopt remote services selectively."], ["Evolution over lock-in", "Providers and extensions can change without reshaping the whole platform."]]
    },
    extensions: {
      title: "Extensions — Agentstration",
      description: "Discover Agentstration’s evolving contract-based extension architecture and AEP direction.",
      hero: ["Open extension model", "Capabilities should connect cleanly—and evolve independently.", "Agentstration is designed for extensions that communicate through defined contracts, stay outside the core process and choose the technologies best suited to their job."],
      why: [["Process isolation", "An extension failure should not have to become a control-plane failure."], ["Independent lifecycle", "Ship, version and operate an integration without rebuilding the platform."], ["Technology freedom", "Implement capabilities in the ecosystem that fits them."], ["Discoverable contracts", "Make supported operations and compatibility explicit."]],
      aep: { title: "AEP is the direction—not a prematurely frozen standard.", body: "The Agentstration Extension Protocol is the emerging contract between the platform and external extensions. Its public shape is still evolving. The goal is stable interoperability: capability discovery, invocation, lifecycle signals and useful operational boundaries without arbitrary in-process plugin loading.", stages: [["Discover", "An extension describes its identity, version and capabilities."], ["Connect", "The platform establishes a contract-aware communication channel."], ["Invoke", "Runtime work calls a declared capability with structured input."], ["Observe", "Results, failures and health remain visible across the boundary."]] },
      compare: [["In-process plugin", "Shares memory and failure domain", "Often tied to one runtime", "Platform restart commonly required"], ["Contract extension", "Runs behind a process boundary", "Implementation technology is open", "Can evolve on its own lifecycle"]]
    }
  },
  fr: {
    home: {
      title: "Agentstration — Le plan de contrôle pour agents IA",
      description: "Définissez, orchestrez et opérez agents IA et workflows grâce à un plan de contrôle ouvert et local-first.",
      hero: { kicker: "L’infrastructure agentique, sous votre contrôle", title: "Transformez des agents isolés en <em>système opérable.</em>", body: "Agentstration est le plan de contrôle ouvert pour définir, orchestrer, gérer et exécuter agents et workflows — localement ou sur l’infrastructure de votre choix.", primary: "Explorer la plateforme", secondary: "Comprendre l’architecture", proof: ["Local-first", "Indépendant des fournisseurs", "Modèle d’extension ouvert"] },
      problem: { kicker: "Pourquoi Agentstration ?", title: "La vraie difficulté commence après le premier agent fonctionnel.", body: "Les prototypes démarrent vite. Les systèmes réels exigent une configuration stable, des workflows réutilisables, une exécution gouvernée, des espaces pour les utilisateurs et un modèle opérationnel clair. Agentstration fournit cette infrastructure manquante.", stats: [["01", "Définir une fois", "Rendez explicites l’identité, les capacités et la configuration de chaque agent."], ["02", "Composer sereinement", "Reliez les agents par des flows plutôt que par des scripts fragiles."], ["03", "Opérer clairement", "Séparez la gestion de la configuration et l’exécution runtime."]] },
      blocks: { kicker: "Briques fondamentales", title: "Un langage commun pour les systèmes agentiques.", body: "Chaque concept a un rôle précis afin que la plateforme reste compréhensible à mesure qu’elle grandit.", items: [["agent", "Agents", "Des unités dédiées avec instructions, capacités et paramètres de fournisseur définis."], ["flow", "Flows", "Une orchestration explicite qui transforme des étapes d’agents en travail reproductible."], ["provider", "Fournisseurs de modèles", "Une couche neutre pour choisir le bon modèle selon le besoin."], ["extension", "Extensions", "Des intégrations par contrat qui étendent la plateforme sans couplage fort."], ["workplace", "Workplace", "L’environnement où les personnes lancent et suivent leur travail."], ["control", "Management & runtime", "Des plans distincts pour la configuration et une exécution fiable."]] },
      local: { kicker: "Local-first par conception", title: "Votre infrastructure est le choix par défaut, pas une porte de sortie.", body: "Exécutez Agentstration au plus près de vos données et outils. Ajoutez des services cloud lorsqu’ils sont utiles, sans plateforme hébergée obligatoire.", points: [["Exécution locale", "Gardez plan de contrôle et workloads là où ils doivent être."], ["Cloud optionnel", "Connectez des capacités hébergées de façon sélective."], ["Choix des fournisseurs", "Associez modèles et workloads sans redessiner le système."], ["Architecture ouverte", "Construisez sur des contrats explicites et des composants remplaçables."]] },
      architecture: { kicker: "L’architecture en un regard", title: "Des frontières claires. Un système cohérent.", body: "Les utilisateurs travaillent dans un Workplace ciblé. Les flows coordonnent les agents. Les agents utilisent fournisseurs de modèles, outils et extensions. Le Management définit le système ; le Runtime l’exécute.", link: "Parcourir l’architecture" },
      extensions: { kicker: "Architecture d’extension", title: "Intégrer par contrat, sans couplage caché.", body: "Agentstration évolue vers AEP — Agentstration Extension Protocol — afin que les extensions vivent hors du processus principal et communiquent par un contrat défini. AEP évolue encore, mais la direction est claire : des frontières plus sûres, un choix technologique plus large et des cycles de vie indépendants.", link: "Découvrir le modèle d’extension" },
      preview: { kicker: "Surfaces produit", title: "Une plateforme, deux expériences ciblées.", body: "La Console permet aux opérateurs de façonner le système. Le Workplace offre à chacun un espace clair pour accomplir son travail.", cards: [["Console", "Configurer agents, flows, fournisseurs et ressources de la plateforme."], ["Workplace", "Lancer les tâches, suivre leur progression et consulter les résultats."]], placeholder: "Aperçu produit bientôt disponible" }
    },
    features: {
      title: "Fonctionnalités — Agentstration", description: "Découvrez les briques d’Agentstration pour définir, orchestrer et opérer des systèmes d’agents IA.", hero: ["Capacités de la plateforme", "L’infrastructure nécessaire pour transformer des agents en système.", "Des briques ciblées rendent la configuration explicite, l’orchestration réutilisable et l’exploitation compréhensible — d’une machine locale à un environnement distribué."],
      groups: [["Définir", "Modéliser le système avec intention", "Remplacez prompts épars et code de liaison par des concepts de plateforme durables.", [["Agents", "Formalisez objectif, instructions et capacités dans une ressource gérable."], ["Fournisseurs", "Séparez le choix du modèle du travail réalisé par l’agent."], ["Ressources", "Donnez à la configuration un emplacement et un cycle de vie clairs."]]], ["Orchestrer", "Transformer le comportement en flows reproductibles", "Composez le travail visiblement pour éviter que les résultats complexes dépendent d’un code opaque.", [["Flows", "Coordonnez les étapes des agents par des définitions explicites et réutilisables."], ["Entrées et résultats", "Créez un chemin cohérent de la demande au résultat inspectable."], ["Frontières", "Séparez orchestration et implémentation de l’agent."]]], ["Opérer", "Management et runtime, chacun avec son rôle", "Faites évoluer la plateforme sans confondre configuration et exécution.", [["Plan de management", "Définissez, validez et gouvernez l’état désiré du système."], ["Plan runtime", "Exécutez le travail via des contrats runtime stables."], ["Workplace", "Exposez les workflows utiles sans la complexité opérationnelle."]]], ["Étendre", "Connecter sans sacrifier l’architecture", "Évoluez une capacité à la fois grâce aux contrats de fournisseurs et d’extensions.", [["Indépendance fournisseur", "Choisissez et changez de fournisseur IA à la frontière de la plateforme."], ["Direction AEP", "Déportez les extensions hors processus derrière un protocole explicite."], ["Composition ouverte", "Intégrez outils et services à des points dédiés."]]]],
      principles: ["Exécution local-first", "Services cloud optionnels", "Concepts simples et explicites", "Surfaces humaines et machine", "Fournisseurs remplaçables", "Intégrations par contrat"]
    },
    architecture: {
      title: "Architecture — Agentstration", description: "Comprenez les plans de management, runtime et workplace de l’architecture ouverte d’Agentstration.", hero: ["Architecture système", "Une structure pour les agents qui opèrent dans le monde réel.", "Agentstration sépare la définition d’un système, l’expérience du travail et son exécution — tout en reliant chaque plan par des contrats explicites."],
      planes: [["Plan de management", "Définir le système désiré", "Créez et gouvernez agents, flows, fournisseurs, extensions et leurs relations."], ["Plan d’expérience", "Rendre les capacités utilisables", "Le Workplace transforme les définitions de plateforme en environnement de travail clair."], ["Plan runtime", "Exécuter un travail fiable", "Résolvez les définitions, coordonnez les flows et exécutez les agents avec fournisseurs, outils et extensions."]],
      flow: [["Utilisateurs", "Initient le travail et utilisent les résultats"], ["Workplace", "Présente tâches disponibles et progression"], ["Flows", "Coordonnent la séquence du travail"], ["Agents", "Appliquent instructions et capacités"], ["Fournisseurs · Outils · Extensions", "Apportent modèles et capacités externes"]],
      boundaries: [["Définitions avant instances", "Le Management décrit ce qui doit exister ; le Runtime résout les besoins d’une tâche."], ["Contrats avant internes", "Les plans communiquent par des interfaces intentionnelles, sans connaître leur implémentation."], ["Local avant cloud obligatoire", "L’architecture fonctionne localement et adopte les services distants au besoin."], ["Évolution avant verrouillage", "Fournisseurs et extensions changent sans transformer toute la plateforme."]]
    },
    extensions: {
      title: "Extensions — Agentstration", description: "Découvrez l’architecture d’extension par contrat d’Agentstration et la direction AEP.", hero: ["Modèle d’extension ouvert", "Les capacités doivent se connecter proprement — et évoluer indépendamment.", "Agentstration est conçu pour des extensions qui communiquent par contrats définis, restent hors du processus central et choisissent les technologies adaptées à leur rôle."],
      why: [["Isolation des processus", "La défaillance d’une extension ne devrait pas devenir celle du plan de contrôle."], ["Cycle de vie indépendant", "Livrez, versionnez et opérez une intégration sans reconstruire la plateforme."], ["Liberté technologique", "Implémentez les capacités dans l’écosystème qui leur convient."], ["Contrats découvrables", "Rendez explicites les opérations prises en charge et la compatibilité."]],
      aep: { title: "AEP est une direction, pas un standard figé trop tôt.", body: "L’Agentstration Extension Protocol est le contrat émergent entre la plateforme et les extensions externes. Sa forme publique évolue encore. L’objectif est une interopérabilité stable : découverte des capacités, invocation, signaux de cycle de vie et frontières opérationnelles utiles, sans chargement arbitraire de plugins dans le processus.", stages: [["Découvrir", "Une extension décrit identité, version et capacités."], ["Connecter", "La plateforme établit un canal conscient du contrat."], ["Invoquer", "Le runtime appelle une capacité déclarée avec une entrée structurée."], ["Observer", "Résultats, erreurs et santé restent visibles à travers la frontière."]] },
      compare: [["Plugin en processus", "Partage mémoire et domaine de défaillance", "Souvent lié à un runtime", "Redémarrage de la plateforme souvent requis"], ["Extension par contrat", "S’exécute derrière une frontière de processus", "Technologie d’implémentation libre", "Évolue selon son propre cycle de vie"]]
    }
  }
};

export function getContent(lang, page) {
  return { ...shared[lang], ...pages[lang][page] };
}
