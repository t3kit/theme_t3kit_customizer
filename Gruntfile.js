// Variables. Need to change according new felayout_...
var felayout = 'felayout_t3kit';
var felayoutPartials = felayout + '/dev/templates/parts';
var felayoutPages = felayout + '/dev/templates/pages';
var felayoutTmplHelpers = felayout + '/grunt/helpers/helper-*.js';

// Customizer layout should be almost the same as felayout layout. Only with less instead of css.
var customizerLayouts = 'dev/templates/layouts';
var customizerPartials = 'dev/templates/parts';
var remoteBranch = 'gh-pages';
var remoteRepo = 'git@github.com:t3kit/theme_t3kit_customizer.git';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            felayout: felayout,
            felayoutPartials: felayoutPartials,
            felayoutPages: felayoutPages,
            felayoutTmplHelpers: felayoutTmplHelpers,
            customizerLayouts: customizerLayouts,
            customizerPartials: customizerPartials,
            dev: 'dev',
            temp: 'temp',
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
