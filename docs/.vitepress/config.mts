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

  themeConfig: {
    logo: "/main/elnlogocube.png",
    appearance: 'light',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/1-getting-started/cables.md' },
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
        text: 'Getting Started',
        items: [
          { text: 'Cables', link: '/1-getting-started/cables.md' },
          { text: 'Signal Cables', link: '/1-getting-started/signal-cables.md' },
          { text: 'Transformers', link: '/1-getting-started/transformers.md' },
          { text: 'Switches & Relays', link: '/1-getting-started/switches-and-relays.md' },
          { text: 'Fuses', link: '/1-getting-started/fuses.md' },
          { text: 'Tips & Tricks', link: '/1-getting-started/tips-and-tricks.md' },
        ]
      },
      {
        text: 'Generators',
        items: [
          { text: '50V Wind Turbine', link: '' },
          { text: '50V Water Turbine', link: '' },
          { text: '50V - 200V Turbine', link: '' },
          { text: '50V - 200V Solar', link: '' },
        ]
      },
      {
        text: 'Machines',
        items: [
          { text: 'Auto Miner', link: '' },
          { text: 'Transportation Machine', link: '' },
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Flashlight', link: '' },
          { text: 'Ore Scanner', link: '' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Logic Gates', link: '' },
          { text: 'Signal Processor', link: '' },
          { text: 'Variable Transformers', link: '' },
          { text: 'Config', link: '' },
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