/**
 * Return the index where to insert item x in array a, assuming a is sorted.
 *
 * The return value i is such that all elements in a[:i] have e <= x,
 * and all elements in a[i:] have e > x. If x already appears in the
 * array, a.splice(i, 0, x) will insert just after the rightmost x already there.
 *
 * @param {Array} a - The sorted array in which to search for the index.
 * @param {*} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number|null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {Function|null} [key=null] - A function that extracts a comparison key from each element in the array.
 * @returns {number} - The index where the item should be inserted.
 */
function bisectRight(a, x, lo = 0, hi = null, key = null) {
  if (lo < 0) {
    throw new Error("lo must be non-negative");
  }
  if (hi === null) {
    hi = a.length;
  }

  if (key === null) {
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (x < a[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
  } else {
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (x < key(a[mid])) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
  }

  return lo;
}

/**
 * Return the index where to insert item x in array a, assuming a is sorted.
 *
 * The return value i is such that all elements in a[:i] have e < x,
 * and all elements in a[i:] have e >= x. If x already appears in the
 * array, a.splice(i, 0, x) will insert just before the leftmost x already there.
 *
 * @param {Array} a - The sorted array in which to search for the index.
 * @param {*} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number|null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {Function|null} [key=null] - A function that extracts a comparison key from each element in the array.
 * @returns {number} - The index where the item should be inserted.
 */
function bisectLeft(a, x, lo = 0, hi = null, key = null) {
  if (lo < 0) {
    throw new Error("lo must be non-negative");
  }
  if (hi === null) {
    hi = a.length;
  }

  if (key === null) {
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (a[mid] < x) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
  } else {
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (key(a[mid]) < x) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
  }

  return lo;
}

/**
 * Insert item x into array a and keep it sorted assuming a is already sorted.
 *
 * If x is already in the array, it will be inserted to the right of the rightmost x.
 *
 * @param {Array} a - The sorted array in which to insert the item.
 * @param {*} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number|null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {Function|null} [key=null] - A function that extracts a comparison key from each element in the array.
 */
function insortRight(a, x, lo = 0, hi = null, key = null) {
  if (key === null) {
    lo = bisectRight(a, x, lo, hi);
  } else {
    lo = bisectRight(a, key(x), lo, hi, key);
  }
  a.splice(lo, 0, x);
}

/**
 * Insert item x into array a and keep it sorted assuming a is already sorted.
 *
 * If x is already in the array, it will be inserted to the left of the leftmost x.
 *
 * @param {Array} a - The sorted array in which to insert the item.
 * @param {*} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number|null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {Function|null} [key=null] - A function that extracts a comparison key from each element in the array.
 */
function insortLeft(a, x, lo = 0, hi = null, key = null) {
  if (key === null) {
    lo = bisectLeft(a, x, lo, hi);
  } else {
    lo = bisectLeft(a, key(x), lo, hi, key);
  }
  a.splice(lo, 0, x);
}

// Aliases
const bisect = bisectRight;
const insort = insortRight;

// Exports module;
module.exports = { bisect, insort, insortRight, insortLeft, bisectRight, bisectLeft };
