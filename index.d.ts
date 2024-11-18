/**
 * Return the index where to insert item x in array a, assuming a is sorted.
 *
 * The return value i is such that all elements in a[:i] have e <= x,
 * and all elements in a[i:] have e > x. If x already appears in the
 * array, a.splice(i, 0, x) will insert just after the rightmost x already there.
 *
 * @param {Array<T>} a - The sorted array in which to search for the index.
 * @param {T} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number | null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {(item: T) => U | null} [key=null] - A function that extracts a comparison key from each element in the array.
 * @returns {number} - The index where the item should be inserted.
 */
declare function bisectRight<T, U>(a: Array<T>, x: T, lo?: number, hi?: number | null, key?: (item: T) => U | null): number;

/**
 * Return the index where to insert item x in array a, assuming a is sorted.
 *
 * The return value i is such that all elements in a[:i] have e < x,
 * and all elements in a[i:] have e >= x. If x already appears in the
 * array, a.splice(i, 0, x) will insert just before the leftmost x already there.
 *
 * @param {Array<T>} a - The sorted array in which to search for the index.
 * @param {T} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number | null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {(item: T) => U | null} [key=null] - A function that extracts a comparison key from each element in the array.
 * @returns {number} - The index where the item should be inserted.
 */
declare function bisectLeft<T, U>(a: Array<T>, x: T, lo?: number, hi?: number | null, key?: (item: T) => U | null): number;

/**
 * Insert item x into array a and keep it sorted assuming a is already sorted.
 *
 * If x is already in the array, it will be inserted to the right of the rightmost x.
 *
 * @param {Array<T>} a - The sorted array in which to insert the item.
 * @param {T} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number | null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {(item: T) => U | null} [key=null] - A function that extracts a comparison key from each element in the array.
 */
declare function insortRight<T, U>(a: Array<T>, x: T, lo?: number, hi?: number | null, key?: (item: T) => U | null): void;

/**
 * Insert item x into array a and keep it sorted assuming a is already sorted.
 *
 * If x is already in the array, it will be inserted to the left of the leftmost x.
 *
 * @param {Array<T>} a - The sorted array in which to insert the item.
 * @param {T} x - The item to be inserted.
 * @param {number} [lo=0] - The lower bound of the slice to search.
 * @param {number | null} [hi=null] - The upper bound of the slice to search. Defaults to array length.
 * @param {(item: T) => U | null} [key=null] - A function that extracts a comparison key from each element in the array.
 */
declare function insortLeft<T, U>(a: Array<T>, x: T, lo?: number, hi?: number | null, key?: (item: T) => U | null): void;

// Aliases
declare const bisect: typeof bisectRight;
declare const insort: typeof insortRight;

// Exports module
export { bisect, insort, insortRight, insortLeft, bisectRight, bisectLeft };
