function isDivideBy(number, a, b) {
    if (number % a === 0) {
      if (number % b === 0) {
        return true
      } 
    }
    return false
  }

console.log(isDivideBy(-12, 2, -6))
console.log(isDivideBy(-12, 2, -5))