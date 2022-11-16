module.exports = {
  siteMetadata: {
    siteUrl: `https://www.kedoo.com`,
    title: `Kedoo`,
    description: ``,
    i18nLocales: {
      locales: ['en', 'ru'],
      defaultLocale: 'en'
    },
    copyrightTitle: `Kedoo Entertainment DMCC`,
    pageLinks: [
      { href: '/', title: 'home.title' },
      { href: '/news-and-sports/', title: 'news.title' },
      { href: '/shows/', title: 'shows.title' },
      { href: '/kids/', title: 'kids.title' },
      { href: '/media/', title: 'media.title' },
      // { href: '/our-prices/', title: 'prices.title' }
    ],
    footerLinks: [
      { href: '/help/privacy/', title: 'privacy.title' },
      { href: '/help/cookies/', title: 'cookies.title' }
    ],
    socialContacts: [
      { href: '/media/', title: 'Whatsapp', icon: 'whatsapp' },
      { href: '/kids/', title: 'Telegram', icon: 'telegram' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `files`,
    //     path: `${__dirname}/src/files`
    //   }
    // },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => `${node.relativeDirectory}Json`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kedoo`,
        short_name: `kedoo`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `src/images/kedoo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6
        }
      }
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['**/our-prices/**'] },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {}
    }
  ]
};
