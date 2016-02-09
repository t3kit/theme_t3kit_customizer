module.exports = {
    options: {
        port: 9005,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    localhost: {
        options: {
            base: ['.','<%= temp %>'],
        }
    }
};
