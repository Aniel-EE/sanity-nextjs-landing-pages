export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '63112d522cca0100aeb4d5a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c1tdcd4m',
                  apiId: '96226070-41b8-4c29-95e1-9f93821d2e7c'
                },
                {
                  buildHookId: '63112d53177d0500bf826d5b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-km1g7xyf',
                  apiId: '38ccbd24-a1ca-4319-80f6-af6b965e562e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aniel-EE/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-km1g7xyf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
