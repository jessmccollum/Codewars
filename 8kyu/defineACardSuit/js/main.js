function defineSuit(card) {
    switch (card[card.length - 1]) {
        case '♣':
          return 'clubs'
        case '♦':
          return 'diamonds'
        case '♥':
          return 'hearts'
        case '♠':
          return 'spades'
    }
}

console.log(defineSuit('3♣'))
console.log(defineSuit('4♠'))
console.log(defineSuit('5♥'))
console.log(defineSuit('10♦'))