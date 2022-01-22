let projectList = [
  {
    name: "webdev",
    tasks: [4312, 1234],
  },
  {
    name: "study",
    tasks: [35434, 645],
  },
  {
    name: "other",
    tasks: [12344132, 3456435, 2343, 8675],
  }
];

const ProjectFactory = (obj) => {
  return {
    name: obj.name,
    tasks: [],
  }
};

const getStorageProjects = () => {
  if (localStorage.getItem("projects") === null) { return; }
  projectList = JSON.parse(localStorage.getItem("projects"));
}

export {projectList, ProjectFactory, getStorageProjects};