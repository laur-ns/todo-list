let projectList = [
  'test 1',
  'test 2',
];

const currentProject = undefined;

function getCurrentProject() {
  return currentProject;
}

function setCurrentProject(projectName) {

}

let projects = {
  projectList,
  getCurrentProject,
  setCurrentProject,
}

export default projects;