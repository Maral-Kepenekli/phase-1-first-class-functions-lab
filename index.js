// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
 return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (drivers) {
 return drivers.slice(2, 4);
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
 return function (fare) {
  return fare * integer;
 }
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

function selectDifferentDrivers(drivers, selectingDrivers) {
 return selectingDrivers(drivers);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
