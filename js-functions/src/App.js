import React from 'react';
import './App.css';

// Implement your version of Array methods forEach, map, filter and reduce in vanilla JavaScript

// forEach, when call arr.myEach, 'this' is arr, and this[i] is every item
Array.prototype.myEach = function (callback) {
  for(let i=0; i< this.length; i++){
    callback(this[i], i, this);
  }
};
const arr = [20, 2, 4];
arr.myEach(item => console.log(item));

// map
Array.prototype.myMap = function (callback) {
  const out = [];
  for(let i=0; i< this.length; i++){
    out.push(callback(this[i], i, this));
  }
  return out;
}
const mapResult = arr.myMap(item => '===' + item);
console.log(mapResult);

// filter
Array.prototype.myFilter = function (callback) {
  const out = [];
  for(let i=0; i< this.length; i++){
    if( callback(this[i], i, this)){
      out.push(this[i]);
    }
  }
  return out;
}
const filterResult = arr.myFilter(item => item !== 2);
console.log(filterResult); // [20, 4]

// reduce
Array.prototype.myReduce = function (callback, initValue){
  let acc = initValue;
  for(let i=0; i< this.length; i++){
    if(acc !== undefined){
      acc = callback(acc, this[i], i, this);
    } else {
      // if no init value provided, reduce uses first value as previous value
      acc = this[i];
    }
  }
  return acc;
}
const sum1 = filterResult.myReduce((acc, item) => {
  return acc + item*2;
}, 0);
console.log(sum1); // 48
const sum2 = filterResult.myReduce((acc, item) => {
  return acc + item*2;
});
console.log(sum2); // 28

// App
function App() {
  return (
    <div className='App'>
      <h1>JS Functions</h1>
    </div>
  );
}

export default App;
