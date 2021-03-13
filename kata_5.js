const urlEncode = function(text) {
  // Put your solution here
  
  let spacefree = text.trim();
  let reaplacedSpace= spacefree.replace(/ /g, '20%');
  
return reaplacedSpace;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));