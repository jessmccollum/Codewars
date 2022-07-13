function getSum( a,b )
{   let sum = a
    
    if (a == b) {
      return sum
    }
 
    while (a > b) {
      a--
      sum += a
    }
  
    while (a < b) {
      a++
      sum += a
    }
 
    return sum
  
}

console.log(getSum(0,-1))
console.log(getSum(2,2))
console.log(getSum(0,1))