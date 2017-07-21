function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, arry ){
  var clone = arry.slice();
    for (var i = 1; i < clone.length; i++) {

      if (comparator(clone[ i - 1 ], clone[i]) == false) {
        clone.push(clone[i-1]);
        clone.splice((i-1), 1);
        i = 0;
      }
    }
    return clone;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
    if (auto1.year > auto2.year ||auto1.year === auto2.year) {
      return true;
    }
    else {
      return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
    var make1 = auto1.make.toLowerCase();
    var make2 = auto2.make.toLowerCase();

    if (make1 < make2 || make1 === make2) {
      return true;
    }

    else {
      return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
    var type1 = auto1.type.toLowerCase();
    var type2 = auto2.type.toLowerCase();
    var score1 = 0;
    var score2 = 0;
    var typeArray = ['roadster','pickup','suv','wagon'];
    for (var i = 0; i < typeArray.length; i++) {
      if (type1 === typeArray[i]) {
        score1 = i - 10;
      }

      if (type2 === typeArray[i]) {
        score2 = i - 10;
      }

    }
      if (score1 < score2) {
        return true;
      }
      if (score1 == score2) {
        return yearComparator(auto1, auto2);
      }
      else {
        return false;
      }
}
var test = sortArr(typeComparator, automobiles);


Automobile.prototype.logMe = function (boo) {
  if (boo == true) {
    console.log("Year:"+ this.year + " Make:" + this.make + " Model:" + this.model + " Type:" + this.type );
  }
  if (boo = false) {
    console.log("Year:"+ this.year + " Make:" + this.make + " Model:" + this.model);
  }
};

var test = sortArr(yearComparator, automobiles);
console.log('The cars sorted by year are:');
for (var i = 0; i < test.length; i++) {
  if (test[i].type > "") {
    test[i].logMe(true);
  }
  else {
    test[i].logMe(false);
  }
}
console.log('');
var test = sortArr(makeComparator,automobiles);
console.log('The cars sorted by make are:');

for (var i = 0; i < test.length; i++) {
  if (test[i].type > "") {
    test[i].logMe(true);
  }
  else {
    test[i].logMe(false);
  }
}
console.log('');
var test = sortArr(typeComparator,automobiles);
console.log('The cars sorted by type are:');

for (var i = 0; i < test.length; i++) {
  if (test[i].type > "") {
    test[i].logMe(true);
  }
  else {
    test[i].logMe(false);
  }
}
