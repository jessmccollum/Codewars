const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l * w
    } else {
      return l + l + w + w
    }
  };


console.log(areaOrPerimeter(6, 10))
console.log(areaOrPerimeter(3, 3))