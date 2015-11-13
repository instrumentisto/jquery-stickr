/*!
 * jQuery.stickr plugin v0.0.1
 * https://github.com/instrumentisto/jquery-stickr
 *
 * Copyright 2015 Instrumentisto Team (https://github.com/instrumentisto)
 * Released under the MIT license
 * http://jquery.org/license
 */
$.stickr = function(options) {
  var o = $.extend({
        classes: '',
        fadeSpeed: 'slow',  // or in milliseconds (ms)
        maxCount: 5,        // maximum number of concurrently displayed stickers
        onClose: null,
        onShow: null,
        sticked: false,     // omit closing button and close by timeout
        text: '',
        ttl: 5000           // in milliseconds (ms)
      }, options),

      id = 'jq-stickrs',
      $stickers = $('#' + id),
      $sticker = $('<div class="jq-stickr"></div>'),
      endFunction = function() {
        var $sticker = $(this);
        if (typeof o.onClose == 'function') {
          o.onClose($sticker);
        }
        $sticker.remove();
      };

  if (!$stickers.length) {
    $stickers = $('<div class="jq-stickrs" id="' + id + '"></div>')
        .appendTo('body');
  }

  $sticker.html(o.text);
  if (o.classes) {
    $sticker.addClass(o.classes)
  }
  if (o.sticked) {
    $sticker.addClass('jq-stickr--sticked');
    $('<button class="jq-stickr__exit"></button>')
        .prependTo($sticker)
        .click(function() {
          $sticker.fadeOut(o.fadeSpeed, endFunction);
        });
  } else {
    setTimeout(function() {
      $sticker.fadeOut(o.fadeSpeed, endFunction);
    }, o.ttl);
  }
  $stickers.append($sticker);
  if (typeof o.onShow == 'function') {
    o.onShow($sticker);
  }

  if ($stickers.children().length > o.maxCount) {
    $stickers.children().first().slideUp(endFunction);
  }
  return $stickers;
};
