import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electrical Age Wiki",
  description: "A Wiki for the Minecraft Mod Electrical Age (ELN)",
  base: "/eln-wiki/",
  // Switch for light and dark theme, currently enabled
  appearance:true,
  head: [
    ["link", { rel: "icon", href: "/eln-wiki/main/elnlogocube.png" }]
  ],
  // EXAMPLE
  // TODO: Add more languages
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    fr: {
      label: 'German',
      lang: 'de', // optional, will be added  as `lang` attribute on `html` tag
      link: '/de/' // default /de/ -- shows on navbar translations menu, can be external
    }
  },

  themeConfig: {
    logo: "/main/elnlogocube.png",
    appearance: 'light',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/1-beginner/cables.md' },
      { text: 'Team', link: '/team.md' },
      {
        text: "Download",
        items: [
          { text: "Modrinth", link: "https://modrinth.com/mod/electrical-age-jrddunbr-edition" },
          { text: "Curseforge", link: "https://www.curseforge.com/minecraft/mc-mods/electrical-age-eln" },
          { text: "Github", link: "https://github.com/age-series/ElectricalAge/releases" }
        ],
      },
    ],

    sidebar: [
      {
        text: 'Beginner',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Cables', link: '/1-beginner/cables.md' },
          { text: 'Signaling', link: '/1-beginner/signaling.md' },
          { text: 'Transformers', link: '/1-beginner/transformers.md' },
          { text: 'Switches & Relays', link: '/1-beginner/switches-and-relays.md' },
          { text: 'Protection', link: '/1-beginner/protection.md' },
          { text: 'Tips & Tricks', link: '/1-beginner/tips-and-tricks.md' },
          { text: 'Common Issues', link: '/1-beginner/common-issues.md' },
        ]
      },
      {
        text: 'Generators',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '50V Wind Turbine', link: '' },
          { text: '50V Water Turbine', link: '' },
          { text: '50V - 200V Turbine', link: '' },
          { text: '50V - 200V Solar', link: '' },
        ]
      },
      {
        text: 'Machines',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Auto Miner', link: '' },
          { text: 'Transportation Machine', link: '' },
        ]
      },
      {
        text: 'Tools',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Flashlight', link: '' },
          { text: 'Ore Scanner', link: '' },
        ]
      },
      {
        text: 'Advanced',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Logic Gates', link: '' },
          { text: 'Signal Processor', link: '' },
          { text: 'Variable Transformers', link: '' },
          { text: 'Computer Probe', link: '/5-advanced/computer-probe.md' },
          { text: 'Config', link: '/5-advanced/config.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/age-series/ElectricalAge' },
      { icon: 'discord', link: 'https://discord.gg/C6GV8cuVg3' }
    ],

    search: {
      provider: "local"
    },
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Sidebar Menu'
  }
})