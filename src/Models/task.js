let taskList = [];

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
taskList[4] = {
  name: 'do dishes',
  description: '',
  isComplete: true,
  project: 'other',
  dueDate: '2022-01-26',
  id: 12344132,
  priority: 'low',
}
taskList[5] = {
  name: 'eat',
  description: '',
  isComplete: false,
  project: 'other',
  dueDate: '2022-01-26',
  id: 3456435,
  priority: 'low',
}
taskList[6] = {
  name: 'sleep',
  description: '',
  isComplete: false,
  project: 'other',
  dueDate: '2022-01-26',
  id: 2343,
  priority: 'low',
}
taskList[7] = {
  name: 'asdfasdfasfasdf',
  description: '',
  isComplete: false,
  project: 'other',
  dueDate: '2022-01-26',
  id: 8675,
  priority: 'low',
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

const getStorageTasks = () => {
  if (localStorage.getItem("tasks") === null) { return; }
  taskList = JSON.parse(localStorage.getItem("tasks"));
}


export {taskList, TaskFactory, getStorageTasks};