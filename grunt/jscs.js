module.exports = {
    options: {
        config: '.jscsrc',
        force: true
    },
    js: {
        src: ['dev/*.js']
    },
    gruntConfigFiles: {
        src: ['grunt/*.js', 'Gruntfile.js']
    }
};
