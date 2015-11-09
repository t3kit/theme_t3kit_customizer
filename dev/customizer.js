/* global less */
/* global lessObj */
/* global lessObj:true */

var lessvar;
jQuery(function($) {

    // Save variables
    var $body = $('body');

    var $customizer = $('.js__customizer');
    var $customizerHideBtn = $('.js__customizer__hide-btn');

    var $colorPicker = $('.js__customizer-color-picker__val');
    var $integerInput = $('.js__customizer-integer-input__val');

    var $customizerFooterBtnClearCache = $('.js__customizer-footer__btn-clear-cache');
    var $customizerFooterBtnTypoConf = $('.js__customizer-footer__btn-typo-conf');

    var $customizerModal = $('.js__customizer-modal-overlay');
    var $customizerModalInput = $('.js__customizer-modal__text');

    // Customizer Color Picker
    $colorPicker.colorPicker({
        customBG: '#777',
        margin: '0 0 0 66px',
        scrollResize: false,
        top: '100px',
        preventFocus: true,
        animationSpeed: 0,
        opacity: false,
        doRender: false,

        // demo on how to make plugins... mobile support plugin
        buildCallback: function($elm) {
            $elm.prepend('<div class="cp-disp"></div>');
            $('.color').on('click', function(e) {
                e.preventDefault && e.preventDefault();
            });

            var colorInstance = this.color;
            var that = this;

            $elm.prepend('<div class="cp-panel">' +
                '<input type="text" class="cp-HEX" />' +
            '</div>').on('change', 'input', function() {
                var value = this.value,
                className = this.className,
                type = className.split('-')[1],
                color = {};
                color[type] = value;
                colorInstance.setColor(type === 'HEX' ? value : color,
                    type === 'HEX' ? 'HEX' : /(?:r|g|b)/.test(type) ? 'rgb' : 'hsv');
                that.render();
                this.blur();
            });
        },
        cssAddon: // could also be in a css file instead
            '.cp-disp{padding:10px; margin-bottom:6px; font-size:19px; height:20px; line-height:20px}' +
            '.cp-xy-slider{width:200px; height:200px;}' +
            '.cp-xy-cursor{width:16px; height:16px; border-width:2px; margin:-8px}' +
            '.cp-z-slider{height:200px; width:40px;}' +
            '.cp-z-cursor{border-width:8px; margin-top:-8px;}' +
            '.cp-alpha{height:40px;}' +
            '.cp-alpha-cursor{border-width: 8px; margin-left:-8px;}',

        renderCallback: function($elm, toggled) {
            var colors = this.color.colors;

            $('.cp-disp')
                .css({
                    backgroundColor: '#' + colors.HEX,
                    // color: colors.RGBLuminance > 0.22 ? '#222' : '#ddd'
                })
                .text('#' + colors.HEX);
            $('.cp-color-picker')
                .css({
                    top: $elm.offset().top - $customizer.offset().top + $customizer.position().top + 'px',
                    position: 'fixed',
                    'z-index': 5000
                });
            if (toggled || toggled === undefined) {
                lessvar = $elm[0].dataset.lessvar;
                lessObj[lessvar] = '#' + this.color.colors.HEX;
                less.modifyVars(lessObj);
                localStorage.setItem('lessObj', JSON.stringify(lessObj));
            }
        }
    });
    // Color Picker Return to default color
    $('.js__customizer-color-picker__return-to-default').on('click', function(e) {
        e.preventDefault();
        lessvar = $(this).prev('.js__customizer-color-picker__val').data('lessvar');
        // console.log(lessvar);
        // console.log('lessvar');
        delete lessObj[lessvar];
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Integer Input
    $integerInput.each(function() {
        lessvar = $(this).data('lessvar');
        // console.log(lessObj[lessvar]);
        // console.log(lessObj[lessvar] !== undefined);
        if (lessObj[lessvar] !== undefined) {
            $(this).val(lessObj[lessvar]);
        }
    });
    $integerInput.on('change', function(e) {
        e.preventDefault();
        lessvar = $(this).data('lessvar');
        lessObj[lessvar] = $(this).val();
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Integer Input Return to default
    $('.js__customizer-integer-input__return-to-default').on('click', function(e) {
        e.preventDefault();
        lessvar = $(this).prev('.js__customizer-integer-input__val').data('lessvar');
        $(this).prev('.js__customizer-integer-input__val').val('');
        delete lessObj[lessvar];
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Hide function
    $customizerHideBtn.on('click', function(e) {
        e.preventDefault();
        $customizer .toggleClass('_hide-customizer');
    });

    // Customizer Clear Cache
    $customizerFooterBtnClearCache.on('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('lessObj');
        lessObj = {};
        less.modifyVars(lessObj);
    });

    // Customizer Generate TYPO3 Theme config
    $customizerFooterBtnTypoConf.on('click', function(e) {
        e.preventDefault();
        $body.toggleClass('_freeze-body');
        var lessObjStr = JSON.stringify(lessObj);
        lessObjStr = lessObjStr.replace(/(-)\w{1}/g, function(v) { return v.toUpperCase(); });
        var mapLessObj = {
            ':': ' = ',
            '{': '',
            '}': '',
            '"': '',
            '-': '',
            ',': '\n',
            '@': 'themes.configuration.colors.'
        };
        lessObjStr = lessObjStr.replace(/({|}|-|:|"|,|@)/gi, function(matched) {
            return mapLessObj[matched];
        });
        $customizerModalInput.val(lessObjStr);
    });

    $customizerModal.on('click', function() {
        $body.toggleClass('_freeze-body');
        return false;
    });

    // Customizer Header checkboxes. Display basic;advanced;expert view
    // var blockHeaders = $('.customizer-block__header');

    var $basic = $('[data-display="basic"]');
    var $advanced = $('[data-display="advanced"]');
    var $expert = $('[data-display="expert"]');

    var $displayBasic = $('.js__display-basic');
    var $displayAdvanced = $('.js__display-advanced');
    var $displayExpert = $('.js__display-expert');

    var customizerDisplay = function($checkbox, $var) {
        if (!$checkbox.prop('checked')) {$var.hide();}
        $checkbox.on('click', function() {
            if (!$(this).prop('checked')) {
                $var.hide();
                // blockHeaders.each(function() {
                //     if ($(this).next().is('div') && blockHeaders.next().is(':hidden')) {
                //         $(this).hide();
                //     }
                // });
            } else {
                $var.show();
                // blockHeaders.each(function() {
                //     if ($(this).next().is('div') && blockHeaders.next().is(':visible')) {
                //         $(this).show();
                //     }
                // });
            }

        });
    };
    customizerDisplay($displayBasic, $basic);
    customizerDisplay($displayAdvanced, $advanced);
    customizerDisplay($displayExpert, $expert);

});
