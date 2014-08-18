module.exports = function(grunt) {

	// All configuration goes in here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
			dist: {
      	src: [
          	'js/libs/*.js', // All JS in the libs folder
        	  'js/global.js'  // This specific file
      	],
      	dest: 'js/build/production.js',
	  	}	
		},	

		uglify: {
    	build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
    	}
		},

		imagemin: {
	    dynamic: {
	        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
	        }]
	    }
		},

		watch: {
			options: {
        livereload: true,
    	},
    	scripts: {
        	files: ['js/*.js'],
        	tasks: ['concat', 'uglify'],
        	options: {
        	    spawn: false,
      	  },
    	}, 
    	css: {
 		   files: ['css/*.scss'],
    		tasks: ['sass'],
    		options: {
        	spawn: false,
    		}
			}
		},

		sass: {
    	dist: {
        	options: {
          	  style: 'compressed'
        	},
        	files: {
        	    'css/build/global.css': 'css/global.scss'
      	  }
    	} 
		}

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);


}	