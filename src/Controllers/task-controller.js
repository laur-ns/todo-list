import {taskList, TaskFactory} from "../Models/task-model";
import projectController from "./project-controller";
import taskView from "../Views/task-view";
import mainView from "../Views/main-view";

const taskController = (() => {
  function create(obj) {
    let index = (taskList.push(TaskFactory(obj))) - 1;
    projectController.addTask(index, taskList[index].project);
    console.log(taskList[index]);
  }

  function remove(id) {
    const index = getIndexbyId(id);
    taskView.hideTask(id);
    taskList.splice(index, 1);
    mainView.renderCompleteCount(getCompletedCount());
  }

  function getIndexbyId(id) {
    const index = taskList.findIndex(e => e.id === id);
    return index;
  }

  function getCompletedCount() {
    let numCompleted = 0;
    const currentProject = projectController.getCurrentProject();
    if (currentProject === undefined) {
      taskList.forEach(a => {
        if (a.isComplete) { numCompleted++ }
      });
    }
    taskList.forEach(a => {
      if (a.isComplete && a.project === currentProject) { numCompleted++ }
    });
    return numCompleted;
  }

  function toggleComplete(id) {
    let index = getIndexbyId(id);
    if (!taskList[index].isComplete) {
      taskList[index].isComplete = true;
    } else {
      taskList[index].isComplete = false;
    }
    taskView.hideTask(id);
    taskView.renderTask(taskList[index])
    mainView.renderCompleteCount(getCompletedCount());
  }

  function getTaskById(id) {
    return taskList[getIndexbyId(id)];
  }

  function edit(obj) {
    const i = getIndexbyId(parseInt(obj.id));
    taskList[i].name = obj.name;
    taskList[i].description = obj.description;
    taskList[i].dueDate = obj.dueDate;
    taskList[i].priority = obj.priority;
  }

  return {
    create,
    remove,
    getIndexbyId,
    toggleComplete,
    getCompletedCount,
    getTaskById,
    edit,
  }
})();

export default taskController;