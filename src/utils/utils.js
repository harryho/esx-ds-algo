// import deepEqual from "deep-equal";

export const Utils = {
  /**
   * Compare parameters a and b
   * @param {*} a
   * @param {*} b
   * @return 0 if a = b,  1 if a > b or  -1 if a < b.
   * @throws Error if a and b are not the same data type
   * as nubmer, string and object
   */
 compare (a, b) {
    if (this.equals(a, b)) return 0;

    if (
      (typeof a == "number" && typeof b == "number") ||
      (typeof a == "string" && typeof b == "string")
    ) {
      return a > b ? 1 : a < b ? -1 : 0;
    }

    // Date Time or object  comparison
    if (a instanceof Object && b instanceof Object) {
      if (JSON.stringify(a) > JSON.stringify(b)) {
        return 1;
      } else if (JSON.stringify(a) > JSON.stringify(b)) {
        return -1;
      } else return 0;
    }

    throw new Error("Can not compare");
  },

  swap(items, left, right)  {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  },

  equals  (a, b) {
    if (a === b) return true;

    const arrA = Array.isArray(a);
    const arrB = Array.isArray(b);
    let i = 0;

    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) if (!this.equals(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && typeof a === "object" && typeof b === "object") {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) return false;

      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;

      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;

      for (i = 0; i < keys.length; i++)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = 0; i < keys.length; i++)
        if (!this.equals(a[keys[i]], b[keys[i]])) return false;

      return true;
    }

    return false;
  }
}