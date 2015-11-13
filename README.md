# jQuery.stickr plugin
<img align="right" src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30">
[![GitHub release](https://img.shields.io/github/release/instrumentisto/jquery-stickr.svg)](https://github.com/instrumentisto/jquery-stickr)
[![Bower version](https://img.shields.io/bower/v/jquery-stickr.svg)](https://github.com/instrumentisto/jquery-stickr)
[![Bower license](https://img.shields.io/bower/l/jquery-stickr.svg)](http://docs.jquery.com/License)
[![Dependency Status](https://gemnasium.com/instrumentisto/jquery-stickr.svg)](https://gemnasium.com/instrumentisto/jquery-stickr)

jQuery plugin that allows to create lightweight stickers on HTML page.
You may use them for error messages, system notifications and
a lot of other UI stuff.


## Installation
Include script *after* the jQuery library: 
```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.stickr.js"></script>
<link rel="stylesheet" href="/path/to/jquery.stickr.css">
```


## Usage
Plugin provides next API:
```javascript
$sticker = $.stickr({
  afterOpen: function($sticker) {
    console.log($sticker, 'is rendered');
  },
  beforeClose: function($sticker) {
    console.log($sticker, 'will be closed in 500 ms');
  },
  classes: 'some additional classes here',
  closingDuration: 500,   // default is 0
  group: 'my-stickrs',    // or $('#my-stickrs'), default is 'jq-stickrs'
  message: '<i>text<br>to be displayed</i>',
  ttl: 5000,              // default is 0 which means "forever"
  withCloseButton: false  // do not draw "Close" button, default is true
});
```
Checkout `demo.html` for more interactive examples of usage.


## Stylization
No direct styles manipulation are applied from JS code. Instead of that, JS code
of plugin manipulates only with classes of elements, so visual behaviour of
elements can be fully reimplemented via CSS styles as desired.  
You may implement your own total stylization giving desired styles for
`.jq-stickrs`, `.jq-stickr`, `.jq-stickr--closable` and `jq-stickr__close`
classes, just check `jquery.stickr.css` to see how they fit to each other.
Or you may use already defined styles in `jquery.stickr.css` as starting point.
