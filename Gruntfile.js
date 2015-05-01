'use strict';

module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.loadNpmTasks('grunt-jsxhint');

  grunt.initConfig({
    browserify: {
      dev: {
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: ['reactify']
        },
        src: 'src/main.js',
        dest: 'build/bundle.js'
      },
      production: {
        options: {
          transform: ['reactify', ['uglifyify', {global: true}]],
          browserifyOptions: {
            debug: false
          }
        },
        src: '<%= browserify.dev.src %>',
        dest: '<%= browserify.dev.dest %>'
      }
    },

    watch: {
      browserify: {
        files: 'src/**/*',
        tasks: ['browserify:dev']
      }
    }
  });

  grunt.registerTask('default', ['browserify:dev', 'watch']);
  grunt.registerTask('package', ['browserify:production']);
};
