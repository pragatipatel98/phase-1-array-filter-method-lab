// Code your solution here
function findMatching(collection, name) {
    const matchingDriver = [];
    for (let driver of collection) {
      if (driver === name || driver.toUpperCase() == name.toUpperCase()) {
        matchingDriver.push(driver)
      }
    }
    return matchingDriver;
}
  
function fuzzyMatch(collection, name) {
    const matchingDriver = [];
    for (let driver of collection) {
      if (driver[0] === name[0] && driver[1] === name[1]) {
        matchingDriver.push(driver);
      }
    }
    return matchingDriver;
}
  
function matchName(collection, name) {
    const matchingDrivers = [];
    for (let driver of collection) {
      if (driver.name ===  name) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
}