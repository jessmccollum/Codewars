function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleSonAge = sonYearsOld * 2
    let yearsAgo
    
    if (dadYearsOld > doubleSonAge) {
      yearsAgo = dadYearsOld - doubleSonAge
    } else if (dadYearsOld <= doubleSonAge) {
      yearsAgo = doubleSonAge - dadYearsOld
    }
    
    return yearsAgo
  }


console.log(twiceAsOld(43, 18))
console.log(twiceAsOld(40, 22))