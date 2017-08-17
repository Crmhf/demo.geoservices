module.exports = function (grunt) {
  grunt.initConfig({
    pkg:   grunt.file.readJSON('package.json'),

    jshint: {
      files: [ 'gruntfile.js', 'lib/**/*.js', 'test/**/*.js' ],
      options: {
        globals: {
          node: true
        }
      }
    },

    complexity: {
      generic: {
        src: [ 'lib/ags/authentication.js', 'lib/ags/featureservice.js', 'lib/ags/geocode.js', 'lib/request.js' ],
        options: {
          jsLintXML: 'report.xml', // create XML JSLint-like report
          errorsOnly: false, // show only maintainability errors
          cyclomatic: 5,
          halstead: 15,
          maintainability: 65
        }
      }
    },

    vows: {
      all: {
        options: {
          reporter: "spec",
          verbose: false,
          colors: true
        },
        src: [ "test/*.js" ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-vows');
  grunt.loadNpmTasks('grunt-complexity');

  grunt.registerTask('default', [ 'jshint', 'vows', 'complexity' ]);

};
