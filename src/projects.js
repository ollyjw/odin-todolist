import { storage } from './storage.js';

// Factory function
export const createProject = (projectName, description) => {    
    let projectProps = {
        projectName: projectName,
        description: description,
        id: updateIndex()
    }

    class Project {
        constructor(props) {
            this.projectName = props.projectName;
            this.description = props.description;
            this.id = props.id;
        }
    }

    storage.addNewProjectLocally(new Project(projectProps));
}


// update index no. of each project
// start index from 0 & add 1 for every project added
export function updateIndex() {
    let projects = storage.getProjectItems();
    let i = 0;
    projects.forEach(project => {
        project.id = i;
        i += 1;
    })

    return i;
}