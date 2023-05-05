import './style.css';
import { blankToDoLoad, toDoArray } from './toDo.js';
import { displayProject, displayToDoItem, populateProjectDropdown } from './domController.js';
// import { blankProjectLoad } from './projects.js';


// Project
// -- To do
// ---- View Details
// ---- Edit Details
// ---- Delete Details

// Need new project btn & choice of which projects the to do items are listed under
// Create new to-dos, set to-dos to complete, change to-do priority
// View all projects / View all todos in each project / expand todo to see/edit details


//Click on a project in the sidenav and it shows the to-dos for that specific project

// Possibly use Array.filter() to grab the projectName property out of the to-do factory & check if it's equal to title property of project array?

// Make sure you can't add the same project title more than once

// 'Delete Confirmation' modal + 'View & Edit Details' Modal


// Storage - figure out local storage so its remembers the projects you added in the past & loads them on page load

// blankProjectLoad();
// blankToDoLoad();
displayProject();
displayToDoItem('Default project');
populateProjectDropdown('Default project');

// submit new project > create new project > Display projects + display project's todos