module.exports = {
    local: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/local.css': '<%= dev %>/styles/local.less'
        }
    },
    components: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/components.css': '<%= dev %>/styles/components.less'
        }
    }
};
