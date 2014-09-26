/// <vs AfterBuild='dummyTask' />
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: { }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('build', ['bower']);
}