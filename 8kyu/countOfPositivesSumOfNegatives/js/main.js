function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    let arr = []
    
    if (input === [] || input === null || input === undefined) {
      return arr
    } 
    
    for (let i=0; i < input.length; i++) {
      if (input[i] < 0) {
        sum += input[i]
      } else if (input[i] > 0){
          count++
        }
      }
    
      if (count === 0 && sum === 0) {
        return arr
      }
    
      return arr = [count, sum]
    }
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))