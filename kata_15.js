const organizeInstructors = function(instructors) {
  // Put your solution here

  let courses = { 
    iOS: [],
    Web: [],
    Blockchain: []
  }

  for (let key in instructors) {
    while(true) {
      if(instructors[key].course === 'iOS'){
        courses.iOS.push(instructors[key].name)
      } else if(instructors[key].course === 'Web'){
        courses.Web.push(instructors[key].name)
      }else if(instructors[key].course === 'Blockchain'){
        courses.Blockchain.push(instructors[key].name)
      }
      break;
    }
  }

  for (let course in courses) {
    if(courses[course].length === 0){
      delete courses[course];
    }
  }


return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));