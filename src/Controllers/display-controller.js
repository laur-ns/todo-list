/* -- this module primarily contains event listeners -- */
import { taskList } from '../Models/task-list';
import view from '../Views/dom-manipulator';
import tasks from './task-controller';
import projects from '../Models/project-list';


function setInitListeners() {
  // sidebar
  const allTasks = document.querySelector('.all-tasks');
  allTasks.addEventListener('click', console.log); // taskController.showAllTasks
  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');
  allProjectElements.forEach((e) => {
    e.addEventListener('click', setProjectListener.bind(null, e));
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
  const tasks = document.querySelectorAll('#task-list > *:not(#add-task), #completed-dropdown > *');
  tasks.forEach((e) => setTaskListener(e));
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
  const index = tasks.getIndexbyId(id)
  const trash = node.querySelector('.trash-icon');
  trash.addEventListener('click', () =>  tasks.remove(id))
  const modify = node.querySelector('.modify-icon');
  modify.addEventListener('click', () => console.log('modifying...'));
  const checkbox = node.querySelector('input');
  checkbox.addEventListener('click', () => {
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
    const newTask = document.getElementById(id);
    setTaskListener(newTask);
    view.updateCompletedCount(tasks.getCompletedNumber());
  })
}

function showAllProjects() {
  const projectsToClear = document.querySelectorAll('.all-tasks ~ li');
  projectsToClear.forEach(e => {
    e.remove();
  });
  for(let i = 0; i < projects.projectList.length; i++) {
    view.appendProject(projects.projectList[i]);
  }
}

function setProjectListener(proj) {
  // set listener for project passed by argument
  console.log(proj);
}

const displayController = {
  setInitListeners,
  setTaskListener,
  setProjectListener,
  showAllProjects,
}

export default displayController;