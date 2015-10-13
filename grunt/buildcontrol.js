module.exports = {
    options: {
        commit: true,
        push: true,
        remote: '<%= remoteRepo %>',
        message: 'update'
    },
    customizer: {
        options: {
            dir: '<%= temp %>',
            branch: '<%= remoteBranch %>'
        }
    }
};
