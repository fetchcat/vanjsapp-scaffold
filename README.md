# VanillaJS Single Page Application Scaffolding

Inspired by tools for creating single page applications like
[Create React App](https://reactjs.org/docs/create-a-new-react-app.html), it allows easy development
and bundling for small JavaScript projects.

## Project Details:

- Minify/Bundling CSS and JavaScript
- Transpiles new JS syntaxes (eg. ES2015) into cross-browser ready JavaScript
- [SASS](https://sass-lang.com/) CSS Preprocessing support
- [FontAwesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free) Free SVG Icons
- Code formatting with [Prettier](https://prettier.io/) support
  ([AirBnB Style](https://github.com/airbnb/javascript))

# Instructions

In webpack.config.js, add your own title, header, and meta description for the app.

```
...
  new HtmlWebpackPlugin({
    hash: true,
    title: 'Your app title here',
    header: 'Text for header here',
    metaDesc: 'Meta description here',
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
    scriptLoading: 'blocking',
  }),
...
```

## Available Scripts

> npm run build

Bundles and minifies your app for production.

> npm run serve

Launches WebPack Dev Server in development mode on port 9000.
