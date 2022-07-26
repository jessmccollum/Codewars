function sumOfDifferences(arr) {
    let dif = 0
    let sum = 0
    let next = 0
    
    arr = arr.sort((a, b) => a - b).reverse()
  
    for (let i = 0; i < arr.length -1; i++) {
      next = i + 1
      dif = arr[i] - arr[next]
      sum += Math.abs(dif)
    } 
    
    return sum
}

  console.log(sumOfDifferences([1, 2, 10]))