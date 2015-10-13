module.exports = {
    customizer: {
        files: ['dev/{,*/}*.*', '!dev/customizer.js'],
        tasks: ['newer:copy:customizerFiles', 'assemble:customizer']
    },
    customizerJs: {
        files: ['dev/customizer.js'],
        tasks: ['newer:copy:customizerFiles', 'jscs', 'jshint']
    },
    livereload: {
        options: {
            interrupt: true,
            livereload: 35729
        },
        files: [
            '<%= temp %>/*.html',
            '<%= temp %>/*.css',
            '<%= temp %>/*.js',
            '<%= temp %>/images/{,*/}*.*',
            '<%= temp %>/fonts/{,*/}*.*',
            '<%= temp %>/*.{ico,png,txt,xml}'
        ]
    }

};
