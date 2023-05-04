import { storage } from './storage.js';

export let toDoArray = [];

// Push new to-do items to toDo array
export function addNewToDoToArray(newToDo) {
    toDoArray.push(newToDo);
}

// Factory function
export const createToDo = (title, description, dueDate, priority, projectName) => {

    let toDoProps = {
        title: title, 
        description: description,
        dueDate: dueDate,
        priority: priority,
        projectName: projectName
    }

    class ToDo {
        constructor(props) {
            this.title = props.title,
            this.description = props.description,
            this.dueDate = props.dueDate,
            this.priority = props.priority,
            this.projectName = props.projectName
            // this.id = props.id;
        }
    }

    //Save the input values to local storage
    storage.addNewToDoLocally(new ToDo(toDoProps));

}

// export const blankToDoLoad = () => {

//     // date fns - import the function you want to use
//     const {format} = require('date-fns');
//     const today = format(new Date(),'dd.MM.yyyy');

//     const myToDo = createToDo('eat', 'eat ingredients straight out of the fridge', `${today}`, 'high', 'default project');

//     toDoArray.push(myToDo);

//     //console.log(toDoArray);

//     return {toDoArray};
// }