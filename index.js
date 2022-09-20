// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(array){
    return array.slice(2);
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareDoubler = function(fare){
    return fare*2;

};
const fareTripler = function(fare){
    return fare*3;

};
function createFareMultiplier(fare) {
    fareDoubler(fare)
    fareTripler(fare)
    return function () {
        return fare*fare
     }
    
}
createFareMultiplier(5)

function selectDifferentDrivers(drivers,func) {
    return func(drivers);
    
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers())
