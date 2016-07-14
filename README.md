# AngularJS - workflow with Gulp, Bower, Browserify
This is a starter demo for AngularJS using workflow tools to automate the builds and dependencies of the front-end web applicaiton.


[GULP](http://gulpjs.com/plugins/) - Javascript task runner, used to automate repetitive tasks (i.e., minifying, linting, testing, building, compiling) to simplify the build process.

[BOWER](http://bower.io/) - Manage front-end dependencies and serve css/js etc from the downloaded repo configured.

[BROWSERIFY](http://browserify.org/) - Also manages front-end dependencies (mainly js) and works with NPM 'require' calls for including dependencies instead of script includes in the HTML documents.

Be sure to check [NPM](https://www.npmjs.com/) first before relying on Bower so you can take advantage of the simple require calls, via Browserify, which reduces code clutter and enables you to write modular, re-usable code.

This example uses Bower to crack jQuery dependency (just to demonstrate the use of bower). Other dependencies like angular, angular-ui-router are taken care by NPM via Browserify require calls, which loads dependencies from node_modules installed.


## Quick Start

1. Install Node js - [Here](https://nodejs.org/)
1. Clone the repo
1. Install the global requirements: `npm install -g gulp bower browserify`
1. Install the local requirements: `npm install`
1. Install the Bower components: `bower install`
1. Run locally: `gulp`
  2. browserify : angular dependencies
  2. jshint : js validations
  2. connect to local server at port defined in the log (here : 8888)
1. Run build: `gulp build`
  2. jshint : js validations
  2. css-minify : minify css and deploy to build folder
  2. browserify and js-minify : process angular dependencies, concat and minify to single js and copy to build folder
  2. copy-html-files : Copy HTML partial / non-partial files to deploy folder
  2. copy-bower-components : Copy bower_components dependency files to deploy folder
  2. connect to local server at port defined in the log (here : 9999) with app path pointing to build folder
1. To clean the build: `gulp clean`
  2. Delete the deploy folder
  2. Delete the minified single js from app folder created from Run build (above)

## Take a look - Blog post

Be sure to read the blog posts to learn how to create this setup from scratch:

1. [Kickstarting Angular With Gulp and Browserify, Part 1 - Gulp and Bower](http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp)
1. [Kickstarting Angular With Gulp and Browserify, Part 2 - Browserify](http://mherman.org/blog/2014/08/15/kickstarting-angular-with-gulp-and-browserify-part-2)
