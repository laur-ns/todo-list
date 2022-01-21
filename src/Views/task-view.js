import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import formController from "../Controllers/form-controller";
import taskController from "../Controllers/task-controller";
import formView from "./form-view";

/* task element that will be cloned to create new tasks */
const taskTemplate = document.createElement('div');
const label = document.createElement('label')
const input = document.createElement('input');
const replacement = document.createElement('div');
const name = document.createElement('p');
const prio = document.createElement('span');
const options = document.createElement('div');
const dueDate = document.createElement('span');
const modifyIcon = document.createElement('img');
const trashIcon = document.createElement('img');
options.classList.add('options-container');
taskTemplate.classList.add('task-container', 'border');
taskTemplate.appendChild(label).classList.add('checkbox');
input.setAttribute('type', 'checkbox');
input.classList.add('checkbox-hidden');
label.appendChild(input);
replacement.classList.add('checkbox-replacement');
label.appendChild(replacement)
name.textContent = '';
prio.textContent = '● ';
prio.classList.add('priority');
label.appendChild(name);
label.appendChild(prio);
taskTemplate.appendChild(options);
dueDate.classList.add('due-date');
dueDate.textContent = '17/01/22';
options.appendChild(dueDate);
modifyIcon.classList.add('modify-icon')
modifyIcon.src = './assets/modify-outline.svg';
trashIcon.classList.add('trash-icon')
trashIcon.src = './assets/trash-outline.svg';
options.appendChild(modifyIcon);
options.appendChild(trashIcon);
//*  -- *//

function setListeners(node) {
  const id = parseInt(node.getAttribute('id'));
  const trash = node.querySelector('.trash-icon');
  const modify = node.querySelector('.modify-icon');
  const checkbox = node.querySelector('input');
  const dueDate = node.querySelector('.due-date');
  dueDate.addEventListener('click', formView.renderEditForm.bind(null, id));
  modify.addEventListener('click', formView.renderEditForm.bind(null, id));
  trash.addEventListener('click', taskController.remove.bind(null, id));
  checkbox.addEventListener('click', taskController.toggleComplete.bind(null, id));
}

function renderTask(task) {
  const newTask = taskTemplate.cloneNode(true);
  const taskName = newTask.querySelector('p');
  const dueDate = newTask.querySelector('.due-date');
  const prio = newTask.querySelector('.priority');
  const label = newTask.querySelector('label.checkbox');
  newTask.setAttribute('id', `${task.id}`)
  prio.textContent += `${task.priority}`;
  dueDate.textContent = formController.formatDate(task.dueDate);
  label.appendChild(prio);
  if (task.priority === 'none') {
    prio.textContent = '';
  }
  if (!task.isComplete) {
    newTask.classList.add(`${task.priority}`);
    const addTask = document.getElementById('add-task');
    const container = document.querySelector('#task-list');
    taskName.textContent = task.name;
    container.insertBefore(newTask, addTask);
    setListeners(newTask);
  } else {
    const strike = document.createElement('strike');
    const container = document.querySelector('#completed-dropdown');
    const checkbox = newTask.querySelector('input');
    taskName.textContent = '';
    strike.textContent = task.name;
    taskName.appendChild(strike)
    container.appendChild(newTask);
    checkbox.checked = true;
    setListeners(newTask);
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

function hideAddButton() {
  const button = document.getElementById('add-task');
  button.style.display = 'none';
}

function showAddButton() {
  const button = document.getElementById('add-task');
  button.style.display = 'flex';
}

const taskView = {
  setListeners,
  renderTask,
  hideTask,
  hideAllTasks,
  hideAddButton,
  showAddButton,
}

export default taskView;