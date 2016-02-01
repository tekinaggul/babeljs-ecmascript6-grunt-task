module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/app.min.js': ['dist/app.js']
        } 
      }
    }, 
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      } 
    }, 
    watch: {
      scripts: {
        files: ['dist/app.js'],
        tasks: ['uglify']
      }, 
      babel: {
        files: ['src/app.js'],
        tasks: ['babel']
      } 
    },
    "babel": {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          "dist/app.js": "src/app.js"
        }
      }
    }
  }) 
  grunt.registerTask('default', ["watch"]);
} 