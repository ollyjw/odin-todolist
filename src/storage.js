// Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created
// and another function that looks for that data in localStorage when your app is first loaded.


export function saveToDoLocally({ title, description, dueDate, priority, projectName }) {
    // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
    localStorage.setItem('title',  document.getElementById('to-do-title').value);
    localStorage.setItem('description',  document.getElementById('to-do-description').value);
    localStorage.setItem('dueDate',  document.getElementById('dueDate').value);
    localStorage.setItem('priority',  document.getElementById('priority').value);
    localStorage.setItem('projectName', projectName);

    console.log('saved to do object to local');
    console.log({ title, description, dueDate, priority, projectName });

    return { title, description, dueDate, priority, projectName };
}

export function saveProjectLocally({title, description}) {
    localStorage.setItem('title',  document.getElementById('project-title').value);
    localStorage.setItem('description',  document.getElementById('project-description').value);

    console.log('saved project object to local');
    console.log({ title, description });

    return { title, description };
}

// I NEED TO get the current content of localstorage and put those objects into an array


export function getToDoData() {
    let title = localStorage.getItem('title');
    let description = localStorage.getItem('description');
    let dueDate = localStorage.getItem('dueDate');
    let priority = localStorage.getItem('priority');

    return { title, description, dueDate, priority };
}



// https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
// we can only store strings in the window.localStorage object
// If we try to store a JavaScript object without first converting it to a string, we will get an [object, object] response


// THOUGHTS
// TRY REFACTOR TO MODULE PATTERN

// NEED TO STORE FORM INPUT VALUES/OBJECT PROPS IN ONE VARIABLE THAT WILL REPRESENT OBJ  THEN CREATE  A FUNCTION THAT WILL STRINGIFY THE OBJ/ITEM TO LOCAL STORAGE

// CAN STORE  THE DEFAULT PROJECT/TODOS HERE
