function n(n,t){var i=!0,o=!1;return function(){var c=arguments;o||(o=!0,setTimeout(function(){n.apply(void 0,[].slice.call(c)),o=!1},i?0:t),i=!1)}}function t(n,t){var i;return function(){var o=arguments;clearTimeout(i),i=setTimeout(function(){n.apply(void 0,[].slice.call(o))},t)}}export{t as debounce,n as throttle};
//# sourceMappingURL=stormcloud.module.js.map
