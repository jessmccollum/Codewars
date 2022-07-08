function setAlarm(employed, vacation){
    if (employed === true) {
      if (vacation === false) {
        return true
      }
    }
    return false
  }

  console.log(setAlarm(true, false))
  console.log(setAlarm(true, true))
  console.log(setAlarm(false, false))
