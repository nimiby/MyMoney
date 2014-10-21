module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "WebClient\\3rdPartyComponents",
                    cleanBowerDir: true,
                    layout: "byComponent"
                }
            }
        },
        less: {
            build: {
                files: {
                    "WebClient/Styles/Styles.css": "WebClient/Styles/Styles.less"
                }
            }
        },

        karma: {
            unit: {
                configFile: './karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-karma')

    grunt.registerTask('install', ['bower', 'less']);

    grunt.registerTask('build', ['less']);

    grunt.registerTask('test', ['karma:unit']);
}