// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
  
function fuzzyMatch(drivers, letters) {
    const lowerLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerLetters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}


  