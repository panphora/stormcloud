exports.debounce=function(t,e){var n;return function(){var o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(void 0,[].slice.call(o))},e)}},exports.throttle=function(t,e){var n=!0,o=!1;return function(){var i=arguments;o||(o=!0,setTimeout(function(){t.apply(void 0,[].slice.call(i)),o=!1},n?0:e),n=!1)}};
//# sourceMappingURL=stormcloud.js.map
