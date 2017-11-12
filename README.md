# React render to markdown
> Write markdown with React


## Introduction

This renderer allows you to write react and have it render out to a markdown file.


## How to use

Add the dependancy
``` bash

yarn add react-render-to-markdown
-- or --
npm install --save react-render-to-markdown

```
Then import to your project
``` javascript

import { render } from './src';

render(<App />, `${__dirname}/README.md`)

```



## Running the project locally

``` bash

git clone https://github.com/George-Payne/react-render-to-markdown
cd react-render-to-markdown
yarn install
yarn example

```
This will create this readme. Edit  ```demo.js```  to edit the readme.


## Acknowledgements

Written following [nitin42's Building a custom React renderer](https://github.com/nitin42/Making-a-custom-React-renderer "😎").

Heavily referenced [Adam Pritchard's Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


