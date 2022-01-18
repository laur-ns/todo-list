/* -- this module primarily contains event listeners -- */
import { taskList } from '../Models/task-list';
import view from '../Views/dom-manipulator';
import projectController from './project-controller';
import tasks from './task-controller';

function setInitListeners() {
  // sidebar
  const allTasks = document.querySelector('.all-tasks');
  allTasks.addEventListener('click', console.log); // taskController.showAllTasks
  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');
  allProjectElements.forEach((e) => {
    e.addEventListener('click', setProjectListener.bind(null, e));
  });
  const addProject = document.getElementById('add-project');
  addProject.addEventListener('click', () => {
    view.showAddProjectInput();
  })
  const today = document.getElementById('today');
  const nextWeek = document.getElementById('next-week');
  today.addEventListener('click', () => {
    taskController.showTasksBetweenDates(/* today, tomorrow*/);
  });
  nextWeek.addEventListener('click', () => {
    taskController.showTasksBetweenDates(/* today, next week */);
  });

  // task list
  const addTask = document.getElementById('add-task');
  addTask.addEventListener('click', view.showAddTaskForm);
  
  // completed list
  const completedContainer = document.getElementById('completed');
  let toggleDrop = false;
  completedContainer.addEventListener('click', () => {
    if (!toggleDrop) {
      toggleDrop = true;
      // show the dropdown using view method
      console.log('dropdown');
    }
    else {
      // hide the dropdown
      toggleDrop = false;
    }
  });
}

function setTaskListener(node) {
  const id = parseInt(node.getAttribute('id'));
  const trash = node.querySelector('.trash-icon');
  trash.addEventListener('click', () => {
    tasks.remove(id);
  });
  const modify = node.querySelector('.modify-icon');
  modify.addEventListener('click', () => console.log('modifying...'));
  const checkbox = node.querySelector('input');
  checkbox.addEventListener('click', (e) => {
    let index = tasks.getIndexbyId(id);
    if (!taskList[index].isComplete) {
      view.hideTask(id);
      view.appendCompletedTask(taskList[index]);
      taskList[index].isComplete = true;
    }
    else {
      view.hideTask(id);
      view.appendTask(taskList[index])
      taskList[index].isComplete = false;
    }
    view.updateCompletedCount(tasks.getCompletedNumber());
  })
}

function setProjectListener(proj) {
  // set listener for project passed by argument
  console.log(proj);
}

const displayController = {
  setInitListeners,
  setTaskListener,
  setProjectListener,
}

export default displayController;