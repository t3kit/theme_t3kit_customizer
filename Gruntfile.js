var remoteBranch = 'gh-pages';
var remoteRepo = 'git@github.com:pixelant/theme_name_customizer.git';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            dev: 'felayout_name/dev',
            temp: 'temp',
            bc: 'felayout_name/dev/bower_components',
            remoteRepo: remoteRepo,
            remoteBranch: remoteBranch
        },
        jitGrunt: {
            staticMappings: {
                replace: 'grunt-text-replace',
                buildcontrol: 'grunt-build-control'
            }
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-notify');
};
