module.exports = {
    options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= customizerHbsLayout %>',
        helpers: '<%= felayoutHbsHelpers %>',
        partials: ['<%= felayoutHbsPartials %>/**/*.hbs', '<%= customizerHbsPartials %>/**/*.hbs']
    },
    customizer: {
        files: {
            '<%= temp %>': ['<%= felayoutHbsPages %>/**/*.hbs']
        },
    }
};
