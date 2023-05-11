// https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
// we can only store strings in the window.localStorage object
// If we try to store a JavaScript object without first converting it to a string, we will get an [object, object] response

const storage = (() => {

let storage;

    const defaultProject = {
        projectName: 'Default Project',
        description: 'Default Description',
        id: '0'
    }  

    // date fns - import the function you want to use
    const {format} = require('date-fns');
    const today = format(new Date(),'dd.MM.yyyy');

    const defaultToDo = { 
        title: 'Eat',
        description: 'Eat ingredients straight out of fridge',
        dueDate: `${today}`,
        priority: 'High',
        projectName: 'Default Project'
    }    
    
    // If nothing in local storage load defaults
    function init() {
        storage = window.localStorage;

        if(storage.getItem('projects') == null) {
            storage.setItem('projects', JSON.stringify(new Array(defaultProject)));
        }

        if (storage.getItem('todos') == null) {
            storage.setItem('todos', JSON.stringify(new Array(defaultToDo)));
        }
    }

    function addNewProjectLocally(project) {
        // Sets an array variable that retrieves projects from the storage and converts to an object array:
        // if it returns null, return empty array to be parsed
        let storageProjects = JSON.parse(storage.getItem("projects") || "[]");
        // Push project into project array
        storageProjects.push(project);
        // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
        storage.setItem('projects', JSON.stringify(storageProjects));
    }

    function addNewToDoLocally(todo) {
        let storageToDos = JSON.parse(storage.getItem("todos") || "[]");
        storageToDos.push(todo);
        storage.setItem('todos', JSON.stringify(storageToDos));
    }

    function getToDosOfProject(project) {
        // Put todos array from storage into todos variable
        let todos = JSON.parse(storage.getItem('todos'));
        // filter through each element of todos array & check projectName property is equal to project input
        return todos.filter(todo => todo['projectName'] == project);
    }

    // retrieves projects from the storage and converts to an object array
    function getProjectItems() {
        return JSON.parse(storage.getItem('projects'));
    }

    // Get projects from storage & replace (set) with updated list
    // deleteProject(project['id'])
    function deleteProject(projectId) {
        let projects = JSON.parse(storage.getItem('projects'));

        // if project id is equal to input projectid, store in todelete variable
        let toDelete = projects.filter(project => project['id'] == projectId);

        // if project id is not equal to the input id, store in new array
        let updatedProjects = projects.filter(project => project['id'] != projectId);

        // replace projects key in local storage with updated array
        storage.setItem('projects', JSON.stringify(updatedProjects));
    }    

    init();

    return {
        addNewToDoLocally,
        addNewProjectLocally,
        getToDosOfProject,
        getProjectItems,
        deleteProject
    }

})();

export { storage };