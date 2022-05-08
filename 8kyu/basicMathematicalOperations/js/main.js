function basicOp(operation, value1, value2) {
    let calc = 0
    
    switch (operation) {
      case '+':
        calc = value1 + value2
        break
      case '-':
        calc = value1 - value2
        break
      case '*':
        calc = value1 * value2
        break
      case '/':
        calc = value1 / value2
        break
    }
    return calc
}

console.log(basicOp('+', 4, 7))