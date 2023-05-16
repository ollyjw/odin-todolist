import { storage } from './storage.js';

// Factory function
export const createToDo = (title, description, dueDate, priority, projectName) => {

    let toDoProps = {
        title: title, 
        description: description,
        dueDate: dueDate,
        priority: priority,
        projectName: projectName,
        id: updateToDoIndex()
    }

    class ToDo {
        constructor(props) {
            this.title = props.title,
            this.description = props.description,
            this.dueDate = props.dueDate,
            this.priority = props.priority,
            this.projectName = props.projectName
            this.id = props.id;
        }
    }

    //Save the input values to local storage
    storage.addNewToDoLocally(new ToDo(toDoProps));
}

export function updateToDoIndex() {
    let todos = storage.getToDoItems();
    let i = 0;
    todos.forEach(todo => {
        todo.id = i;
        i += 1;
    })

    return i;
}