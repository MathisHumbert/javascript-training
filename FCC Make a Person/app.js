// My Way
var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function () {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(' ')[1];
  };
  this.getFullName = function () {
    return firstAndLast;
  };
  this.setFirstName = function (first) {
    firstAndLast = firstAndLast.split(' ');
    firstAndLast[0] = first;
    firstAndLast = firstAndLast.join(' ');
    return firstAndLast;
  };
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(' ');
    firstAndLast[1] = last;
    firstAndLast = firstAndLast.join(' ');
    return firstAndLast;
  };
  this.setFullName = function (newFullName) {
    firstAndLast = newFullName;
    return firstAndLast;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
