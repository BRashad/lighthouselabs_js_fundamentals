const urlDecode = function(text) {
  // Put your solution here
    let finalOutput = {};
    let strings = [];
    let values = [];
    let str1 = text.replace(/%20/g, " ");
    let str2 = str1.split("&");
    for (let i = 0; i < str2.length; i++) {
      strings = str2[i].slice(0,str2[i].search("="));
      values = str2[i].slice((str2[i].search("=")+1),str2[i].length);
      finalOutput[strings] = values;
    }
    return finalOutput;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);