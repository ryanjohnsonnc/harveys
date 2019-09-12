# Harveys Prototype Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/5fa7da9d-3687-41c0-88d9-6fe9b8fa58f9/deploy-status)](https://app.netlify.com/sites/harveys/deploys)

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

This project is based on The ZURB Template from Foundation [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Prerequisites

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

## Setup and Development

To set up the template, first download it with Git:

```bash
git clone https://github.com/ryanjohnsonnc/harveys harveys
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd harveys
yarn
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.

## Deploying The App

This project is set up to deploy to [Netlify](https://www.netlify.com/). The setup is handled outside of the codebase and entirely on the Netlify service. Deployments will be triggered on a push to the Master branch, so be careful not to push any breaking changes to the Mast branch. 