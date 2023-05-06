// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return(drivers.slice(0,2));
}

const returnLastTwoDrivers = (drivers) => {
    return(drivers.slice(2,5));
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) => {
    return (fare) => value * value;
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier *2;
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier *3;
}

function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}