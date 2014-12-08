module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        },
        typescript: {
            base: {
                src: ['**/*.ts'],
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true
                }
            }
        },
        watch: {
            ts: {
                files: '**/*.ts',
                tasks: ['typescript'],
                options: {
                    livereload: true
                }
            }
        }
    });
 
    grunt.registerTask('default', ['connect', 'open', 'watch']);
}