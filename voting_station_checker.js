const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  
  let appropriateStations = [];

  for (let station of stations) {
    const capacity = station[1];

    if(capacity >= 20) {    
      if (station[2] === 'school' || station[2] === 'community centre'){
        appropriateStations.push(station[0]);
      }
    }
  }
  return appropriateStations;
}

console.log(chooseStations(stations));
