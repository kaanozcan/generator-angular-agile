'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the slick' + chalk.red('AngularAgile') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('_GruntFile.js'),
        this.destinationPath('GruntFile.js')
      );
      this.fs.copy(
        this.templatePath('app/index.html'),
        this.destinationPath('app/index.html')
      );
      this.fs.copy(
        this.templatePath('app/features/app.js'),
        this.destinationPath('app/features/app.js')
      );
      this.fs.copy(
        this.templatePath('app/features/routes/routesModule.js'),
        this.destinationPath('app/features/routes/routesModule.js')
      );
      this.fs.copy(
        this.templatePath('app/features/routes/home/home.js'),
        this.destinationPath('app/features/routes/home/home.js')
      );
      this.fs.copy(
        this.templatePath('app/features/routes/home/home.js'),
        this.destinationPath('app/features/routes/home/home.js')
      );
      this.fs.copy(
        this.templatePath('app/features/views/viewsModule.js'),
        this.destinationPath('app/features/views/viewsModule.js')
      );
      this.fs.copy(
        this.templatePath('app/features/views/home/home.js'),
        this.destinationPath('app/features/views/home/home.js')
      );
      this.fs.copy(
        this.templatePath('app/features/views/home/home.html'),
        this.destinationPath('app/features/views/home/home.html')
      );
      this.fs.copy(
        this.templatePath('app/features/views/home/home.less'),
        this.destinationPath('app/features/views/home/home.less')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
