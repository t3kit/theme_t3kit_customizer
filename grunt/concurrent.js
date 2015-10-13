module.exports = {
    options: {
        limit: 20
    },
    customizer: {
        tasks: [
            'copy:fonts',
            'copy:images',
            'copy:flags',
            'copy:toRoot',
            'assemble:customizer',
            'less:components',
            'less:local',
            'import:header',
            'import:headerMin',
            'import:main',
            'import:jquery',
            'import:bootstrap',
            'import:components',
            'import:local',
            'import:mainLess',
            'import:bootstrapLess',
            'import:headerLess',
            'import:headerMinLess'
        ],
    }
};
