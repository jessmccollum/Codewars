function grow(x){
    let y = 1
    for (let i = 0; i < x.length; i++) {
        y *= x[i]
    }
    return y
}

console.log(grow([1, 2, 3]))