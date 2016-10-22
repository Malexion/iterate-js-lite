# iterate-js-lite

## Description

Base iterate-js library for the full setup see the extension iterate-js library.

## Installation

Install package with NPM and add it to your development dependencies:

`npm install iterate-js-lite`

Around 11kb uglified/minified.

## Usage

```javascript
var __ = require('iterate-js-lite');

// Iterate over everything
__.all([ 'hello', 'world' ], function(x) { console.log(x); });
__.all({ 'hello': 1, 'world': 2 }, function(x, y) { console.log(y); });

// Map array or objects
console.log(__.map([ 'hello', 'world' ], function(x) { return x; }));
// Map array or object to either or
console.log(__.map([ 'hello', 'world' ], function(x, y, z) { return { key: y, value: x }; }, { build: {} })); 
// Well suited for arrow functions in ecma 6
console.log(__.map([ 'hello', 'world' ], x => x));
console.log(__.map([ 'hello', 'world' ], (x, y) => ({ key: y, value: x }), { build: {} }));

// Evaluate anything
console.log(__.is.string({}));
console.log(__.is.number(''));
console.log(__.is.def(null)); // Boolean eval
console.log(__.is.set(0)); // Check for null, undefined and NaN

// Generate stuff
console.log(__.gen.password());
console.log(__.gen.password({ // will pull random characters in random order from the following
                    length: 16,
                    alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ",
                    ints: "0123456789",
                    special: "!@#$%^&*()+~|}{[]\:;?></="
                }));
console.log(__.gen.guid());
var store = {}; // Store them to prevent duplication
console.log(__.gen.guid({ map: store }));
console.log(store);
console.log(__.gen.guid({ seperator: '' })); // Change the seperator

// And more
__.all(__, function(x, y) { console.log(y); });
```

## String
Most valuable string functions

- `''.format()`

  A familiar string.format() function. Does not modify the original string but rather returns a new one.

- `'xyz'.contains('X', true)`

  A familiar string.contains() with an optional boolean to ignore case.

## Functions
Most valuable functions (16 not mentioned)

- `__.all(obj, func, all)`

  Iterates over any iterable object, arrays, objects, arguments and more.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, optionsObject).
  - `all:[Boolean]`
    Flag to turn off the hasOwnProperty() check.

- `__.class(construct, methods, inherit)`

  Class creator, allows the user to create simple inherited classes. Avoid inheriting primitives however.
  - `construct:[Function]`
    Constructor function, passed all arguments, to call super do the following:
    
    ```javascript
    function() {
      MyBaseClass.call(this, ...Extra Args Here...);
    }
    ```
  - `methods:[Object]`
    Object List of Function methods, example as follows.
    
    ```javascript
    {
      count: {
        get: function() { return this.length; },
        set: function(value) { this.length = value; }
      },
      each: function(func) {
        __.all(this, func);
      }
    }
    ```
  - `inherit:[Class/Array]`
    Class or array of classes you want to inherit from.

- `__.contains(obj, func)`

  Iterates over any iterable object to find an object or match a condition function.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Object/Function]`
    Function passed the following in order: (value, key, optionsObject). Must return true if item is found.

- `__.distinct(obj, func)`

  Iterates over any iterable object to find distinct items.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Object/Function]`
    Optional function passed the value of the iterated item. Must return a value to be checked against others (number/string prefered).

