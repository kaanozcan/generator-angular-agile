module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
        mainModule: 'app'
      },
      app: {
        src:  ['app/features/**/*.js', '!app/features/views/**/*.js'],
        dest: 'app/dist/app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-angular-builder');

  grunt.registerTask('default', [
    'bower_concat',
    'angular-builder'
  ]);
};
