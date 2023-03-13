// import './style.css';
// import {  } from "./___.js";

// Project
// -- To do
// ---- View Details
// ---- Edit Details
// ---- Delete Details

// Need new project btn & choice of which projects the to do items are listed under
// Create new to-dos, set to-dos to complete, change to-do priority
// View all projects / View all todos in each project / expand todo to see/edit details

// https://ollyjw.github.io/odin-library/
// Similar to library project, use modal form to store values and then display projects and to do items to the page

// Create a project module which is the parent to the To Do Tasks Module

let projectsArray = [];
let projectTitle = "Default project";
projectsArray.push({projectTitle});
console.log(projectsArray);


// Create to-do item module

// Todo-item constructor
// (inc notes or checklist?)
// function ToDoItem (title, description, dueDate, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
// }

let toDoArray = [];

// Factory function
export const createToDo = (title, description, dueDate, priority) => {
    toDoArray.push({title, description, dueDate, priority});
    console.log(toDoArray);
    return { title, description, dueDate, priority };
}

const myToDo = createToDo('eat', 'eat ingredients straight out of the fridge', 'soon', 'high');
console.log(myToDo);