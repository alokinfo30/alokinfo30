<style>
  .profile-shell {
    max-width: 1120px;
    margin: 24px auto;
    padding: 22px;
    border-radius: 26px;
    background: linear-gradient(135deg, #0f172a 0%, #111827 48%, #1f2937 100%);
    box-shadow: 0 18px 40px rgba(0,0,0,0.25);
    animation: fadeUp 1s ease-out;
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
  }

  .banner {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.2);
    display: block;
  }

  .lanyard {
    width: 360px;
    max-width: 90%;
    display: block;
    margin-top: 10px;
    animation: float 4s ease-in-out infinite;
    filter: drop-shadow(0 12px 18px rgba(59,130,246,0.18));
  }

  .profile-name {
    margin: 0;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #f8fafc;
  }

  .profile-title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #c4b5fd;
  }

  .meta-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8px;
  }

  .pill {
    display: inline-block;
    padding: 9px 14px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    background: rgba(255,255,255,0.05);
    color: #e2e8f0;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  .social-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8px;
  }

  .card {
    margin-top: 26px;
    border-radius: 18px;
    background: rgba(15, 23, 42, 0.78);
    border: 1px solid rgba(148, 163, 184, 0.18);
    padding: 18px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
  }

  .card img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  .section-title {
    margin-top: 20px;
    margin-bottom: 8px;
    color: #f8fafc;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 0.3px;
  }

  .text-block {
    margin: 0;
    font-size: 16px;
    line-height: 1.7;
    color: #e2e8f0;
  }

  .text-block strong {
    color: #f8fafc;
  }

  .tag-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
  }

  .tag {
    display: inline-block;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(96,165,250,0.12);
    color: #bfdbfe;
    border: 1px solid rgba(96,165,250,0.25);
    font-size: 12px;
    font-weight: 700;
  }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
    margin-top: 18px;
  }

  .stack-item {
    padding: 14px 16px;
    border-radius: 14px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.18);
    color: #e2e8f0;
    font-weight: 700;
  }

  .stack-item small {
    display: block;
    color: #cbd5e1;
    margin-top: 6px;
    font-weight: 500;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 640px) {
    .profile-shell {
      padding: 14px;
      border-radius: 18px;
    }

    .profile-name {
      font-size: 30px;
    }

    .profile-title {
      font-size: 15px;
    }
  }
</style>

