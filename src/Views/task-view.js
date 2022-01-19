import mainController from "../Controllers/main-controller";
import projectController from "../Controllers/project-controller";
import taskController from "../Controllers/task-controller";

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

function setListeners(node) {
  const id = parseInt(node.getAttribute('id'));
  const trash = node.querySelector('.trash-icon');
  trash.addEventListener('click', () => {
    taskController.remove(id);
  });
  const modify = node.querySelector('.modify-icon');
  modify.addEventListener('click', () => console.log('modifying...'));
  const checkbox = node.querySelector('input');
  checkbox.addEventListener('click', () => {
    taskController.toggleComplete(id);
  });
}

function renderTask(task) {
  const newTask = taskTemplate.cloneNode(true);
  const taskName = newTask.querySelector('p');
  const dueDate = newTask.querySelector('.due-date');
  newTask.setAttribute('id', `${task.id}`)
  if (!task.isComplete) {
    const addTask = document.getElementById('add-task');
    const container = document.querySelector('#task-list');
    taskName.textContent = task.name;
    dueDate.textContent = task.dueDate;
    container.insertBefore(newTask, addTask);
    setListeners(newTask);
  } else {
    const strike = document.createElement('strike');
    const container = document.querySelector('#completed-dropdown');
    const checkbox = newTask.querySelector('input');
    taskName.textContent = '';
    strike.textContent = task.name;
    taskName.appendChild(strike)
    dueDate.textContent = task.dueDate;
    container.appendChild(newTask);
    checkbox.checked = true;
    setListeners(newTask)
  }
}

function hideTask(id) {
  const taskNode = document.getElementById(id);
  taskNode.remove();
}

function hideAllTasks() {
  const incompletes = document.querySelectorAll('#task-list > *:not(#add-task)');
  const completes = document.getElementById('completed-dropdown');
  completes.innerHTML = '';
  incompletes.forEach(e => {
    const id = e.getAttribute('id');
    hideTask(id);
  });
}

function renderEditForm() {
}

function renderAddForm() {
  const newTaskObj = {
    name: prompt('enter name'),
    description: prompt('enter description'),
    dueDate: prompt('enter due date'),
    project: prompt('enter project'),
    priority: 'high',
  }
  taskController.create(newTaskObj);
  const project = projectController.getCurrentProject;
  mainController.showAllTasks(project);
}

const taskView = {
  setListeners,
  renderTask,
  hideTask,
  hideAllTasks,
  renderEditForm,
  renderAddForm,
}

export default taskView;