- `__.filter(obj, func)`

  Iterates over any object or array and will return a filtered down version.
  - `obj:[Object/Array]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, optionsObject). Must return true to keep the item.

- `__.fuse(obj1, obj2, options)`

  Fuses properties from obj2 onto obj1.
  - `obj1:[Object]`
    Item to be operated on.
  - `obj2:[Object]`
    Item to take from.
  - `options:[Object]`
    Contains the options { deep: false, all: false, handler: null }, handler being a function you can specify that will handle each value in the process, note that you must return a value from that function.

- `__.getType(obj)`

  Gets the base type of any object and returns it as a string: [Object], [String], [Array], [Boolean], etc.
  - `obj:[Object]`
    Item to retrieve the type of.

- `__.intersect(obj1, obj2, func)`

  Returns an array of shared values between the two objects/arrays compared.
  - `obj1:[Object/Array]`
    Item to be iterated over.
  - `obj2:[Object/Array]`
    Item to be iterated over.
  - `func:[Function]`
    Optional function passed the value of the iterated item. Must return a value to be checked against others (number/string prefered).

- `__.map(obj, func, options)`

  Iterates over any iterable object and can map to either an array or object.
  - `obj:[Object]`
    Item to be iterated over.
  - `func:[Function]`
    Function passed the following in order: (value, key, config). Config contains { stop: false, skip: false, pushMultiple: false }.
  - `options:[Object]`
    Base options, here you can pass in { manual: false, build: [] }, by utilizing the options you can populate it however you want.

- `__.prop(obj, path)`

  Safely follows the property chain to get the property, undefined if not found.
  - `obj:[Obj]`
    Object to search.
  - `path:[String]`
    Path string to get to the property, EX: 'id' or 'collection.user.id'.

- `__.search(obj, func, options)`

  Uses the most optimum method to search the object for the condition or object.
  - `obj:[Object]`
    Item to be searched.
  - `func:[Object/Function]`
    Object to be searched for or a Function passed the following in order: (value, key, optionsObject).
  - `options:[Object]`
    Base options, { default: null, all: false, getKey: false }.

- `__.sort(array, options)`

  Sorts the array based upon options given, can sort upon multiple options/keys or a single key.
  - `array:[Array]`
    Array to be sorted.
  - `options:[Object/Array]`
    Object or array of objects with two properties, EX: { key: function(x) { return x; }, dir: 'asc' }. // dir set to anything else will be 'desc'.


## Formats called with __.format({...});

- `__.format({ type: 'padright', places: 6, value: 90, delim: '0' })`
  
  Returns a padded string matching the number of places in length with delim padding applied on the right side.

- `__.format({ type: 'padleft', places: 6, value: 90, delim: '0' })`
  
  Returns a padded string matching the number of places in length with delim padding applied on the left side.


## Type detection under __.is.[...]

- `__.is.def(value)`

Boolean evaluate the passed value.

- `__.is.set(value)`

Returns true if value is not undefined, null or NaN.

- `__.is.sameType(var1, var2)`

Returns true if both are the same type of javascript object.

- `__.is.function(object)`

True if object is a function

- `__.is.object(object)`

True if object is an object.

- `__.is.array(object)`

True if object is an array.

- `__.is.args(object)`

True if object is an arguments object.

- `__.is.bool(object)`

True if object is a Boolean flag.

- `__.is.string(object)`

True if object is a string.

- `__.is.number(object)`

True if object is a number as is not NaN.

- `__.is.date(object)`

True if object is a date object.

- `__.is.null(object)`

True if object is null.

- `__.is.undefined(object)`

True if object is undefined.

- `__.is.nan(object)`

True if object is of type integer and isNaN.


## Calculations under __.math.[...]

- `__.math.roundTo(value, step)`

Rounds the value by the step using Math.round().

- `__.math.roundDownTo(value, step)`

Rounds the value by the step using Math.floor().

- `__.math.roundUpTo(value, step)`

Rounds the value by the step using Math.ceil().

- `__.math.median(values, func)`

Calculates the median from an array, function to get the value from each iteration is optional.

- `__.math.sum(values, func)`

Calculates the sum of the values from an array, function to get the value from each iteration is optional.

- `__.math.average(values, func)`

Calculates the average of the values from an array, function to get the value from each iteration is optional.

- `__.math.max(values, func)`

Calculates the max of the values from an array, function to get the value from each iteration is optional.

- `__.math.min(values, func)`

Calculates the min of the values from an array, function to get the value from each iteration is optional.

- `__.math.between(value, min, max)`

Calculates to make sure the value is within the min and max and returns the value otherwise it returns the min or max.

- `__.math.percentages(values, func)`

Calculates the sum and then the percentage of that sum from the values from an array, function to get the value from each iteration is optional.


## Classes under __.lib.[...]

- `new __.lib.Overwrite()`

  Payload delivery for __.fuse() while deep copying to overwrite an array or object despite the deep iterate flag.

- `new __.lib.Updatable()`

  Signifies to the __.fuse() method that this class or any class that inherits this should be updated via myObject.update(params) instead of overwritten or replaced.
