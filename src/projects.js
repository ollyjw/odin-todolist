import { Storage } from './storage.js';

const Project = (() => {

    // Factory function
    const createProject = (projectName, description) => {    
        let projectProps = {
            projectName: projectName,
            description: description,
            id: updateProjectIndex()
        }

        class Project {
            constructor(props) {
                this.projectName = props.projectName;
                this.description = props.description;
                this.id = props.id;
            }
        }

        Storage.addNewProjectLocally(new Project(projectProps));
    }


    // update index no. of each project
    // start index from 0 & add 1 for every project added
    function updateProjectIndex() {
        let projects = Storage.getProjectItems();
        let i = 0;
        projects.forEach(project => {
            project.id = i;
            i += 1;
        })

        return i;
    }

    return {
        createProject
    }

})();

export { Project };