function getAverage(marks){
    let avg, sum = 0
    
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i] 
    }
    
    avg =  Math.floor(sum/marks.length)
    
    return avg
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5]))