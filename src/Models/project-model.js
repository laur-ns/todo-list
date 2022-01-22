let projectList = [
  {
    name: 'webdev',
    tasks: [4312, 1234],
  },
  {
    name: 'study',
    tasks: [35434, 645],
  }
];

const ProjectFactory = (obj) => {
  return {
    name: obj.name,
    tasks: [],
  }
};

export {projectList, ProjectFactory};