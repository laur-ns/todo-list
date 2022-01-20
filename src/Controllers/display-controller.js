/* -- this module primarily contains event listeners -- */

import { taskFactory, taskList } from '../Models/task-list';
import { projectList } from '../Models/project-list';
import view from '../Views/dom-manipulator';

// -- make sure every task is already displayed before running this function -- //
function setInitListeners() {
  // sidebar
  const allTasks = document.querySelector('.all-tasks');
  allTasks.addEventListener('click', console.log); // taskController.showAllTasks
  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');
  allProjectElements.forEach((e) => {
    e.addEventListener('click', setProjectListeners.bind(null, e));
  });
  const addProject = document.getElementById('add-project');
  addProject.addEventListener('click', console.log) // use view to change display, then use projectcontroller to add
  const today = document.getElementById('today');
  const nextWeek = document.getElementById('next-week');
  today.addEventListener('click', () => {
    taskController.showTasksBetweenDates(/* today, tomorrow*/);
  });
  nextWeek.addEventListener('click', () => {
    taskController.showTasksBetweenDates(/* today, next week */);
  });

  // task list
  const tasks = document.querySelectorAll('#task-list > *:not(#add-task)');
  tasks.forEach((e) => {
    e.addEventListener('click', setTaskListener.bind(null, e));
  });
  const addTask = document.getElementById('add-task');
  addTask.addEventListener('click', view.showAddTaskForm);
  
  // completed list
  const completedContainer = document.getElementById('completed');
  let toggleDrop = false;
  completedContainer.addEventListener('click', () => {
    if (!toggleDrop) {
      // show the dropdown using view method
    } else {
      // hide the dropdown
    }
  });
}

function setTaskListener(task) {
  // set listeners for the task passed by argument
  // the task paramater accepts an element, NOT the task itself
  console.log('task has been called');
}

function setProjectListeners(proj) {
  // set listener for project passed by argument
  console.log(proj);
}

export default setInitListeners;