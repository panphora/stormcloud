// throttle(func, 350);
// debounce(func, 350);

export function throttle(func, timeout) {
  let isFirstCall = true;
  let hasQueuedFunc = false;
  return (...args) => {
    if (!hasQueuedFunc) {
      hasQueuedFunc = true;
      setTimeout(() => {
        func(...args);
        hasQueuedFunc = false;
      }, isFirstCall ? 0 : timeout);
      isFirstCall = false;
    }
  }
}

export function debounce (func, timeout) {
  let queueTimer;
  return (...args) => {
    clearTimeout(queueTimer);
    queueTimer = setTimeout(() => {
      func(...args);
    }, timeout);
  }
}

