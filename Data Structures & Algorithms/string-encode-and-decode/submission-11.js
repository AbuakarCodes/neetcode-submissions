// convert list of strings (Array) into a string 
// can be reverted back into a list (Array) of strings

class Solution {
  encode(strs) {
    let returnString = ""
    for (let i = 0; i < strs.length; i++) {
      let length = strs[i].length
      let delemeter = "#"
      let string = strs[i]
      returnString += `${length}${delemeter}${string}`
    }
    return returnString
  }

  decode(str) {
  let pointer = 0
  let returnArray = []
  let stringLoopItrration = []
  let string = str.split("")

  while (pointer < string.length) {
    while (string[pointer] != "#") {
      stringLoopItrration.push(string[pointer])
      pointer += 1
    }
    let number = Number(stringLoopItrration.join(""))
    let subString = ""
    subString = string.slice(pointer +1 , number + pointer +1).join("")

    returnArray.push(subString)
    stringLoopItrration=[]
    pointer += number + 1

  }

  return returnArray
}

}
