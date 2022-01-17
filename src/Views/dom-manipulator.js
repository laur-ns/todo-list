import createTask from "../Controllers/task-controller";

// task element that will be cloned to create new tasks
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
label.innerHTML += 'Finish todo list';
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
// -- //

const showAddTaskForm = (type) => {
  let newTask = {
    name: 'laurens',
    description: 'description',
    dueDate: 'dueDate',
    isComplete: 'isComplete',
    project: 'todo-list',
  }
  createTask(newTask);
}

const appendTask = (task) => {
  const container = document.querySelector('#task-list');
  container.insertBefore(taskTemplate.cloneNode(true), container.firstChild);
}

const view = {
  showAddTaskForm,
  appendTask
}

export default view;