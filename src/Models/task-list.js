const taskList = [];

const TaskFactory = (obj) => {
  return {
    name: obj.name,
    description: obj.description,
    dueDate: obj.dueDate,
    isComplete: obj.isComplete,
    project: obj.project,
    id: Date.now(),
  }
}

export {taskList, TaskFactory};