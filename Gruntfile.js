var remoteBranch = 'gh-pages';
var remoteRepo = 'git@github.com:t3kit/theme_t3kit_customizer.git';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            felayout: 'felayout_t3kit',
            dev: 'felayout_t3kit/dev',
            temp: 'temp',
            bc: 'felayout_t3kit/dev/bower_components',
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
