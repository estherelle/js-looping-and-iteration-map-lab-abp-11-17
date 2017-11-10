// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(value){ return value.toLowerCase(); });
}

function nameToAttributes(drivers) {
  const names = drivers.map(function (value) {
    value = value.split(' ');
    console.log(value);
    return Object.assign({}, {firstName: value[0], lastName: value[1]});
    // let obj = Object.assign({}, { firstName: names[0], lastName: names[1] });
    // console.log(obj);

  });
  console.log(names);
  return names;
}

function attributesToPhrase(drivers) {
  const locs = drivers.map(function(value) {
    console.log(value);
    console.log(`${value.name} is from ${value.hometown}`);
    return `${value.name} is from ${value.hometown}`;
  })
  return locs;
}
