module.exports = {
    options: {
        postprocess: require('pretty'),
        flatten: true,
        layout: 'default.hbs',
        helpers: '<%= felayoutTmplHelpers %>',
    },
    customizer: {
        options: {
            layoutdir: '<%= customizerLayouts %>',
            partials: ['<%= felayoutPartials %>/**/*.hbs', '<%= customizerPartials %>/**/*.hbs']
        },
        files: {
            '<%= temp %>': ['<%= felayoutPages %>/**/*.hbs']
        },
    }
};
