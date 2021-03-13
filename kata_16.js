function makeCase(str, type) {
  //
  if(['pascal', 'camel'].includes(type)){
    str = (str + '').replace(/^([a-z])|\s+([a-z])/g, $1 => $1.toUpperCase()).replace(/ /g, '')
    return str.charAt(0)[type === 'pascal' ? 'toUpperCase' : 'toLowerCase']() + str.slice(1)
  }

  if (type === 'snake') {
    return str.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_'); 
  }

  if (type === 'kebab') {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2")
             .replace(/\s+/g, '-')
             .toLowerCase();
  }
  if (type === 'title') { 
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  if (type === 'vowel') {
    return str.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
  }
  if (type === 'consonant') { 
    return str.split('').reduce((a, c) => a + (/[bcdfghjklmnpqrstvwxyz]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
  }
  

  if(type[0] === 'upper') {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.toUpperCase();
  });
  }
  
   if(type[1] === 'snake') { 
    
    return str.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_'); 

   }
  return str;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));