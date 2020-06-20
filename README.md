# Stormcloud

A simple library for delaying function calls.

Includes `throttle` and `debounce`. 

[Read about throttle and debounce](https://css-tricks.com/debouncing-throttling-explained-examples/)

### Throttle

```javascript
let funcThrottled = throttle(func, 500);
```

Even if `funcThrottled` is called more often than every `500` milliseconds, it will be slowed down to being called every `500` milliseconds.

### Debounce

```javascript
let funcDebounced = debounce(func, 500);
```

If `funcDebounced` is called more often than every `500` milliseconds, it will not be called until there's a gap of more than `500` milliseconds. Then it will be called a single time.