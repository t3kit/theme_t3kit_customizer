module.exports = {

    felayoutSmall: {
        expand: true,
        dot: true,
        cwd: '<%= felayoutSmallBranch %>',
        dest: '<%= temp %>',
        src: [
            '**',
            '!.git',
            '!.gitignore'
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
    bowerComponents: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/bower_components',
        dest: '<%= temp %>',
        src: [
            'colorPicker/jqColorPicker.min.js',
            'clipboard/dist/clipboard.min.js',
            'less/dist/less.min.js'
        ]
    }
};
