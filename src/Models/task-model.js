const taskList = [];

taskList[0] = {
  name: 'finish back end',
  isComplete: false,
  project: 'asdfasdf',
  id: 123412342,
  priority: 'low',
}
taskList[1] = {
  name: 'finish front end',
  isComplete: true,
  project: 'study',
  id: 1345325435,
  priority: 'high',
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