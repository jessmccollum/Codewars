function elevator(left, right, call){
    let leftDistance = Math.abs(left - call)
    let rightDistance = Math.abs(right - call)
    
    if (leftDistance < rightDistance) {
      return 'left'
    }
    return 'right'  
}

console.log(elevator(0,1,0))
console.log(elevator(0,1,1))