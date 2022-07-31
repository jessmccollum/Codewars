function repeatStr (n, s) {
    let str = s
    for (let i = 1; i < n; i++) {
      str += s
    }
    return str
}

console.log(repeatStr(2, "ha "))