import displayController from "../Controllers/display-controller";
import tasks from "../Controllers/task-controller";

/* task element that will be cloned to create new tasks */
const taskTemplate = document.createElement('div');
taskTemplate.classList.add('task-container', 'border');
const label = document.createElement('label')
taskTemplate.appendChild(label).classList.add('checkbox');
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.classList.add('checkbox-hidden');
label.appendChild(input);
const replacement = document.createElement('div');
replacement.classList.add('checkbox-replacement');
label.appendChild(replacement)
const name = document.createElement('p');
name.textContent = 'Finish todo list';
label.appendChild(name);
const options = document.createElement('div');
options.classList.add('options-container');
taskTemplate.appendChild(options);
const dueDate = document.createElement('span');
dueDate.classList.add('due-date');
dueDate.textContent = '17/01/22';
options.appendChild(dueDate);
const modifyIcon = document.createElement('img');
modifyIcon.classList.add('modify-icon')
modifyIcon.src = './assets/modify-outline.svg';
const trashIcon = document.createElement('img');
trashIcon.classList.add('trash-icon')
trashIcon.src = './assets/trash-outline.svg';
options.appendChild(modifyIcon);
options.appendChild(trashIcon);
//*  -- *//

const showAddTaskForm = () => {
  const newTask = {
    name: prompt('enter name'),
    description: prompt('enter description'),
    dueDate: prompt('enter due date'),
    project: prompt('enter project'),
    priority: 'high',
  }
  tasks.create(newTask);
}

const appendTask = task => {
  const newTask = taskTemplate.cloneNode(true);
  const taskName = newTask.querySelector('p');
  const dueDate = newTask.querySelector('.due-date');
  const container = document.querySelector('#task-list');
  const addTask = document.getElementById('add-task');
  newTask.setAttribute('id', `${task.id}`)
  taskName.textContent = task.name;
  dueDate.textContent = task.dueDate;
  container.insertBefore(newTask, addTask);
  displayController.setTaskListener(newTask);
}

const hideTask = nodeID => {
  const taskNode = document.getElementById(nodeID);
  taskNode.remove();
}

const appendCompletedTask = task => {
  const newTask = taskTemplate.cloneNode(true);
  const taskName = newTask.querySelector('p');
  const strike = document.createElement('strike');
  const dueDate = newTask.querySelector('.due-date');
  const container = document.querySelector('#completed-dropdown');
  const checkbox = newTask.querySelector('input');
  newTask.setAttribute('id', `${task.id}`)
  taskName.textContent = '';
  strike.textContent = task.name;
  taskName.appendChild(strike)
  dueDate.textContent = task.dueDate;
  container.appendChild(newTask);
  checkbox.checked = true;
  displayController.setTaskListener(newTask)
}

function updateCompletedCount(count) {
  const element = document.querySelector('#completed > h2');
  element.textContent = `Completed (${count})`
}

function appendProject(projectName, highlight) {
  const projectList = document.querySelector('.project-list > ul');
  const allTasks = document.querySelector('.all-tasks');
  const project = document.createElement('li');
  project.textContent = projectName;
  if (highlight === undefined) {
    allTasks.classList.add('highlight');
  }
  if (projectName === highlight) {
    project.classList.add('highlight');
  }
  projectList.appendChild(project);
}

const view = {
  showAddTaskForm,
  appendTask,
  appendCompletedTask,
  hideTask,
  updateCompletedCount,
  appendProject,
}

export default view;