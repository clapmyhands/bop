import { resolve as _resolve } from 'path';

export const pathPrefix = `/bop`;
export const siteMetadata = {
  title: `Bottom of Pandora`,
  author: "ClapMyHands",
  description: "BoP",
};
export const plugins = [
  {
    resolve: `gatsby-theme-kb`,
    options: {
      rootNote: "overview.md",
      contentPath: `${__dirname}/../docs/`,
      ignore: [
        "**/_layouts/**",
        "**/.git/**",
        "**/.github/**",
        "**/.vscode/**",
        "**/.cache/**",
        "**/.foam/**",
        "**/README.md",
      ],
      wikiLinkLabelTemplate: '[{{title}}]',
      // this is an option for extending `gatsby-plugin-mdx` options inside `gatsby-theme-kb`,
      // so you can have your relative referenced files served, e.g. '../assets/img.png'.
      getPluginMdx(defaultPluginMdx) {
        defaultPluginMdx.options.gatsbyRemarkPlugins.push({
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            ignoreFileExtensions: ['md', 'mdx'],
          },
        })
        
        defaultPluginMdx.options.gatsbyRemarkPlugins.push({
          resolve: 'gatsby-remark-prismjs',
          options: {
            noInlineHighlight: true,
          },
        })

        // add math support
        defaultPluginMdx.options.remarkPlugins.push(require('remark-math'))
        if (!defaultPluginMdx.options.rehypePlugins) defaultPluginMdx.options.rehypePlugins = []
        defaultPluginMdx.options.rehypePlugins.push(require('rehype-katex'))
        return defaultPluginMdx
      },
    },
  },
  {
    // this plugin makes sure your static files will be served by gatsby,
    // if you have multiple directories, copy this plugin section and specify other directory
    // check https://github.com/csath/gatsby-plugin-copy-files-enhanced to find docs for this plugin
    resolve: 'gatsby-plugin-copy-files-enhanced',
    options: {
      source: _resolve(__dirname, `../assets`),
      destination: '/assets',
      purge: false,
    },
  },
];