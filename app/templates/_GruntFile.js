module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['app/dist'],
    bower_concat: {
      libraries: {
        exclude: [
          'bootstrap'
        ],
        dest: 'app/dist/lib.js'
      }
    },

    'angular-builder': {
      options: {
        mainModule: '<%= angularMainModuleName %>',
        externalModules: ['ngRoute'],
        excludedModules: ['app.views']
      },
      app: {
        src:  ['app/features/**/*.js'],
        dest: 'app/dist/app.js'
      }
    },

    copy: {
      views: {
        expand: true,
        cwd: 'app/features/',
        src: 'views/**/*.js',
        dest: 'app/dist/'
      },
      html: {
        expand: true,
        cwd: 'app/features/',
        src: '**/*.html',
        dest: 'app/dist/'
      },
      viewsModule: {
        flatten: true,
        expand: true,
        src: 'app/features/views/viewsModule.js',
        dest: 'app/dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-builder');

  grunt.registerTask('default', [
    'clean',
    'bower_concat',
    'angular-builder',
    'copy'
  ]);
};
