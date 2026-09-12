/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  portfolioSidebar: [
    'experience',
    'portfolio',
    {
      type: 'category',
      label: 'Flagship Project Case Studies',
      collapsed: false,
      items: [
        'projects/scriptorium-ai-suite',
        'projects/docs-as-code',
        'projects/rca-governance',
        'projects/comm100-knowledge-base',
        'projects/oracle-drug-safety',
        'projects/oracle-elearning',
      ],
    },
    'github-projects',
    'capabilities',
  ],
};
module.exports = sidebars;
