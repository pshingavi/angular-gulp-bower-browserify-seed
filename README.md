# AngularJS - workflow with Gulp, Bower, Browserify
This is a starter demo for AngularJS using workflow tools to automate the builds and dependencies of the web applicaiton.


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
1. Run build: `gulp build`
1. To clean the build: `gulp clean`

## Take a look - Blog post

Be sure to read the blog posts to learn how to create this setup from scratch:

1. [Kickstarting Angular With Gulp and Browserify, Part 1 - Gulp and Bower](http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp)
1. [Kickstarting Angular With Gulp and Browserify, Part 2 - Browserify](http://mherman.org/blog/2014/08/15/kickstarting-angular-with-gulp-and-browserify-part-2)