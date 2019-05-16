export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cddc8d60f0d5bbcd96db618',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zjjrd8gb',
                  apiId: '2dd20f50-4055-4ce7-add8-05239249fa4a'
                },
                {
                  buildHookId: '5cddc8d6b2be425693d50083',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ypjuyuqt',
                  apiId: '01c26673-1d58-4340-8afa-f54525ba2fab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bzerangue/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ypjuyuqt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
