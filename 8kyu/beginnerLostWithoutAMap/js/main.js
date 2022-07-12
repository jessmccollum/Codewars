function maps(x){
    let y = []
    
    for (let i = 0; i < x.length; i++) {
      y[i] = x[i] * 2
    }
  
    return y
}

console.log(maps([1, 2, 3]))
console.log(maps([5, 12, 30]))

