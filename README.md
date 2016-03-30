##theme_t3kit_customizer
[![Release](https://img.shields.io/github/release/t3kit/theme_t3kit_customizer.svg?style=flat-square)](https://github.com/t3kit/theme_t3kit_customizer/releases)

Javascript framework for live editing t3kit Theme with color picker (instead of backend forms)

**[t3kit live editing](http://t3kit.github.io/theme_t3kit_customizer)**


### Required dependencies:

- [Git](https://git-scm.com/)
- [NodeJs](http://nodejs.org/) >=5.6.0
- [NPM](https://github.com/npm/npm) >=3.6.0
- [Bower](http://bower.io/) >=1.7.7 `npm install -g bower`
- [Grunt-cli](http://gruntjs.com/) >=0.1.13 `npm install -g grunt-cli`

_Note: You might need to use `sudo` before `npm` command to install packages globally_
***

### Installation:

First, clone repo and update submodules:
```bash
git clone git@github.com:t3kit/theme_t3kit_customizer.git
git submodule update --init
```

Next, install Bower/NPM dependencies:

```bash
npm install
bower install
```

### Getting Started:

- Run `grunt` to start customizer dev server with livereload `localhost:9005`
- Run `grunt check` to check JS files according project code conventions
- Run `grunt ppushCustomizer` to build customizer static site and push it to GitHub Pages
