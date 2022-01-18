const taskList = [];

const TaskFactory = (obj) => {
  return {
    name: obj.name,
    description: obj.description,
    dueDate: obj.dueDate,
    isComplete: false,
    project: obj.project,
    id: Date.now(),
  }
}

const getCompletedTasks = () => {
  const completedTasks = [];
  completedTasks.push(taskList.findIndex(e => e.isComplete === true));
  return completedTasks;
}

export {taskList, TaskFactory};