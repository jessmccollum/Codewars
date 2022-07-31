function find_average(array) {
    let sum = 0
    let avg = 0
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    
    if (sum > 0) {
      avg = sum/array.length
    }
    
    return avg
}

console.log(find_average([1,2,3]))