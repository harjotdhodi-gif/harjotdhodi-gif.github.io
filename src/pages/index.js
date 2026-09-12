import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const proof = [
  ['20+', 'years in technical communication'],
  ['10+', 'major release cycles'],
  ['12+', 'patch releases documented'],
  ['40+', 'eLearning deliverables'],
];

const expertise = [
  ['Documentation Engineering', 'Docs-as-Code, structured content, Git/Markdown workflows, CI/CD publishing, reusable information architecture, and governed review.'],
  ['Enterprise Technical Writing', 'Product documentation, online help, knowledge bases, release documentation, procedures, SOPs, runbooks, troubleshooting, and training content.'],
  ['AI-Ready Documentation', 'LLM-assisted review, RAG readiness, metadata, chunking, traceability, privacy checks, and human-in-the-loop approval workflows.'],
  ['Knowledge & Content Governance', 'Document control, naming standards, review cycles, audit readiness, localization, editorial QA, and cross-functional documentation operations.'],
];

const featured = [
  {
    tag: 'Current · Scriptorium Lab Services',
    title: 'AI-Augmented Documentation Products',
    text: 'Designed and released eight browser-based applications covering structured document generation, document review, content migration, XML validation, FAQ generation, deterministic prompting, and RAG-readiness auditing.',
    href: '/work/portfolio#scriptorium-lab-services-ai-augmented-documentation-products',
  },
  {
    tag: 'Healthcare IT · RCA',
    title: 'Documentation Governance & Operations',
    text: 'Established centralized documentation governance and produced policies, procedures, runbooks, FAQs, workflow diagrams, user guides, and training materials across healthcare IT functions.',
    href: '/work/portfolio#recovery-centers-of-america-documentation-governance',
  },
  {
    tag: 'SaaS · Comm100',
    title: 'Four-Platform Knowledge Base Ownership',
    text: 'Owned the end-to-end knowledge base for Live Chat, Chatbot, Ticketing & Messaging, and Knowledge Base products, including the complete Amy Chatbot online-help system.',
    href: '/work/portfolio#comm100-saas-knowledge-base-and-amy-chatbot-help',
  },
  {
    tag: 'Life Sciences · Oracle',
    title: 'Release Documentation & Online Help Modernization',
    text: 'Modernized a legacy product-documentation suite, restructured online help, supported one major and three minor releases, and authored release notes and known issues for 12+ patch releases.',
    href: '/work/portfolio#oracle-drug-safety-documentation-modernization',
  },
];

export default function Home() {
  return (
    <Layout title="Principal Technical Writer & Documentation Leader" description="Portfolio of Harjot Singh Dhodi — technical writing, documentation engineering, Docs-as-Code, knowledge management, and AI-ready documentation.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>Principal Technical Writer · Documentation Manager · Documentation Engineer</div>
              <h1>Harjot Singh Dhodi</h1>
              <p className={styles.lead}>I design documentation systems that turn complex product and operational knowledge into clear, governed, reusable content for people and AI systems.</p>
              <p className={styles.summary}>More than 20 years across enterprise software, SaaS, healthcare, life sciences, financial services, knowledge bases, online help, eLearning, release documentation, and documentation operations — now extended with Docs-as-Code and AI-assisted documentation workflows.</p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/work/portfolio">Explore selected work</Link>
                <Link className="button button--secondary button--lg" to="/work/experience">View career experience</Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelLabel}>Current focus</div>
              <h2>Documentation as an engineered knowledge system</h2>
              <ul>
                <li>Docs-as-Code and versioned publishing</li>
                <li>AI-assisted review with human approval</li>
                <li>RAG-ready content and knowledge preparation</li>
                <li>Structured migration and content governance</li>
                <li>Enterprise documentation strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.proofSection}>
          <div className={`container ${styles.proofGrid}`}>
            {proof.map(([number, label]) => (
              <div className={styles.proofItem} key={label}>
                <div className={styles.proofNumber}>{number}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Core expertise</div>
              <h2>Technical communication across the full documentation lifecycle</h2>
            </div>
            <div className={styles.cardGrid}>
              {expertise.map(([title, text]) => (
                <article className={styles.card} key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Selected portfolio</div>
              <h2>Work spanning documentation strategy, product content, knowledge systems, and AI workflows</h2>
            </div>
            <div className={styles.projectGrid}>
              {featured.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <div className={styles.projectTag}>{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <Link to={project.href}>View case study →</Link>
                </article>
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link className="button button--primary" to="/work/github-projects">Explore public GitHub projects</Link>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <div>
                <div className={styles.eyebrow}>Professional profile</div>
                <h2>Enterprise documentation depth. Modern documentation engineering.</h2>
                <p>Experience across India, the United States, the United Kingdom, Canada, Romania, and China, with cross-functional teams in product, engineering, QA, support, operations, healthcare IT, and training.</p>
              </div>
              <div className={styles.actions}>
                <a className="button button--secondary button--lg" href="https://www.linkedin.com/in/harjotdhodi">LinkedIn</a>
                <a className="button button--secondary button--lg" href="https://scriptoriumlab.com/">Scriptorium Lab Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
