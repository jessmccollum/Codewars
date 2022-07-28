function makeNegative(num) {
    if (Math.sign(num) === 1) {
      return -num
    }
    return num
}

console.log(makeNegative(42))