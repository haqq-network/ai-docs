// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function defineSection(section: string, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id: section,
      path: 'docs',
      routeBasePath: 'docs',
      sidebarPath: './sidebars.ts',
      breadcrumbs: true,
      editUrl: 'https://github.com/haqq-network/ai-docs/tree/master/',
      include: ['**/*.{md,mdx,pdf}'],
      ...options,
    },
    
  ];
}

const SECTIONS = [
  defineSection('sources'),
];

const config: Config = {
  title: 'HAQQ Documentation',
  tagline: 'HAQQ is a scalable and interoperable Ethereum, built on Proof-of-Stake with fast-finality.',
  url: 'https://docs.haqq.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: 'HAQQ Network',
      short_name: 'HAQQ',
      denom: 'ISLM',
      ticker: 'ISLM',
      binary: 'haqqd',
      testnet_denom: 'ISLM',
      testnet_ticker: 'ISLM',
      rpc_url: 'https://rpc.eth.haqq.network',
      rpc_url_testnet: 'https://rpc.eth.testedge2.haqq.network',
      rpc_url_local: 'http://localhost:8545/',
      chain_id: '11235',
      testnet_chain_id: '54211',
      latest_version: 'v1.8.2',
      mainnet_version: 'v1.8.2',
      testnet_version: 'v1.8.2',
      block_explorer_url: 'https://explorer.haqq.network',
      eth_name: 'Main Ethereum Network',
      unbonding_period: '21 days',
      active_set: '150',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'datetime',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ...SECTIONS,
    
    /*[
      'posthog-docusaurus',
      {
        apiKey: 'phc_S8yvZufvPSBgyfXwjP2nIzndGES4HV8i0yOxMecUkLE',
        appUrl: 'https://eu.posthog.com', 
        enableInDevelopment: false,
      },
    ],*/
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    metadata: [{

      name: 'content-type',
      content: 'application/pdf'
    },
      {
        name: 'keywords',
        content: 'HAQQ, blockchain, ethereum, proof of stake, validator, documentation, islamic blockchain',
      },
      {
        name: 'description',
        content: 'HAQQ is a scalable and interoperable Ethereum blockchain, built on Proof-of-Stake with fast-finality. Explore our comprehensive documentation.',
      },
      {
        property: 'og:title',
        content: 'HAQQ Network Documentation - Ethereum Compatible Blockchain Platform',
      },
      {
        property: 'og:description',
        content: 'HAQQ is a scalable and interoperable Ethereum blockchain, built on Proof-of-Stake with fast-finality. Explore our comprehensive documentation.',
      },
      {
        name: 'sitemap',
        content: '/sitemap.xml',
      },
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'HAQQ Network',
        src: 'img/haqq-logo.svg',
        srcDark: 'img/haqq-logo-white.svg',
      },
      items: [
        {
          href: '/sources',
          position: 'left',
          label: 'Learn',
        },
        
        {
          href: 'https://github.com/haqq-network/ai-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              href: '/sources',
              label: 'Sources',
            },
            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'HAQQ Network Discord',
              href: 'https://discord.gg/CDtXuQG3Vd',
            },
            {
              label: 'Islamic Coin Discord',
              href: 'https://discord.gg/islamiccoin',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/The_HaqqNetwork',
            },
            {
              href: 'https://github.com/haqq-network/haqq',
              label: 'GitHub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HAQQ Network`,
    },
    prism: {

      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // theme: lightCodeTheme,
      // darkTheme: darkCodeTheme,
      /*additionalLanguages: [
        'powershell',
        'shell-session', 
        'bash',
        'solidity',
        'typescript',
        'toml',
        'yaml',
        'json',
      ],*/
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
