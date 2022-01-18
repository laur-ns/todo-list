import projects from "../Models/project-list";
import view from "../Views/dom-manipulator";

function showProjects() {
  const projectsToClear = document.querySelectorAll('.all-tasks ~ li');
  projectsToClear.forEach(e => {
    e.remove();
  });
  const highlight = projects.getCurrentProject();
  for(let i = 0; i < projects.projectList.length; i++) {
    view.appendProject(projects.projectList[i], highlight);
  }
}

function createProject(name) {
  projects.projectList.push(name);
}

const projectController = {
  showProjects,
  createProject
}

export default projectController;