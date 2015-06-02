module.exports = function(grunt) {
		grunt.initConfig({
			sass: {
				compile: {
					options: {
						style: 'compressed',
						sourcemap: 'none'
					},
					files: {
						'css/styles.css': 'css/sass/importer.scss'
					}
				}
			},
			
			
			watch: {
				style: {
					files: ["css/**/*.scss", ],
					tasks: ['sass']
				}
			}
		});
		
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-htmlmin');
		
		grunt.registerTask('default', ['sass:compile',"watch"]);
};