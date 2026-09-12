---
title: AI Docs-as-Code Workflow
sidebar_label: AI Docs-as-Code Workflow
---

# AI Docs-as-Code Workflow

![Governed Docs-as-Code architecture](/img/portfolio/docs-as-code-architecture.svg)

**Type:** Public GitHub portfolio project  
**Repository:** [AI-Docs-as-Code-MKDocs](https://github.com/harjotdhodi-gif/AI-Docs-as-Code-MKDocs)  
**Published documentation:** [Live MkDocs site](https://harjotdhodi-gif.github.io/AI-Docs-as-Code-MKDocs/)

## Challenge

Traditional documentation often separates writing, review, publishing, and downloadable outputs into different manual workflows. This project demonstrates how those activities can be governed through the same version-controlled pipeline.

## Architecture

1. Authors maintain documentation in **Markdown**.
2. Changes are managed in **GitHub** through version control and pull requests.
3. **Vale** performs deterministic style and terminology checks.
4. An **AI documentation review** adds contextual, consistency, security, and risk findings.
5. **Human review and approval** remain part of the publishing gate.
6. **MkDocs Material** builds the documentation site.
7. GitHub Actions publishes **HTML** and produces **PDF and DOCX** outputs.

## My contribution

- Designed the end-to-end workflow
- Configured Markdown/MkDocs publishing
- Implemented GitHub Actions automation
- Integrated Vale style review
- Added AI-assisted review controls
- Kept AI findings non-authoritative and human-verifiable
- Implemented multi-format publishing

## What it demonstrates

The project shows documentation as a **software-like, traceable engineering workflow**: source-controlled, reviewable, testable, publishable, and reusable.

[Open the GitHub repository](https://github.com/harjotdhodi-gif/AI-Docs-as-Code-MKDocs) · [Back to flagship projects](../portfolio)
