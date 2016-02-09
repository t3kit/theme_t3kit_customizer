module.exports = {
    tempFolder: {
        files: [{
            dot: true,
            src: [
                '<%= temp %>/*',
                '!<%= temp %>/.git*'
            ]
        }]
    }
};
