function points(games) {
    let score = 0
    let matchScore = []
    
    for (let i = 0; i < games.length; i++){
      matchScore = games[i].split(':')
      if (matchScore[0] > matchScore[1]) {
        score += 3
      } else if (matchScore[0] === matchScore[1]) {
        score += 1
      }
    }
    
    return score
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))