module.exports = {
    tempFolder: {
        files: [{
            dot: true,
            src: [
                '<%= temp %>/*',
                '!<%= temp %>/.git*'
            ]
        }]
    },
    tmp: {
        files: [{
            dot: true,
            src: [
                '.tmp/*'
            ]
        }]
    }
};
