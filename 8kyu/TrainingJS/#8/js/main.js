function howManydays(month){
    var days;
    switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10: 
      case 12: 
        days=31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days=30;
        break;
      case 2:
        days=28;
        break;
    }
    return days;
  }

console.log(howManydays(1))
console.log(howManydays(2))
console.log(howManydays(3))
console.log(howManydays(4))
console.log(howManydays(11))
console.log(howManydays(10))