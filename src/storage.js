// import { displayToDoItem } from './domController';


// Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created
// and another function that looks for that data in localStorage when your app is first loaded.


export function saveToDoLocally({ title, description, dueDate, priority }) {
    // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
    localStorage.setItem('title',  document.getElementById('to-do-title').value);
    localStorage.setItem('description',  document.getElementById('to-do-description').value);
    localStorage.setItem('dueDate',  document.getElementById('dueDate').value);
    localStorage.setItem('priority',  document.getElementById('priority').value);
    // localStorage.setItem('projectName', projectName);

    console.log('saved to do object to local');

    return { title, description, dueDate, priority };
}

export function saveProjectLocally({title, description}) {
    localStorage.setItem('title',  document.getElementById('project-title').value);
    localStorage.setItem('description',  document.getElementById('project-description').value);

    console.log('saved project object to local');

    return { title, description };
}
