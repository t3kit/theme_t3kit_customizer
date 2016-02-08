/* global less */
/* global lessObj */
/* global lessObj:true */
/* global statusObj */
/* global statusObj:true */

var lessvar;
var statusKey;
jQuery(function($) {

    // Save variables
    var $body = $('body');

    var $customizer = $('.js__customizer');
    var $customizerHideBtn = $('.js__customizer__hide-btn');

    // Color Picker vars
    var $colorPicker = $('.js__customizer-color-picker__val');
    var $colorPickerReturnToDefault = $('.js__customizer-color-picker__return-to-default');

    // Dimension vars
    var $dimensionInput = $('.js__customizer-dimension-input__val');
    var $dimensionReturnToDefault = $('.js__customizer-dimension-input__return-to-default');

    // Element Status vars
    var $elementStatus = $('.js__customizer-element-status__val');
    var $elementStatusReturnToDefault = $('.js__customizer-element-status__return-to-default');

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

        buildCallback: function($elm) {
            var colorInstance = this.color;
            var that = this;
            $elm.prepend('<div class="cp-disp"></div>');
            $elm.append('<div class="cp-color-input">' +
                '<input type="text" class="cp-color-input__cp-HEX" />' +
                '</div>').on('change', 'input', function() {
                var value = this.value;
                colorInstance.setColor(value, 'HEX');
                that.render();
                this.blur();
            });
        },
        cssAddon:
            '.cp-color-picker{ border-radius:0;}' +
            '.cp-color-input{ width:100px; clear:both; height:32px}' +
            '.cp-color-input__cp-HEX{ width:100px; height:26px, color:#000; font-size: 16px;}' +
            '.cp-disp{padding:10px; margin-bottom:6px; font-size:19px; height:34px; line-height:20px}' +
            '.cp-xy-slider{width:200px; height:200px;}' +
            '.cp-xy-cursor{width:16px; height:16px; border-width:2px; margin:-8px}' +
            '.cp-z-slider{height:200px; width:40px;}' +
            '.cp-z-cursor{border-width:8px; margin-top:-8px;}',
        renderCallback: function($elm, toggled) {
            var colors = this.color.colors;

            $('.cp-disp')
                .css({
                    backgroundColor: '#' + colors.HEX,
                    color: colors.RGBLuminance > 0.22 ? '#222' : '#ddd'
                })
                .text('#' + colors.HEX);
            $('.cp-color-input__cp-HEX')
                .css({
                    backgroundColor: '#' + colors.HEX,
                    color: colors.RGBLuminance > 0.22 ? '#222' : '#ddd'
                })
                .val('#' + colors.HEX);
            $('.cp-color-picker')
                .css({
                    top: $elm.offset().top - $customizer.offset().top + $customizer.position().top + 'px',
                    position: 'fixed',
                    'z-index': 5000
                });
            if (toggled || toggled === undefined) {
                lessvar = $elm[0].dataset.lessvar;
                lessObj[lessvar] = '#' + colors.HEX;
                less.modifyVars(lessObj);
                localStorage.setItem('lessObj', JSON.stringify(lessObj));
            }
        }
    });

    // Color Picker Return to default color
    $colorPickerReturnToDefault.on('click', function(e) {
        e.preventDefault();
        lessvar = $(this).prev('.js__customizer-color-picker__val').data('lessvar');
        delete lessObj[lessvar];
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Dimension
    $dimensionInput.each(function() {
        lessvar = $(this).data('lessvar');
        if (lessObj[lessvar] !== undefined) {
            $(this).val(lessObj[lessvar]);
        }
    });
    $dimensionInput.on('change', function(e) {
        e.preventDefault();
        lessvar = $(this).data('lessvar');
        lessObj[lessvar] = $(this).val();
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Dimension Return to default
    $dimensionReturnToDefault.on('click', function(e) {
        e.preventDefault();
        lessvar = $(this).prev('.js__customizer-dimension-input__val').data('lessvar');
        $(this).prev('.js__customizer-dimension-input__val').val('');
        delete lessObj[lessvar];
        less.modifyVars(lessObj);
        localStorage.setItem('lessObj', JSON.stringify(lessObj));
    });

    // Customizer Element Status

    var statusRegEx = function(key) {
        statusKey = key.replace(/(\ )\w{1}/g, function(v) { return v.toUpperCase(); }).replace(/(\ )\w{0}/g, '').replace(/()\w{1}/i, function(v) { return v.toLowerCase(); });
    };
    $elementStatus.each(function() {
        var elem = $(this).data('elclass');
        statusKey = $(this).data('status');
        statusRegEx(statusKey);
        // statusKey = statusKey.replace(/(\ )\w{1}/g, function(v) { return v.toUpperCase(); }).replace(/(\ )\w{0}/g, '').replace(/()\w{1}/i, function(v) { return v.toLowerCase(); });
        if (statusObj[statusKey] !== undefined) {
            if (statusObj[statusKey]) {
                $(elem).show();
                $(this).prop('checked', true);
            } else {
                $(elem).hide();
                $(this).prop('checked', false);
            }
        } else {
            if ($(this).attr('checked') !== 'checked') {
                $(elem).hide();
            }
        }
    });

    $elementStatus.on('click', function() {
        var elem = $(this).data('elclass');
        statusKey = $(this).data('status');
        statusRegEx(statusKey);
        // statusKey = statusKey.replace(/(\ )\w{1}/g, function(v) { return v.toUpperCase(); }).replace(/(\ )\w{0}/g, '').replace(/()\w{1}/i, function(v) { return v.toLowerCase(); });
        if (!$(this).prop('checked')) {
            statusObj[statusKey] = 0;
            $(elem).hide();
        } else {
            statusObj[statusKey] = 1;
            $(elem).show();
        }
        localStorage.setItem('statusObj', JSON.stringify(statusObj));
    });
    var defaultElemStatus = function() {
        $elementStatus.each(function() {
            var elem = $(this).data('elclass');
            statusKey = $(this).data('status');
            statusRegEx(statusKey);
            // statusKey = statusKey.replace(/(\ )\w{1}/g, function(v) { return v.toUpperCase(); }).replace(/(\ )\w{0}/g, '').replace(/()\w{1}/i, function(v) { return v.toLowerCase(); });

            if (statusObj[statusKey] !== undefined) {
                if ($(this).attr('checked') === 'checked') {
                    $(elem).show();
                    $(this).prop('checked', true);
                } else {
                    $(elem).hide();
                    $(this).prop('checked', false);
                }
            }
        });
    };

    // Customizer Element Status Return to default
    $elementStatusReturnToDefault.on('click', function(e) {
        e.preventDefault();
        var prevElem = $(this).prevAll('.js__customizer-element-status__val');
        statusKey = prevElem.data('status');
        statusRegEx(statusKey);
        // statusKey = statusKey.replace(/(\ )\w{1}/g, function(v) { return v.toUpperCase(); }).replace(/(\ )\w{0}/g, '').replace(/()\w{1}/i, function(v) { return v.toLowerCase(); });
        if (prevElem.attr('checked') === 'checked') {
            $(prevElem.data('elclass')).show();
            prevElem.prop('checked', true);
        } else {
            $(prevElem.data('elclass')).hide();
            prevElem.prop('checked', false);
        }
        delete statusObj[statusKey];
        localStorage.setItem('statusObj', JSON.stringify(statusObj));
    });

    // Customizer Hide function
    $customizerHideBtn.on('click', function(e) {
        e.preventDefault();
        $customizer .toggleClass('_hide-customizer');
    });

    // Customizer Clear Cache
    $customizerFooterBtnClearCache.on('click', function(e) {
        e.preventDefault();
        // less
        localStorage.removeItem('lessObj');
        lessObj = {};
        less.modifyVars(lessObj);

        // elements status
        defaultElemStatus();
        localStorage.removeItem('stausObj');
        statusObj = {};
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
            '@': 'themes.configuration.less.var.'
        };
        lessObjStr = lessObjStr.replace(/({|}|-|:|"|,|@)/gi, function(matched) {
            return mapLessObj[matched];
        });

        var statusObjTmp = $.extend({},statusObj);
        console.log(statusObjTmp);
        console.log(statusObj);
        $.each(statusObjTmp, function(key) {
            var newKey = 'themes.configuration.elem.status.' + key;
            statusObjTmp[newKey] = statusObjTmp[key];
            delete statusObjTmp[key];
        });
        var statusObjStr = JSON.stringify(statusObjTmp);
        var mapElemObj = {
            ':': ' = ',
            '{': '',
            '}': '',
            '"': '',
            '-': '',
            '__': '',
            ',': '\n'
        };
        statusObjStr = statusObjStr.replace(/({|}|-|__|:|"|,)/gi, function(matched) {
            return mapElemObj[matched];
        });
        $customizerModalInput.val(lessObjStr + '\n' + statusObjStr);
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
// TODO header show - hide if empty

            } else {
                $var.show();
            }

        });
    };
    customizerDisplay($displayBasic, $basic);
    customizerDisplay($displayAdvanced, $advanced);
    customizerDisplay($displayExpert, $expert);

});