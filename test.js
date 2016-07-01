var __ = require('./dist/iterate.js');

console.log(__);

// Distinct Testing

// var intList = [ 1, 1, 2, 3, 3, 4 ];

// console.log(intList);
// console.log(__.distinct(intList));

// var intObj = { key1: 1, key2: 1, key3: 2, key4: 3, key5: 3, key6: 4 };

// console.log(intObj);
// console.log(__.distinct(intObj));

// Intersect Testing

// var intList2 = [ 1, 4, 5 ];
// var intObj2 = { key1: 2, key2: 3, key3: 20 };

// console.log(__.intersect(intList, intList2));
// console.log(__.intersect(intObj, intObj2));

// Type Testing

// console.log(__.is.number(9));
// console.log(__.is.number(0));
// console.log(__.is.nan(NaN));

// console.log('Match Test');

// console.log(__.match({}, []));
// console.log(__.match([ 2, 3, 4 ], [ "2", "3", "4" ]));
// console.log(__.match([ 2, 3, 4 ], [ "2", "3", "4" ], { explicit: true }));
// console.log(__.match({ array: [ 2, 3, 4 ] }, { array: [ "2", "3", "4" ] }));
// console.log(__.match({ array: [ 2, 3, 4 ] }, { array: [ "2", "3", "4" ] }, { explicit: true }));