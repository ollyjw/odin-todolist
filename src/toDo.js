let toDoArray = [];

// Factory function
export const createToDo = (title, description, dueDate, priority) => {
    toDoArray.push({title, description, dueDate, priority});
    console.log(toDoArray);
    return { title, description, dueDate, priority };
}


// Todo-item constructor
// (inc notes or checklist?)
// function ToDoItem (title, description, dueDate, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
// }