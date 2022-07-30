function countBy(x, n) {
    let z = [x];
    
    for (let i = 1; i < n; i++) {
      z[i] = z[i-1] + x
    }
    
    return z;
}

console.log(countBy(1,10))