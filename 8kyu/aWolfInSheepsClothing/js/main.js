function warnTheSheep(queue) {
    let end = queue.length - 1
    let num;
    if (queue[end] === 'wolf') {
        return "Pls go away and stop eating my sheep"
    }
    
    for (let i = 0; i <= end; i++) {
        if (queue[i] === "wolf") {
            num = end - i 
            return "Oi! Sheep number " + num + "! You are about to be eaten by a wolf!"
        }
    }
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep"])) //2
console.log(warnTheSheep(["sheep", "wolf", "sheep"])) //1
console.log(warnTheSheep(["sheep", "wolf"]))