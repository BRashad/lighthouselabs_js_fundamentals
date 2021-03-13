const camelCase = (input) => {
  return input.replace(/\W+(.)/g, function(match, str){
      return str.toUpperCase();
    });
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

