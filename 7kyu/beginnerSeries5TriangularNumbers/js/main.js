function isTriangular(t) {
    let count = 0
    
    for (let n = 1; count <= t; n++){
      count += n
      if(count === t){
        return true
      }
    }
    return false
}

console.log(isTriangular(3))
console.log(isTriangular(7))