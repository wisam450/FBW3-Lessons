// we create to do list array 
let toDoList=["Learn Javascript"];
// the first quistion
let userAnswer= prompt("what would you like to do?");
while(userAnswer !=="quit"){
    if(userAnswer=="list"){
        console.log(toDoList);
    }
    else if(userAnswer=="new"){
        let newToDo=prompt(" add new task");
        toDoList.push(newToDo);
    }
    userAnswer= prompt("what would you like to do?");

}
console.log("Okay you close the app!!!");