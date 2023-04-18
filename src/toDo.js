export let toDoArray = [];

// Push new projects to projects array
export function addNewToDoToArray(newToDo) {
    toDoArray.push(newToDo);
}

// Factory function
export const createToDo = (projectName, title, description, dueDate, priority) => {
    // toDoArray.push({title, description, dueDate, priority});
    //console.log(toDoArray);
    return { projectName, title, description, dueDate, priority };
}

export const blankToDoLoad = () => {
    const myToDo = createToDo('default project', 'eat', 'eat ingredients straight out of the fridge', '28th April', 'high');

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