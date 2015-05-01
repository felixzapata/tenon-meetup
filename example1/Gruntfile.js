'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      html : {
        files : ["**/*.html"],
        tasks : ["tenon"]
      }
  	}, // watch

    tenon: {
      options: {
        key: 'a99fac2034dbcf8928a1be0a6e08e792',
        level: 'AA'
      },
      all: {
        options: {
          saveOutputIn: 'allHtml.json',
          snippet: true,
          asyncLim: 2
        },
        src: ['*.html']
      }
    }

  }); // initConfig

  grunt.registerTask('default', ["watch"]);

};
