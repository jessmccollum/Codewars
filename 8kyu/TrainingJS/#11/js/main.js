function grabDoll(dolls){
    var bag=[];
    //coding here
    let i;
    for (i in dolls) {
      if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
        bag.push(dolls[i])
      } else continue;
      if (bag.length > 2) {
        break;
      }
    }
    return bag;
  }

console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]))
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]))