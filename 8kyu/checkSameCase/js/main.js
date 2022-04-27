function sameCase(a, b){
    let caseUpa = a.toUpperCase()
    let caseUpb = b.toUpperCase()
    if (!a.match(/[a-zA-Z]/g) || !b.match(/[a-zA-Z]/g)) {
        return -1;
    }
    if (a === caseUpa) {
      if (b === caseUpb) {
        return 1
      }
    } else if (b != caseUpb) {
        return 1
    }
    return 0
 }

console.log(sameCase('a', 'B'));
console.log(sameCase('a', 'b'));
console.log(sameCase('A', 'b'));
console.log(sameCase(' ', 'b'));
console.log(sameCase('a', ':'));