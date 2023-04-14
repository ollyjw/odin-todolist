export let projectsArray = [];

// Push new projects to projects array
export function addNewProjectToArray(newProject) {
    projectsArray.push(newProject)
}

// Factory function
export const createProject = (title, description) => {    
    return { title, description };
}

// update index no. of each project
// start index from 0 & add 1 for every project added
export function updateIndex() {
    let i = 0;
    projectsArray.forEach(project => {
        project.id = i;
        i += 1;
    })
}