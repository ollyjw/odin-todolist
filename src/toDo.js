import { saveToDoLocally } from './storage.js';

export let toDoArray = [];

// Push new projects to projects array
export function addNewToDoToArray(newToDo) {
    toDoArray.push(newToDo);
}

// Factory function
export const createToDo = (title, description, dueDate, priority, projectName) => {

    // saveToDoLocally({ title, description, dueDate, priority });

    return { title, description, dueDate, priority, projectName };
}

export const blankToDoLoad = () => {

    // // date fns - import the function you want to use
    const {format} = require('date-fns');
    const today = format(new Date(),'dd.MM.yyyy');

    const myToDo = createToDo('eat', 'eat ingredients straight out of the fridge', `${today}`, 'high', 'default project');

    toDoArray.push(myToDo);
    console.log(toDoArray);

    return {toDoArray};
}


// Todo-item constructor
// (inc notes or checklist?)
// function ToDoItem (title, description, dueDate, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
// }