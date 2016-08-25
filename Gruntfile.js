module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 80,
          base: 'client'
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          optimization: 2
        },
        files: {
          "client/css/core.css": "client/less/core.less"
        }
      }
    },
    watch: {
      less: {
        files: ['client/less/**'],
        tasks: ['less'],
        options: {
          livereload: 98765
        }
      }
    }
  });
  grunt.registerTask('live', ['connect', 'watch', 'less']);
};
