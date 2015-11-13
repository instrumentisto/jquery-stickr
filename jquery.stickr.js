/*!
 * jQuery.stickr plugin v0.1.0
 * https://github.com/instrumentisto/jquery-stickr
 *
 * Copyright 2015 Instrumentisto Team (https://github.com/instrumentisto)
 * Released under the MIT license
 * http://jquery.org/license
 */

$.stickr = function(options) {
  var o = $.extend({
        afterOpen: null,
        beforeClose: null,
        classes: '',
        closingDuration: 0,  // in milliseconds (ms)
        group: 'jq-stickrs',
        maxCount: 5,  // maximum number of concurrently displayed stickers
        message: '',
        ttl: 0,       // in milliseconds (ms)
        withCloseButton: true
      }, options),

      $stickers = o.group instanceof jQuery ? o.group : $('#' + o.group),
      $sticker = $('<div class="jq-stickr"></div>'),

      isClosing = false,
      close = function($sticker) {
        if ($sticker.data('isClosing')) {
          return;
        }
        $sticker.data('isClosing', true);
        if (typeof o.beforeClose === 'function') {
          o.beforeClose($sticker);
        }
        setTimeout(function() {
          $sticker.remove();
        }, o.closingDuration);
      };

  if (!$stickers.length && !(o.group instanceof jQuery)) {
    $stickers = $('<div class="jq-stickrs" id="' + o.group + '"></div>')
        .appendTo('body');
  }

  $sticker.html(o.message);
  if (o.classes) {
    $sticker.addClass(o.classes)
  }
  if (o.withCloseButton) {
    $sticker
        .addClass('jq-stickr--closable')
        .prepend(
            $('<button class="jq-stickr__close"></button>')
                .click(function() {
                  close($sticker);
                }));
  }
  if (o.ttl > 0) {
    setTimeout(function() {
      close($sticker);
    }, o.ttl);
  }

  $stickers.append($sticker);
  if ($stickers.children().length > o.maxCount) {
    close($stickers.children().first());
  }

  if (typeof o.afterOpen === 'function') {
    // Dirty hack to be sure that browser has rendered $sticker element.
    // It is 5ms, because setTimeout(function() {}, 0) produces races and
    // sometimes timeout fires before $sticker element is rendered.
    // Also, window.requestAnimationFrame() solution is not used
    // due to bad browsers support at the moment.
    setTimeout(function() {
      o.afterOpen($sticker);
    }, 5);
  }

  return $sticker;
};
