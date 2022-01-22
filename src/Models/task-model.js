const taskList = [];

// demo tasks
taskList[0] = {
  name: 'finish back end',
  isComplete: false,
  description: 'filters',
  project: 'webdev',
  dueDate: '2022-01-23',
  id: 4312,
  priority: 'high',
}
taskList[1] = {
  name: 'finish front end',
  description: '',
  isComplete: true,
  project: 'webdev',
  dueDate: '2022-01-23',
  id: 1234,
  priority: 'high',
}
taskList[2] = {
  name: 'do statistics assignment',
  isComplete: false,
  description: 'do it',
  project: 'study',
  dueDate: '2022-01-25',
  id: 35434,
  priority: 'medium',
}
taskList[3] = {
  name: 'study for exams',
  description: '',
  isComplete: false,
  project: 'study',
  dueDate: '2022-01-26',
  id: 645,
  priority: 'medium',
}

const TaskFactory = (obj) => {
  return {
    name: obj.name,
    description: obj.description,
    dueDate: obj.dueDate,
    isComplete: false,
    project: obj.project,
    id: Date.now(),
    priority: obj.priority,
  }
}

export {taskList, TaskFactory};