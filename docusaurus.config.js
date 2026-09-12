// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harjot Singh Dhodi',
  tagline: 'Principal Technical Writer · Documentation Leader · Documentation Engineer',
  url: 'https://harjotdhodi-gif.github.io',
  baseUrl: '/',
  organizationName: 'harjotdhodi-gif',
  projectName: 'harjotdhodi-gif.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'work',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'Portfolio of Harjot Singh Dhodi: principal technical writer, documentation leader, documentation engineer, Docs-as-Code practitioner, and AI-ready documentation specialist.',
      },
    ],
    navbar: {
      title: 'Harjot Singh Dhodi',
      hideOnScroll: false,
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/work/experience', label: 'Experience', position: 'left'},
        {to: '/work/portfolio', label: 'Portfolio', position: 'left'},
        {to: '/work/github-projects', label: 'GitHub Projects', position: 'left'},
        {to: '/work/capabilities', label: 'Capabilities', position: 'left'},
        {
          href: 'https://scriptoriumlab.com/',
          label: 'Scriptorium Lab Services',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/harjotdhodi',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/harjotdhodi-gif',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'Experience', to: '/work/experience'},
            {label: 'Selected Work', to: '/work/portfolio'},
            {label: 'GitHub Projects', to: '/work/github-projects'},
            {label: 'Capabilities', to: '/work/capabilities'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/harjotdhodi'},
            {label: 'GitHub', href: 'https://github.com/harjotdhodi-gif'},
            {label: 'Scriptorium Lab Services', href: 'https://scriptoriumlab.com/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Harjot Singh Dhodi. Built with Docusaurus and GitHub Pages.`,
    },
  },
};

module.exports = config;
