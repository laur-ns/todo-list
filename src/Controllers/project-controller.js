import projects from "../Models/project-list";

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

const projectController = {
  showProjects,
}

export default projectController;