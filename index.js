// function saturdayFun(toDo = 'swim') {
//     if (toDo === toDo) {
//       return `This Saturday, I want to ${toDo}!`;
//     } else {
//       return "This Saturday, I want to roller-skate!";
//     }
//   }
function saturdayFun(toDo = 'roller-skate') {
    return `This Saturday, I want to ${toDo}!`;
  }

  const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  function wrapAdjective(flair="*") {
    return function(adjective="special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  