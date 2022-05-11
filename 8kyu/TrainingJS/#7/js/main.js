function saleHotdogs(n){
    return n < 5 ? 100*n : n >= 5 && n < 10 ? 95*n : 90*n;
}

console.log(saleHotdogs(1))
console.log(saleHotdogs(5))
console.log(saleHotdogs(4))
console.log(saleHotdogs(6))
console.log(saleHotdogs(10))