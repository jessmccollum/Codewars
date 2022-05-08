function past(h, m, s){
    let minutes = h * 60 + m
    let seconds = minutes * 60 + s
    let milliseconds = seconds * 1000
    return milliseconds
}

console.log(past(1,1,1))