'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    this.options = {

    };
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the slick' + chalk.red('AngularAgile') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'angularMainModuleName',
      message: 'Please enter main module name.',
      default: 'app'
    }, {
      type: 'input',
      name: 'packageName',
      message: 'Please enter package name.',
      default: 'package'
    }];

    this.prompt(prompts, function (props) {
      this.options = props;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var scope = this.options;
      /**
       * Project Related
       */

      var packageJson = this.fs.readJSON(this.templatePath('_package.json'));
      packageJson.name = scope.packageName;
      this.fs.writeJSON(this.destinationPath('package.json'), packageJson);

      var bowerJson = this.fs.readJSON(this.templatePath('_bower.json'));
      packageJson.name = scope.packageName;
      this.fs.writeJSON(this.destinationPath('bower.json'), packageJson);

      this.fs.copyTpl(
        this.templatePath('_GruntFile.js'),
        this.destinationPath('GruntFile.js'),
        scope
      );

      /**
       * App
       */

      this.fs.copyTpl(
        this.templatePath('app/index.html'),
        this.destinationPath('app/index.html'),
        scope
      );

      /**
       * Features Directory
       */

      this.fs.copyTpl(
        this.templatePath('app/features/app.js'),
        this.destinationPath('app/features/app.js'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/routes/routesModule.js'),
        this.destinationPath('app/features/routes/routesModule.js'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/routes/home/home.js'),
        this.destinationPath('app/features/routes/home/home.js'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/routes/home/home.js'),
        this.destinationPath('app/features/routes/home/home.js'),
        scope
      );

      /**
       * Views Directory
       */
      this.fs.copyTpl(
        this.templatePath('app/features/views/viewsModule.js'),
        this.destinationPath('app/features/views/viewsModule.js'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/views/home/home.js'),
        this.destinationPath('app/features/views/home/home.js'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/views/home/home.html'),
        this.destinationPath('app/features/views/home/home.html'),
        scope
      );
      this.fs.copyTpl(
        this.templatePath('app/features/views/home/home.less'),
        this.destinationPath('app/features/views/home/home.less'),
        scope
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
