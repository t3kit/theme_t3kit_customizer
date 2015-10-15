module.exports = {
    options: {
        postprocess: require('pretty'),
        flatten: true,
        layout: 'default.hbs',
        helpers: '<%= felayout %>/grunt/helpers/helper-*.js',
    },
    customizer: {
        options: {
            layoutdir: '.tmp/templates/layouts',
            partials: ['.tmp/templates/parts/**/*.hbs', 'dev/**/*.hbs']
        },
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    }
};
