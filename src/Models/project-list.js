let projectList = [
  'test 1',
  'test 2',
];

const currentProject = undefined;

function getCurrentProject() {
  return currentProject;
}

function setCurrentProject(projectName) {
  projectList.forEach(e => {
    if (projectName === e) {
      alert('cannot make a new project of the same name!');
      return;
    }
  });
  currentProject = projectName;
}

let projects = {
  projectList,
  getCurrentProject,
  setCurrentProject,
}

export default projects;