# Web widget demo

> This repository is a demo to show how to create web widgets using [Preact](https://preactjs.com/) (or [React](https://reactjs.org/)). The widgets can then be embeded in other websites.

- The reason I use Preact is because it is much lighter than React.
- I use Parcel to bundle the assets, but any bundler should work similarly.
- If you use React, you can take advantages of the `external` feature of Webpack to significantly reduce your build size.

## Run Demo
With the required npm packages install, run with
```bash
npm start
```

- You can go to `http://localhost:1234/index.html` to view sample widgets and their embedding code.
- You can go to `http://localhost:1234/client.html` to view the sample widgets embedded and rendered. Modify file `client.html` to adjust the widgets.

## How to make a widget
Under directory `widgets`, you will find widgets made with **Preact Component**. These widgets extends **AbstractWidget** that you can find in `utils/widget.jsx`.

A widget extending **AbstractWidget** will expose a static wrapper that shows corresponding embedding code. For e.g.
```javascript
class MyWidget extends AbstractWidget
```
should expose
```javascript
MyWidget.Wrapper
```

You can render this wrapper (as a normal Preact component) so that your clients can preview the widget together with the embedding code.

## How to embed a widget
Suppose that the web service serving the widgets is running at `http://localhost:1234`, you can simply copy the embedding code to your website.

## Build
```bash
npm run build
```
File `script-loader.js` is excluded from the build because bundlers add overhead to this small script (from 1KB to at least 2KB minified, or 8KB not minified). Adapt/copy this script to your web service.

### Build outputs
- index.html
  - The main widget host site. Usually you don't build html directly, but rather the javascript included in the html.
- renderer.js
  - The script to render the widgets. This script expose a function `inflate` globally. Wait for this function to become available before use.
- main.css
  - The style for your widgets. Usually you should build your own style.
