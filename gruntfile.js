module.exports = function(grunt){
  grunt.initConfig({
 
    less: {
      'style.css': ['*.less']
    },
    watch: {
      less: {
        files: ['*.less'],
        tasks: ["less"],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['*.less']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less','watch']);
};