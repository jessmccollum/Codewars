var countSheep = function (num){
    let sheepCount = ""
    for(let i = 1; i <= num; i++){
      sheepCount += i + " sheep..." 
    }
    return sheepCount
  }

  console.log(countSheep(1))
  console.log(countSheep(3))