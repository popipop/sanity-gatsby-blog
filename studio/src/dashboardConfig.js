export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed906bf94c83657e25b12e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8uohbwuv',
                  apiId: 'f8ae652c-18eb-4e7b-977b-a80323bd2020'
                },
                {
                  buildHookId: '5ed906c0f57bef626bb96558',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4dydq2g2',
                  apiId: '63129403-7fde-4bcc-9221-03013a65cef6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/popipop/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4dydq2g2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
