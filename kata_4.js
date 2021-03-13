const instructorWithLongestName = function(instructors) {
  // Put your solution here  
  let longestName = '';

  for (let i = 0; i < instructors.length; i++) {
    if(longestName.length < instructors[i].name.length) {
      longestName = instructors[i].name;
    }
  }

  return longestName;
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

