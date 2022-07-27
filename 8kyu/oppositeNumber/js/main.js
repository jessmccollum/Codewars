function opposite(number) {
    if(Math.sign(number) === -1) {
      return Math.abs(number)
    } else {
      return -number
    }
}

console.log(opposite(1))