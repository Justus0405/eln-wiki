import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electrical Age Wiki",
  description: "A Wiki for the Minecraft Mod Electrical Age (ELN)",
  base: "/eln-wiki/",
  head: [
    ["link", { rel: "icon", href: "/eln-wiki/elnlogocube.png" }]
  ],

  themeConfig: {
    logo: "/elnlogocube.png",
    appearance: 'light',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/1-getting-started/cables.md' },
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
          { text: 'Transformers', link: '/1-getting-started/transformers.md' }
        ]
      }
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