module.exports = {
    fonts: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'fonts/{,*/}*.*'
        ]
    },
    images: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'images/{,*/}*.*'
        ]
    },
    toRoot: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/copyToRoot',
        dest: '<%= temp %>',
        src: [
            '{,*/}*.*'
        ]
    },
    flags: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/flag-icon-css/flags/4x3/',
        dest: '<%= temp %>/flags/4x3/',
        src: [
            'be.svg',
            'dk.svg',
            'ee.svg',
            'fl.svg',
            'fr.svg',
            'fi.svg',
            'de.svg',
            'it.svg',
            'nl.svg',
            'nz.svg',
            'no.svg',
            'pl.svg',
            'pt.svg',
            'es.svg',
            'se.svg',
            'ch.svg',
            'gb.svg',
            'us.svg'
        ]
    },
    customizerTemplates: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '.tmp',
        src: [
            'templates/parts/**',
            'templates/layouts/{,*/}*.*'
            // 'styles/customVariables.less'
        ]
    },
    customizerFiles: {
        expand: true,
        dot: true,
        cwd: 'dev',
        dest: '<%= temp %>',
        src: [
            'customizer.js',
            'customizer.less'
        ]
    },
    customizerComponents: {
        expand: true,
        dot: true,
        cwd: 'dev',
        dest: '<%= temp %>',
        src: [
            'bower_components/less/dist/less.min.js',
            'bower_components/spectrum/spectrum.css',
            'bower_components/spectrum/spectrum.js'
        ]
    }
};
