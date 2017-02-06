module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    },
    sasslint: {
        target: ['main.scss']
    },
    watch: {
      files: ['main.scss'],
      tasks: ['sasslint', 'sass']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);

};