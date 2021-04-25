//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

//new Date("1900-10-10").lastYear();
//'1899'
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date("1900-10-10").lastYear();
//'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
//console.log([1, 2, 3].map());
//1🗺, 2🗺, 3🗺

Array.prototype.map = function () {
  const tempArray = [];
  for (let item of this) {
    tempArray.push(item + "🗺");
  }
  return tempArray;
};

console.log([1, 2, 3].map());
