


let projectsArray = [];
let projectTitle = "Default project";
projectsArray.push({projectTitle});
console.log(projectsArray);

// Push new projects to projects array
export function createProject(newProject) {
    projectsArray.push(newProject)
}