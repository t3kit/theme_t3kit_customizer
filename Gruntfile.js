// Variables. Need to change according new felayout_...
var felayout = 'felayout_t3kit';
var felayoutSmallBranch = 'felayout_t3kit_less';
var felayoutHbsPartials = felayout + '/dev/templates/parts';
var felayoutHbsPages = felayout + '/dev/templates/pages';
var felayoutHbsHelpers = felayout + '/grunt/helpers/helper-*.js';

// Customizer templates
// Customizer layout should be almost the same as felayout layout. Only with less instead of css.
var customizerHbsLayout = 'dev/templates/layout';
var customizerHbsPartials = 'dev/templates/parts';

// remote repo configs
var remoteBranch = 'gh-pages';
var remoteRepo = 'git@github.com:t3kit/theme_t3kit_customizer.git';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            felayout: felayout,
            felayoutSmallBranch: felayoutSmallBranch,
            felayoutHbsPartials: felayoutHbsPartials,
            felayoutHbsPages: felayoutHbsPages,
            felayoutHbsHelpers: felayoutHbsHelpers,
            // Customizer templates
            customizerHbsLayout: customizerHbsLayout,
            customizerHbsPartials: customizerHbsPartials,
            dev: 'dev',
            temp: 'temp',
            // remote repo configs
            remoteRepo: remoteRepo,
            remoteBranch: remoteBranch
        },
        jitGrunt: {
            staticMappings: {
                buildcontrol: 'grunt-build-control'
            }
        }
    });
    grunt.loadNpmTasks('grunt-notify');
};
