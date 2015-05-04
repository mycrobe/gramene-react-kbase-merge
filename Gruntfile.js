'use strict';

module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.initConfig({

    // The magic incantation to compile the kbase widgets is, from within src/kbsrc
    // r.js -o paths.requireLib=../../../ext/requirejs/2.1.9/require mainConfigFile=kbpaths.js name=all include=requireLib out=kbase.js baseUrl=widgets
    requirejs: {
      compile: {
        options: {
          paths: {
            requireLib: '../../../node_modules/requirejs/require'
          },
          include: ['requireLib'],
          optimize: 'none',
          baseUrl: "src/kbsrc/widgets",
          mainConfigFile: "src/kbsrc/kbpaths.js",
          name: "all",
          out: "build/kbase.js"
        }
      }
    },

    browserify: {
      dev: {
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: ['reactify', 'deamdify']
        },
        src: 'src/main.js',
        dest: 'build/bundle.js'
      },
      production: {
        options: {
          transform: ['reactify', 'deamdify', ['uglifyify', {global: true}]],
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
  grunt.registerTask('package', ['requirejs', 'browserify:production']);
};
