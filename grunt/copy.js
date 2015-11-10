module.exports = {

    felayoutSmall: {
        expand: true,
        dot: true,
        cwd: '<%= felayout %>/small',
        dest: 'temp',
        src: [
            '**'
        ]
    },
    customizerToRoot: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>/copyToRoot',
        dest: '<%= temp %>',
        src: [
            '*'
        ]
    },
    customizerFiles: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            '**/*.js',
            '**/*.less',
            '!bower_components/**'
        ]
    },
    customizerBowComponents: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/bower_components',
        dest: '<%= temp %>',
        src: [
            'colorPicker/jqColorPicker.min.js',
            'less/dist/less.min.js'
        ]
    }
};
