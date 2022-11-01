// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

function mondayWork(place = 'go to the office'){
    return `This Monday, I will ${place}.`;
}

function wrapAdjective(str = "*"){
    return function(value = "special"){
        return `You are ${str}${value}${str}!`; 
    }
}
