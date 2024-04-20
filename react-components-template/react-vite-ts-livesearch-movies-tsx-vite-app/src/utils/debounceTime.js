const debounceTime = (() => {
  let timer = null;

  return (cb, ms) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setTimeout(() => cb(), ms)
  }
})();

export default debounceTime;