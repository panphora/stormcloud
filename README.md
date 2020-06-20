# Stormcloud

A simple library for delaying function calls.

Includes `throttle` and `debounce`. 

[Read about throttle and debounce](https://css-tricks.com/debouncing-throttling-explained-examples/)

## Demo

[See It in Action](https://stormcloud.davidmiranda.info/demo/)

## Install

```
npm install stormcloud
```

## How to Use

```js
import {throttle, debounce} from "stormcloud";

let consoleLogThrottled = throttle(function () {
  console.log("throttle")
}, 1000);

let consoleLogDebounced = debounce(function () {
  console.log("debounce")
}, 1000);

window.addEventListener('scroll', function(e) {
  consoleLogThrottled();
  consoleLogDebounced();
});
```

## How it Works

### `throttle`

```javascript
let throttledFunction = throttle(originalFunction, 500);
```

If `throttledFunction` is called more often than every `500` milliseconds, it will be slowed down to being called every `500` milliseconds.

### `debounce`

```javascript
let debouncedFunction = debounce(originalFunction, 500);
```

If `debouncedFunction` is called more often than every `500` milliseconds, it will not be called until there's a gap of more than `500` milliseconds between calls.

## License

MIT

## Happy Coding ✌️