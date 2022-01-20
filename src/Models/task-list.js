const taskList = [];

const TaskFactory = (name, description, dueDate, isComplete) => {
  return {
    name,
    description,
    dueDate,
    isComplete,
  }
}

export {taskList, TaskFactory};