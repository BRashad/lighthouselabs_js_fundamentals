const checkAir = function (samples, threshold) {
  // Code here!
  let dirty = 0;

  for (i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      dirty ++;
    }
  }

  if (threshold < dirty/10){
    return "Polluted";
  } else if (threshold > dirty/10) {
    return "Clean";
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))