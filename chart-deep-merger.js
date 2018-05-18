/** @private */
// eslint-disable-next-line no-unused-vars
var ChartDeepMerger = (() => class {

  static __isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  static __deepMerge(target, source) {
    if (this.__isObject(source) && this.__isObject(target)) {
      for (const key in source) {
        if (this.__isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {[key]: {}});
          }

          this.__deepMerge(target[key], source[key]);
        } else {
          Object.assign(target, {[key]: source[key]});
        }
      }
    }

    return target;
  }
})();
