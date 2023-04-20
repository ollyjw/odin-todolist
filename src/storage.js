// import { displayToDoItem } from './domController';


// Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created


// and another function that looks for that data in localStorage when your app is first loaded.

// export function saveToDoLocally({ title, description, dueDate, priority }) {
//     localStorage.setItem('title',  document.getElementById('to-do-title').value);
//     localStorage.setItem('description',  document.getElementById('to-do-description').value);
//     localStorage.setItem('dueDate',  document.getElementById('dueDate').value);
//     localStorage.setItem('priority',  document.getElementById('priority').value);
//     // localStorage.setItem('projectName', projectName);


//     return { title, description, dueDate, priority };
// }

export function addNewProjectToStorage() {
    let storage;
    let storageProjects = JSON.parse(storage).getItem('projects' || "[]");
    storageProjects.push(project);
    storage.setItem('projects', JSON.stringify(storageProjects));
}


// let title = localStorage.getItem('title');
// let description = localStorage.getItem('description');
// let dueDate = localStorage.getItem('dueDate');
// let priority = localStorage.getItem('priority');