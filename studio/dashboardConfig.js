export default {
  widgets: [
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
                  buildHookId: '6178d57aaa536e72ff510960',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-sample-studio',
                  apiId: 'e9e6c0fe-4fb0-4e1c-af86-03def7111f98'
                },
                {
                  buildHookId: '6178d57aaa536e6c56510abe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-sample',
                  apiId: '6a5a938d-a51e-4e21-b429-44209308dd24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meezyart/sanity-kitchen-sink-Sample',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-sample.netlify.app', category: 'apps'}
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
