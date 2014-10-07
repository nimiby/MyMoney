/// <vs BeforeBuild='build' />
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "WebClient\\3rdPartyComponents",
                    cleanBowerDir: false,
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
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build', ['bower', 'less']);
}