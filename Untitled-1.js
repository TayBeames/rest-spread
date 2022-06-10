const filterOutOdds = ( ...args) => args.filter(v => v % 2 === 0);

const findMin = ( ...args) => args.min( ...args);

const merge = (obj1, obj2) => ({ ...obj1, ...obj2});

const doubleAndRet = (arr, ...args) => [ ...args, ...args.map(v => v*2)];

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length);
    return [ ...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2)=> {
    return [ ...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
return { ...obj, [key]: val};
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj}
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = { ...obj}
    newObj[key] = val;
    return newObj;
}