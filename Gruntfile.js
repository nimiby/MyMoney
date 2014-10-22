module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

    // Project configuration.
    grunt.initConfig({
        shell: {
            options: {
                stdout: true
            }
        },
        nunit: {
            test:{
                // Can be solutions, projects or individual assemblies. Solutions 
                // are searched for projects referencing nunit.framework.dll.
                files:{ 
                    src:['MyMoney.csproj']
                }
            },
            options: {
                path: 'packages/NUnit.Runners.2.6.3/tools',
                result: 'NUnit_TestResult.xml',
                work: 'TestResults',
                labels: true,
                process: 'Separate', //'Single|Separate|Multiple',
                timeout: 1000,
                cleanup: false
            }
        },
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
                configFile: './karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('install', ['bower', 'less']);

    grunt.registerTask('build', ['less']);

    grunt.registerTask('test', ['karma:unit', 'nunit:test']);
}