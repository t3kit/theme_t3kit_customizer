module.exports = {
    customizerHead: {
        src: ['.tmp/templates/parts/head.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<link rel="stylesheet" href="bootstrap.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="components.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="main.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="header.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="headerMin.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="local.css">',
                to: '{{> customizerHead}}'
            }
        ]
    },
    customizerScript: {
        src: ['.tmp/templates/parts/scripts.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<!-- ======= -->',
                to: '{{> customizerScripts}}'
            }
        ]
    },
    customizerBody: {
        src: ['.tmp/templates/layouts/default.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<!-- Header partials -->',
                to: '{{> customizerLayout}}'
            }
        ]
    }
};
