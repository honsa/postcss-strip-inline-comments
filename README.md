# PostCSS strip inline comments [![Build Status][ci-img]][ci]

<img align="right" width="95" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

A plugin to remove inline CSS comments from compilation.

```css
/* This comment will remain */
// This comment will be removed
body {
    // This comment will also be removed
    background-color: black;
}
// And so will this one
```

## Usage

You need to have [postcss-scss](https://github.com/postcss/postcss-scss) parser already parsing your postcss for this plugin to work.

```npm install postcss-strip-inline-comments --save-dev```

###Grunt

```javascript

```

###Gulp

```javascript

```

###Webpack

```javascript

```