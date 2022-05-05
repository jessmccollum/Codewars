function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let yourSwimTime = pontoonDistance / youSpeed
    let sharkSwimTime = sharkDistance / sharkSpeed
    let swimDifference = 0
    if (dolphin === true) {
      sharkSwimTime = sharkSwimTime * 2 
    }
    if (sharkSwimTime > yourSwimTime) {
        return "Alive!"
      }
      return "Shark Bait!"
  }

console.log(shark(12, 50, 4, 8, true))
console.log(shark(7, 55, 4, 16, true))
console.log(shark(24, 0, 4, 8, true))