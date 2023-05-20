// code your solution here
function saturdayFun(activity='roller-skate'){

    return `This Saturday, I want to ${activity}!`;

}

let mondayWork = function(work="go to the office") {
  return `This Monday, I will ${work}.`
}

let wrapAdjective = function(style="*") {
    return function(word="special") {
      return `You are ${style}${word}${style}!`
    }
  }