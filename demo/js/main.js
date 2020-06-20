import {throttle, debounce} from "../../dist/stormcloud.modern.js";

let consoleLogThrottled = throttle(function () {console.log("throttle")}, 1000);
let consoleLogDebounced = debounce(function () {console.log("debounce")}, 1000);

window.addEventListener('scroll', function(e) {
  consoleLogThrottled();
  consoleLogDebounced();
});

window.throttle = throttle;
window.debounce = debounce;