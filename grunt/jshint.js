module.exports = {
    options: {
        jshintrc: '.jshintrc',
        // force: true,
        reporter: require('jshint-stylish')
    },
    js: {
        src: ['dev/*.js']
    },
    gruntConfigFiles: {
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};
