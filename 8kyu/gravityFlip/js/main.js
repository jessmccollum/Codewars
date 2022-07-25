const flip=(d, a)=>{
    if (d === 'R') {
      return a.sort((a, b) => a - b)
    } 
    if (d === 'L') {
      return a.sort((a, b) => a - b).reverse()
    }
}

console.log(flip('R', [3, 2, 1, 2]))
console.log(flip('L', [13, 2, 4, 7, 93 ]))
