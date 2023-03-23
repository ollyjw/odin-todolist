import './style.css';
import { createToDo } from "./toDo.js";
import { displayProject, displayToDoItem } from "./domcontroller.js";
import { createProject } from "./projects.js";

// Project
// -- To do
// ---- View Details
// ---- Edit Details
// ---- Delete Details

// Need new project btn & choice of which projects the to do items are listed under
// Create new to-dos, set to-dos to complete, change to-do priority
// View all projects / View all todos in each project / expand todo to see/edit details

// https://ollyjw.github.io/odin-library/
// Similar to library project, use modal forms to take in values and then populate the page with projects and to do items

// Create a project module which is the parent to the To Do Tasks Module
// May need to give each project an ID to append new to-do tasks 

// LOGIC
// -----
// Grab Form data
// ^
// Loop through arrays and extract each object's properties
// ^
// print these properties / display to DOM


// displayProject();
// Assigning factory function to var and logging
const myToDo = createToDo('eat', 'eat ingredients straight out of the fridge', 'soon', 'high');
console.log(myToDo);


const myProject = createProject('lol', 'lmao');
console.log(myProject);