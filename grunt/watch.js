module.exports = {
    customizerTemplates: {
        files: ['<%= dev %>/**/*.hbs'],
        tasks: ['assemble:customizer']
    },
    customizerFiles: {
        files: ['<%= dev %>/**/*.js', '<%= dev %>/**/*.less'],
        tasks: ['newer:copy:customizerFiles']
    },
    livereload: {
        options: {
            interrupt: true,
            livereload: 35729
        },
        files: [
            '<%= temp %>/*.html',
            '<%= temp %>/*.css',
            '<%= temp %>/*.less',
            '<%= temp %>/*.js',
            '<%= temp %>/images/{,*/}*.*',
            '<%= temp %>/fonts/{,*/}*.*',
            '<%= temp %>/*.{ico,png,txt,xml}'
        ]
    }

};
