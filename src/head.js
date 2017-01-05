export default {
  title: {
    inner: 'It will be a pleasure'
  },
  // Meta tags
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { name: 'application-name', content: 'Name of my application' },
    { name: 'description', content: 'A description of the page', id: 'desc' },
    // ...
    // Twitter
    { name: 'twitter:title', content: 'Content Title' },
    // with shorthand
    { n: 'twitter:description', c: 'Content description less than 200 characters' },
    // ...
    // Google+ / Schema.org
    { itemprop: 'name', content: 'Content Title' },
    { itemprop: 'description', content: 'Content Title' },
    // ...
    // Facebook / Open Graph
    { property: 'fb:app_id', content: '123456789' },
    { property: 'og:title', content: 'Content Title' },
    // with shorthand
    { p: 'og:image', c: 'https://example.com/image.jpg' }
    // ...
  ],
  // link tags
  link: [
    { rel: 'author', href: 'Akash Shakdwipeea', undo: false }, // undo property - not to remove the element
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
  ]
}
