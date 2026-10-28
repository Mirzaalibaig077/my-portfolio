// ─────────────────────────────────────────────────────────────────────────
// portfolio.js — the ONLY file you edit to update site content.
// All components read from this single exported object and contain no
// hardcoded personal text.
//
// Structure:
//   meta       -> name, title, contact info, socials, tagline, photo, resume
//   about      -> summary paragraph + interests list
//   experience -> timeline entries; each has projects[] with bullets[]
//   skills     -> grouped { category, items[] } rendered as chips (no bars)
//   projects   -> cards; githubUrl/liveUrl empty string => button is hidden
//   education  -> single card
//
// Asset paths are RELATIVE (no leading slash). Components prepend
// import.meta.env.BASE_URL automatically, so the same paths work on
// Vercel/Netlify (root) and GitHub Pages (subpath) deployments.
// ─────────────────────────────────────────────────────────────────────────

export const portfolio = {
  meta: {
    name: 'Muhammad Ali Baig',
    title: 'AI Software Engineer',
    location: 'Lahore, Punjab, Pakistan',
    email: 'mirzamali077@gmail.com',
    phone: '+92 315 0773634',
    showPhone: false, // set to true to show the phone number in Contact
    linkedin: 'https://linkedin.com/in/muhammad-ali-baig-ba0950257',
    github: 'https://github.com/Mirzaalibaig077',
    tagline:
      'Building production-ready web apps and AI-powered systems with Python, FastAPI and the MERN stack.',
    photo: 'profile.jpg',
    resume: 'Mirza_Ali_Resume.pdf', // TODO: replace public/Mirza_Ali_Resume.pdf with your real CV
  },

  about: {
    summary:
      'AI Software Engineer with hands-on experience building production-ready web applications and AI-powered systems. Skilled in Python, FastAPI and the MERN stack, with experience developing RAG-based applications and multi-agent AI workflows using LangChain and LangGraph. Strong in REST API design, relational and vector databases, clean architecture, containerization with Docker, and delivering scalable, reliable and maintainable software.',
    interests: [
      'Retrieval-Augmented Generation (RAG)',
      'Multi-Agent / Agentic Workflows',
      'Backend Architecture',
      'System Design',
    ],
  },

  experience: [
    {
      role: 'Associate Software Engineer',
      company: 'Datics AI',
      location: 'Lahore, Pakistan',
      dates: 'Sep 2025 - Present',
      projects: [
        {
          name: 'Guidely — an interactive demo and screen-recording platform',
          bullets: [
            'Engineered the backend for Guidely (a Supademo-style platform) using FastAPI, Next.js, PostgreSQL and SQLAlchemy, exposing RESTful APIs consumed by the web client.',
            'Designed a normalized relational database schema to model demos, steps and associated media, improving data integrity and query efficiency.',
            'Integrated LLM-based automatic step-narration generation in English and Arabic, enabling bilingual, auto-explained demo steps.',
            'Built a hybrid file-storage system with AWS S3 and local-storage fallback for reliable, fault-tolerant media handling.',
          ],
        },
        {
          name: 'AI-Talk — a RAG-based AI knowledge assistant',
          bullets: [
            'Developed a context-aware, RAG-based knowledge assistant with a FastAPI backend, PostgreSQL and a FAISS vector store for semantic retrieval over custom data sources.',
            'Integrated LangChain for LLM orchestration and built a complete React.js frontend for end-to-end interaction with the chatbot.',
            'Refined LLM prompt templates to reduce hallucinations and improve response accuracy.',
          ],
        },
      ],
    },
    {
      role: 'WordPress / PHP Developer Intern',
      company: 'Glixen Technologies',
      location: 'Lahore, Pakistan',
      dates: 'Dec 2024 - Jul 2025',
      projects: [
        {
          name: 'Exertio — a freelance marketplace WordPress theme',
          bullets: [
            'Customized WordPress themes and extended core functionality with JavaScript-based DOM manipulation to build dynamic listings, authentication flows, order processing and admin-management interfaces.',
            'Delivered clean, reusable code with secure data handling and fully responsive layouts across mobile, tablet and desktop.',
          ],
        },
      ],
    },
  ],

  skills: [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
    {
      category: 'Backend & APIs',
      items: ['FastAPI', 'Node.js', 'Express.js', 'NestJS', 'SQLAlchemy', 'REST API Design'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design'],
    },
    {
      category: 'AI & ML',
      items: [
        'LangChain',
        'LangGraph',
        'RAG',
        'LLM Integration',
        'Prompt Engineering',
        'Multi-Agent Workflows',
        'Vector Search',
        'Embeddings',
        'AI Chatbot Development',
      ],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'FAISS', 'pgvector'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (S3)', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD'],
    },
    {
      category: 'Concepts',
      items: [
        'System Design',
        'Database Design',
        'Clean Architecture',
        'Containerization',
        'Scalable Application Development',
      ],
    },
  ],

  projects: [
    {
      title: 'Guidely',
      description:
        'Interactive demo and screen-recording platform for creating auto-explained, bilingual product walkthroughs.',
      impact:
        'Built the FastAPI backend, normalized relational schema, LLM step-narration and a hybrid S3/local storage system.',
      tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'SQLAlchemy', 'AWS S3'],
      githubUrl: '', // TODO: add repo link
      liveUrl: '', // TODO: add live demo link
      image: 'project-guidely.svg', // TODO: replace with a real screenshot
    },
    {
      title: 'AI-Talk',
      description:
        'Context-aware RAG-based AI knowledge assistant with semantic retrieval over custom data sources.',
      impact:
        'Delivered the FastAPI + FAISS retrieval pipeline, LangChain orchestration and a React.js frontend; tuned prompts to reduce hallucinations.',
      tech: ['FastAPI', 'LangChain', 'FAISS', 'PostgreSQL', 'React.js'],
      githubUrl: '', // TODO: add repo link
      liveUrl: '', // TODO: add live demo link
      image: 'project-ai-talk.svg', // TODO: replace with a real screenshot
    },
    {
      title: 'Exertio',
      description:
        'Freelance marketplace WordPress theme with dynamic listings, authentication flows and order processing.',
      impact:
        'Extended WordPress core functionality with JavaScript DOM manipulation and shipped fully responsive, reusable UI.',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: '', // TODO: add repo link
      liveUrl: '', // TODO: add live demo link
      image: 'project-exertio.svg', // TODO: replace with a real screenshot
    },
  ],

  education: {
    degree: 'BS Information Technology',
    institution: 'Lahore Garrison University',
    location: 'DHA Phase 6, Lahore, Pakistan',
    dates: '2020 - 2024',
  },
}

export default portfolio
