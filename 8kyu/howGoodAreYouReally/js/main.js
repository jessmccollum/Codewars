function betterThanAverage(classPoints, yourPoints) {
    let classAvg, sum = 0
    
    for (let i = 0; i < classPoints.length; i++){
      sum += classPoints[i]
    }
    
    classAvg = sum / classPoints.length
    
    if (classAvg < yourPoints) {
      return true
    } 
    
    return false
  }

  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90]))