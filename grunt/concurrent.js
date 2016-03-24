module.exports = {
    options: {
        limit: 20
    },
    customizer: {
        tasks: [
            'copy:felayoutSmall',
            'copy:customizerFiles',
            'copy:bowerComponents',
            'assemble:customizer',
        ]
    }
};
