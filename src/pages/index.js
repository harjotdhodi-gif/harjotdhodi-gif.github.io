import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const metrics = [
  ['20+', 'years in technical communication'],
  ['10+', 'major release cycles'],
  ['12+', 'patch releases documented'],
  ['40+', 'eLearning deliverables'],
  ['4', 'SaaS platforms in one knowledge base'],
  ['8', 'AI-augmented documentation applications'],
];

const projects = [
  {tag:'Founder · AI Documentation', title:'AI-Augmented Documentation Product Suite', text:'Eight browser-based applications for document generation, review, migration, XML validation, FAQ generation, deterministic prompting, and RAG-readiness auditing.', image:'/img/portfolio/ai-suite-map.svg', href:'/work/projects/scriptorium-ai-suite'},
  {tag:'Public GitHub · Documentation Engineering', title:'AI Docs-as-Code Workflow', text:'A governed Markdown-to-publishing workflow combining GitHub, MkDocs, Vale, AI-assisted review, human approval, and HTML/PDF/DOCX outputs.', image:'/img/portfolio/docs-as-code-architecture.svg', href:'/work/projects/docs-as-code'},
  {tag:'Healthcare IT · Governance', title:'RCA Documentation Governance', text:'Centralized ownership, naming, version control, approvals, review cycles, dashboards, and HIPAA-aligned content controls across healthcare IT.', image:'/img/portfolio/governance-flow.svg', href:'/work/projects/rca-governance'},
  {tag:'SaaS · Knowledge Management', title:'Comm100 Four-Platform Knowledge Base', text:'End-to-end knowledge-base ownership across Live Chat, Chatbot, Ticketing & Messaging, and Knowledge Base, including Amy Chatbot online help.', image:'/img/portfolio/knowledge-base-map.svg', href:'/work/projects/comm100-knowledge-base'},
  {tag:'Life Sciences · Enterprise Software', title:'Oracle Drug Safety Documentation Modernization', text:'Modernized a legacy suite, restructured online help, supported major/minor releases, and authored release notes and known issues for 12+ patches.', image:'/img/portfolio/oracle-release.svg', href:'/work/projects/oracle-drug-safety'},
  {tag:'Learning · Localization', title:'Oracle eLearning & Localization Program', text:'Delivered 40+ learning assets across English and Japanese titles and coordinated technical and linguistic review across international vendors.', image:'/img/portfolio/oracle-elearning.svg', href:'/work/projects/oracle-elearning'},
];

const capabilities = [
  ['Documentation Strategy', 'Information architecture, governance, content models, review cycles, and cross-functional documentation operations.'],
  ['Documentation Engineering', 'Git, GitHub, Markdown, MkDocs, static-site publishing, YAML, pull requests, and CI/CD workflows.'],
  ['Enterprise Technical Writing', 'Online help, knowledge bases, release notes, SOPs, runbooks, troubleshooting, installation guides, policies, and training.'],
  ['AI-Ready Documentation', 'LLM-assisted review, RAG readiness, metadata, chunking, traceability, privacy checks, and human-in-the-loop approval.'],
];

export default function Home() {
  return (
    <Layout title="Principal Technical Writer & Documentation Leader" description="Portfolio of Harjot Singh Dhodi: enterprise technical writing, documentation engineering, Docs-as-Code, knowledge management, and AI-ready documentation.">
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <img className={styles.brand} src="/img/portfolio/scriptorium-logo-full.svg" alt="Scriptorium Lab Services" />
            <div className={styles.eyebrow}>Principal Technical Writer · Documentation Manager · Documentation Engineer</div>
            <h1>Harjot Singh Dhodi</h1>
            <p className={styles.lead}>I turn complex product and operational knowledge into clear, governed, reusable documentation for people and AI systems.</p>
            <p className={styles.summary}>20+ years across enterprise software, SaaS, healthcare, life sciences, financial services, online help, knowledge bases, release documentation, eLearning, and documentation operations — now extended through Docs-as-Code and AI-assisted documentation workflows.</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/work/portfolio">View flagship projects</Link>
              <a className="button button--secondary button--lg" href="https://harjotdhodi-gif.github.io/files/Harjot-Singh-Dhodi-CV.pdf" download>Download CV</a>
            </div>
          </div>
          <aside className={styles.portraitCard} aria-label="Professional headshot of Harjot Singh Dhodi">
            <img className={styles.headshot} src="/img/portfolio/harjot-headshot.webp" alt="Harjot Singh Dhodi professional headshot" fetchPriority="high" />
          </aside>
        </div>
      </header>

      <main>
        <section className={styles.metricsSection}><div className={`container ${styles.metricsGrid}`}>{metrics.map(([n,l])=><div className={styles.metric} key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}><div className={styles.eyebrow}>Flagship portfolio</div><h2>Six projects that best show the range and depth of my work</h2><p>Each case study focuses on the problem, my ownership, the documentation system or deliverables, and the value created.</p></div>
            <div className={styles.projectGrid}>{projects.map((p,i)=><article className={styles.projectCard} key={p.title}><div className={styles.projectVisual}><img src={p.image} alt="" /></div><div className={styles.projectBody}><div className={styles.projectNumber}>0{i+1}</div><div className={styles.projectTag}>{p.tag}</div><h3>{p.title}</h3><p>{p.text}</p><Link to={p.href}>Open case study →</Link></div></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHead}><div className={styles.eyebrow}>Core capability</div><h2>Documentation is an operational system, not only a writing task.</h2></div>
            <div className={styles.capabilityGrid}>{capabilities.map(([title,text])=><div className={styles.capability} key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
          </div>
        </section>

        <section className={styles.archSection}><div className="container"><div className={styles.archGrid}><div><div className={styles.eyebrow}>Documentation engineering</div><h2>A governed Docs-as-Code model</h2><p>The public implementation demonstrates source control, deterministic style checks, AI-assisted contextual review, human approval, static-site generation, and multi-format publishing.</p><Link className="button button--primary" to="/work/projects/docs-as-code">See the workflow</Link></div><img src="/img/portfolio/docs-as-code-architecture.svg" alt="Docs-as-Code architecture showing Markdown, GitHub, Vale, AI review, human approval, MkDocs, and HTML PDF DOCX outputs" /></div></div></section>

        <section className={styles.timelineSection}><div className="container"><div className={styles.sectionHead}><div className={styles.eyebrow}>Career depth</div><h2>From enterprise release documentation to AI-ready knowledge systems</h2></div><div className={styles.timeline}><span>GlobalLogic / Mantas</span><span>Oracle</span><span>BirdEye</span><span>Keysight</span><span>Comm100</span><span>Recovery Centers of America</span><span>Scriptorium Lab Services</span></div><div className={styles.centerAction}><Link className="button button--secondary" to="/work/experience">View complete experience</Link></div></div></section>

        <section className={styles.ctaSection}><div className="container"><div className={styles.cta}><div><div className={styles.eyebrow}>Connect</div><h2>Enterprise documentation depth. Modern documentation engineering.</h2><p>Explore the public GitHub work, download the current CV, or connect through LinkedIn and Scriptorium Lab Services.</p></div><div className={styles.actions}><a className="button button--primary button--lg" href="https://harjotdhodi-gif.github.io/files/Harjot-Singh-Dhodi-CV.pdf" download>Download CV</a><a className="button button--secondary button--lg" href="https://www.linkedin.com/in/harjotdhodi">LinkedIn</a><a className="button button--secondary button--lg" href="https://github.com/harjotdhodi-gif">GitHub</a></div></div></div></section>
      </main>
    </Layout>
  );
}
