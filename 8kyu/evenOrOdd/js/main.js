function even_or_odd(number) {
    number %=2
    if (number === 0) {
     return "Even"
    } else {
      return "Odd"
    }
  }

  console.log(even_or_odd(2))