<div class="profile-shell">

  <div class="hero">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/images/banner.png?v=1" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/images/banner-light.png?v=1" />
      <img class="banner" src="./assets/images/banner.png?v=1" alt="Alok Srivastava banner" />
    </picture>

    <img class="lanyard" src="./assets/images/lanyard.png?v=1" alt="Alok Srivastava digital badge" />

    <h1 class="profile-name">Alok Srivastava</h1>
    <p class="profile-title">Full-Stack Lead | Building Agentic AI Workflows</p>

    <div class="meta-row">
      <span class="pill">AI Systems</span>
      <span class="pill">Node.js</span>
      <span class="pill">Distributed Systems</span>
      <span class="pill">Cloud Architecture</span>
      <span class="pill">Platform Design</span>
    </div>

    <div class="social-row">
      <a href="https://github.com/alokinfo30">
        <img src="https://img.shields.io/badge/GitHub-alokinfo30-181717?style=for-the-badge&logo=github" alt="GitHub" />
      </a>
      <a href="mailto:alokinfo30@gmail.com">
        <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/alok-srivastava-77b9b460/">
        <img src="https://img.shields.io/badge/LinkedIn-Alok%20Srivastava-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
    </div>

    <img src="https://komarev.com/ghpvc/?username=alokinfo30&label=PROFILE+VIEWS&color=ff4db8&style=for-the-badge" alt="Profile views" />
  </div>

  <div class="card">
    <h2 class="section-title">About Me</h2>
    <p class="text-block">
      I'm <strong>Alok Srivastava</strong>, a <strong>Senior Systems Architect &amp; AI Lead</strong> focused on building scalable software systems, modern full-stack applications, and AI-powered engineering workflows.
    </p>
    <p class="text-block">
      I work across the intersection of <strong>software architecture</strong>, <strong>cloud engineering</strong>, <strong>full-stack development</strong>, and <strong>AI-driven product design</strong>.
    </p>
    <div class="tag-list">
      <span class="tag">Generative AI</span>
      <span class="tag">Agentic AI</span>
      <span class="tag">LLMs</span>
      <span class="tag">RAG</span>
      <span class="tag">Distributed Systems</span>
      <span class="tag">Node.js</span>
      <span class="tag">React.js</span>
      <span class="tag">Cloud</span>
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Core Technology Stack</h2>
    <div class="stack-grid">
      <div class="stack-item">Backend<small>Node.js · Express.js · NestJS · Python · FastAPI</small></div>
      <div class="stack-item">Frontend<small>JavaScript · TypeScript · React.js · Next.js · Redux Toolkit</small></div>
      <div class="stack-item">AI / LLM<small>Generative AI · Prompt Engineering · LangChain · CrewAI · LangGraph</small></div>
      <div class="stack-item">Architecture<small>REST APIs · GraphQL · Microservices · Event-Driven Design</small></div>
      <div class="stack-item">Databases<small>PostgreSQL · MySQL · MongoDB · Cosmos DB · DynamoDB · Redis</small></div>
      <div class="stack-item">Cloud &amp; DevOps<small>AWS · Azure · Docker · Kubernetes · CI/CD · GitHub Actions</small></div>
      <div class="stack-item">Testing<small>Jest · Test Automation · Git · System Architecture</small></div>
      <div class="stack-item">Security &amp; Real-Time<small>SSO · OAuth 2.0 · JWT · WebSockets · SSE · Prometheus · Grafana</small></div>
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Featured Projects</h2>
    <div class="stack-grid">
      <div class="stack-item"><a href="https://github.com/alokinfo30/compops">compops</a><small>Python / Security / AI</small></div>
      <div class="stack-item"><a href="https://github.com/alokinfo30/Gamebot.ai">Gamebot.ai</a><small>TypeScript / AI</small></div>
      <div class="stack-item"><a href="https://github.com/alokinfo30/OmniServe-AI">OmniServe-AI</a><small>TypeScript / AI</small></div>
      <div class="stack-item"><a href="https://github.com/alokinfo30/StudyOS-AI---Adaptive-Multilingual-Exam-Coach">StudyOS-AI</a><small>TypeScript / AI</small></div>
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">GitHub Stats</h2>
    <div align="center">
      <img src="./assets/images/stats.png?v=1" alt="GitHub statistics" width="520" />
      <br /><br />
      <img src="./assets/images/langs.png?v=1" alt="Most used programming languages" width="520" />
      <br /><br />
      <img src="./assets/images/trophies.png?v=1" alt="GitHub trophies" width="700" />
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Contribution Activity</h2>
    <div align="center">
      <img src="https://github-readme-activity-graph.vercel.app/graph?username=alokinfo30&bg_color=0d1117&color=ff4db8&line=a855f7&point=ffffff&area=true&hide_border=true" alt="Contribution activity graph" width="95%" />
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Contribution Snake</h2>
    <div align="center">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake-dark.svg?v=1" />
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake.svg?v=1" />
        <img src="https://raw.githubusercontent.com/alokinfo30/alokinfo30/output/github-snake.svg?v=1" alt="GitHub contribution snake animation" width="95%" />
      </picture>
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Engineering Philosophy</h2>
    <div align="center">
      <img src="./sparkle.svg?v=1" alt="Sparkle animation" width="500" />
      <br /><br />
      <p class="text-block"><strong>Build systems that scale.</strong></p>
      <p class="text-block"><strong>Build AI that matters.</strong></p>
      <p class="text-block"><strong>Keep learning. Keep growing.</strong></p>
    </div>
  </div>

  <div class="card">
    <h2 class="section-title">Let’s Connect</h2>
    <div align="center">
      <p class="text-block">If you're working on <strong>AI agents</strong>, <strong>distributed systems</strong>, <strong>Node.js platforms</strong>, <strong>cloud architecture</strong>, or <strong>modern full-stack applications</strong>, let's connect.</p>
      <div class="social-row" style="margin-top: 18px;">
        <a href="mailto:alokinfo30@gmail.com">
          <img src="https://img.shields.io/badge/Email-alokinfo30%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
        </a>
        <a href="https://github.com/alokinfo30">
          <img src="https://img.shields.io/badge/GitHub-alokinfo30-181717?style=flat-square&logo=github" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/alok-srivastava-77b9b460/">
          <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
      </div>
      <br />
      <img src="./sparkle.svg?v=1" alt="Sparkles" width="180" />
      <p class="text-block"><strong>Thanks for visiting!</strong></p>
      <p class="text-block"><strong>Keep Coding. Keep Growing.</strong></p>
    </div>
  </div>

</div>

<br/><br/>

<img src="./sparkle.svg?v=1" alt="Sparkles" width="180"/>

### ⭐ Thanks for visiting!

**Keep Coding. Keep Growing.**

</div>
