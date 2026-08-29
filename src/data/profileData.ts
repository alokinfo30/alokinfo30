import { Project, SkillCategory, SocialLink } from '../types';

export const PROFILE_INFO = {
  name: 'Alok Srivastava',
  username: 'alokinfo30',
  title: 'Senior Systems Architect & AI Lead',
  headline: 'Full-Stack Lead | Building Agentic AI Workflows, Node.js Backends & Distributed Systems',
  email: 'alokinfo30@gmail.com',
  githubUrl: 'https://github.com/alokinfo30',
  linkedinUrl: 'https://www.linkedin.com/in/alok-srivastava-77b9b460/',
  location: 'Global / Remote',
  about: "I'm a Senior Systems Architect & AI Lead focused on building scalable software systems, modern full-stack applications, and AI-powered engineering workflows.",
  focusAreas: [
    { label: 'Generative AI & Agentic AI', icon: 'Bot' },
    { label: 'Large Language Models & RAG', icon: 'Brain' },
    { label: 'Distributed Systems & Microservices', icon: 'Network' },
    { label: 'Node.js Backend Architecture', icon: 'Server' },
    { label: 'React.js / Next.js Applications', icon: 'Layout' },
    { label: 'AWS & Azure Cloud Platforms', icon: 'Cloud' },
    { label: 'Event-Driven Architectures', icon: 'Zap' },
    { label: 'Authentication, SSO & API Security', icon: 'ShieldCheck' },
    { label: 'Software Engineering Mentorship', icon: 'GraduationCap' },
  ],
  philosophy: {
    motto: 'CODE → LEARN → BUILD → REPEAT',
    bullets: [
      'Build systems that scale.',
      'Build AI that matters.',
      'Keep learning. Keep growing.'
    ]
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/alokinfo30',
    icon: 'Github',
    badgeUrl: 'https://img.shields.io/badge/GitHub-alokinfo30-181717?style=for-the-badge&logo=github',
    label: 'alokinfo30'
  },
  {
    name: 'Email',
    url: 'mailto:alokinfo30@gmail.com',
    icon: 'Mail',
    badgeUrl: 'https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white',
    label: 'alokinfo30@gmail.com'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alok-srivastava-77b9b460/',
    icon: 'Linkedin',
    badgeUrl: 'https://img.shields.io/badge/LinkedIn-Alok%20Srivastava-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white',
    label: 'Alok Srivastava'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend Engineering',
    iconName: 'Server',
    description: 'High-throughput microservices, REST/GraphQL APIs, and resilient server runtimes.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI']
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    iconName: 'Layout',
    description: 'Modern reactive web interfaces, micro-frontends, and optimized UI architectures.',
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit']
  },
  {
    id: 'ai-llm',
    name: 'AI / LLM & Agentic Workflows',
    iconName: 'Brain',
    description: 'Autonomous AI agents, retrieval-augmented generation, and LLM integrations.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'LangChain', 'CrewAI', 'LangGraph', 'RAG', 'Vector Databases']
  },
  {
    id: 'architecture',
    name: 'APIs & System Architecture',
    iconName: 'Network',
    description: 'Enterprise event-driven patterns, scalable gateway orchestration, and domain-driven design.',
    skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Event-Driven Architecture', 'API Gateways']
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational, document, key-value, and distributed multi-model data storage solutions.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cosmos DB', 'DynamoDB', 'Redis']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Cloud-native infrastructure provisioning, containerization, and continuous delivery pipelines.',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions']
  },
  {
    id: 'testing-quality',
    name: 'Testing & Engineering Standards',
    iconName: 'CheckCircle2',
    description: 'Robust automated test suites, maintainable code architectures, and technical documentation.',
    skills: ['Jest', 'Test Automation', 'Git', 'System Architecture Design', 'Technical Documentation', 'Software Engineering Mentorship']
  },
  {
    id: 'security-realtime',
    name: 'Security & Real-Time Telemetry',
    iconName: 'Shield',
    description: 'Enterprise identity security, low-latency duplex streaming, and observability stacks.',
    skills: ['SSO', 'OAuth 2.0', 'JWT', 'WebSockets', 'SSE', 'Telemetry', 'Prometheus', 'Grafana']
  },
  {
    id: 'practices',
    name: 'Development Practices',
    iconName: 'Users',
    description: 'Agile execution, design systems component libraries, and modular frontend architectures.',
    skills: ['Agile', 'Scrum', 'Sprint Planning', 'Micro-Frontends', 'Storybook']
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'compops',
    name: 'compops',
    repoUrl: 'https://github.com/alokinfo30/compops',
    stack: ['Python', 'Security', 'AI', 'Vulnerability Reachability', 'Automated Remediation'],
    description: 'Software supply-chain security platform focused on vulnerability reachability and automated remediation.',
    highlights: [
      'AST-level dependency reachability analysis',
      'Automated pull request patch generation & CI integration',
      'LLM-assisted context-aware vulnerability prioritization'
    ],
    featured: true
  },
  {
    id: 'gamebot-ai',
    name: 'Gamebot.ai',
    repoUrl: 'https://github.com/alokinfo30/Gamebot.ai',
    stack: ['TypeScript', 'AI', 'Gemini API', 'WebSockets', 'Multiplayer ELO'],
    description: 'Cross-platform game with multiplayer, ELO rating engine, adaptive AI bots and Gemini-powered game analysis.',
    highlights: [
      'Real-time WebSocket multiplayer matchmaking with dynamic ELO calculation',
      'Adaptive AI opponent difficulty scaling',
      'Post-game strategic commentary generated via Gemini model'
    ],
    featured: true
  },
  {
    id: 'omniserve-ai',
    name: 'OmniServe-AI',
    repoUrl: 'https://github.com/alokinfo30/OmniServe-AI',
    stack: ['TypeScript', 'AI', 'SaaS', 'Multi-tenant', 'Field Service'],
    description: 'Multi-tenant SaaS platform for field-service management, automated inventory, CRM, and AI worker dispatch.',
    highlights: [
      'Intelligent dispatch routing minimizing travel latency and operational cost',
      'Multi-tenant isolated data partitions with role-based access control',
      'Predictive inventory restock triggers with supplier integration'
    ],
    featured: true
  },
  {
    id: 'studyos-ai',
    name: 'StudyOS-AI',
    repoUrl: 'https://github.com/alokinfo30/StudyOS-AI---Adaptive-Multilingual-Exam-Coach',
    stack: ['TypeScript', 'AI', 'Spaced Repetition', 'Multilingual', 'Exam Prep'],
    description: 'Adaptive multilingual learning platform with spaced repetition algorithms and AI-powered exam preparation coaching.',
    highlights: [
      'FSRS / SuperMemo-based memory curve scheduling',
      'Multilingual question translation and cultural contextualization',
      'Socratic dialogue tutor for interactive conceptual debugging'
    ],
    featured: true
  }
];
