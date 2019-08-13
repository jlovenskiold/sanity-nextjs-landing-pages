export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d528fec72c68adc9a186d1f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4ms57dsu',
                  apiId: 'efc3f341-4246-4d31-ae94-f47ba827b95e'
                },
                {
                  buildHookId: '5d528fec69c84e12f7d6a4db',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hhf9zetj',
                  apiId: '6a9afb49-92fd-4158-82a3-f54e23984ef4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlovenskiold/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hhf9zetj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
