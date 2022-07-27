function multipleOfIndex(array) {
    let multiArr = []
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % i === 0) {
        multiArr.push(array[i])
      }
    }
    
    return multiArr
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))