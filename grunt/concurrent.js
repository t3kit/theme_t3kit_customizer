module.exports = {
    options: {
        limit: 20
    },
    customizer: {
        tasks: [
            'copy:felayoutSmall',
            'copy:customizerFiles',
            'copy:customizerBowComponents',
            'copy:customizerToRoot',
            'assemble:customizer',
            'import:localJs'
        ]
    }
};
