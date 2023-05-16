import { Storage } from './storage.js';

const ToDo = (() => {

    // Factory function
    function createToDo(title, description, dueDate, priority, projectName) {

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
        Storage.addNewToDoLocally(new ToDo(toDoProps));
    }

    function updateToDoIndex() {
        let todos = Storage.getToDoItems();
        let i = 0;
        todos.forEach(todo => {
            todo.id = i;
            i += 1;
        })

        return i;
    }

    return {
        createToDo
    }

})();

export { ToDo };