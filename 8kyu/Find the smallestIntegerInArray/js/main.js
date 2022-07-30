class SmallestIntegerFinder {
    findSmallestInt(args) {
      let tiny = args[0];
      for(let i = 0; i < args.length; i++ ) {
        if (tiny > args[i]) {
          tiny = args[i]
        }
      }
      return tiny
    }
}

console.log(findSmallestInt([1,56,232,12,8]))