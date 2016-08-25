module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
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
          livereload: true,
          port: 35730
        }
      }
    }
  });
  grunt.registerTask('live', ['watch','less']);
};
