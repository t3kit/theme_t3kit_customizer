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
    copyToRootFolder: {
        files: [{
            dot: true,
            src: [
                '<%= temp %>/copyToRoot',
            ]
        }]
    }
};
