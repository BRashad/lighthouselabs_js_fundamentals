const calculateRectangleArea = (length, width) => {
  if(length < 0 || width < 0) {
    return undefined;
  } else { 
    return length * width;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

const calculateTriangleArea = (base, height) => {
  if(base < 0 || height < 0) {
    return undefined;
  } else { 
    return base * height / 2;
  }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined


const calculateCircleArea = (radius) => {
  if(radius < 0) {
    return undefined;
  } else return (radius * radius * Math.PI);
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined