import dateController from "../Controllers/date-controller";
import formController from "../Controllers/form-controller";
import taskController from "../Controllers/task-controller";

function setListeners() {
  const container = document.querySelector('.modal-container');
  const name = document.querySelector('#name');
  const description = document.querySelector('#desc');
  const date = document.querySelector('#form-date');
  const prio = document.querySelector('#select-prio');
  const submitAdd = document.querySelector('#submit-add');
  const closeButton = document.querySelector('.close');
  const descLabel = document.querySelector('.desc-label');
  const blur = document.querySelector('.blur');
  window.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      if (container.style.display === 'flex') {
        e.preventDefault();
        submitAdd.click();
      }
    }
  });
  container.addEventListener('click', e => {
    e.stopPropagation()
  });
    description.addEventListener('focusin', () => {
    descLabel.classList.add('focus');
  });
  description.addEventListener('focusout', () => {
    if (description.value === '') {
      descLabel.classList.toggle('focus');
    };
  });
  blur.addEventListener('click', hideForms);
  closeButton.addEventListener('click', hideForms)
  submitAdd.addEventListener('click', () => {
    if (name.value === '') {
      alert('Name must be filled out');
      return;
    } else if (!dateController.validateDate(date.value)) {
      alert("You can't set a due date in the past!")
      return;
    }
    const newTaskObj = {
      name: name.value,
      description: description.value,
      dueDate: date.value,
      project: undefined,
      priority: prio.value
    }
    formController.submitNewTask(newTaskObj);
  }); 
}

function hideForms() {
  clearForm();
  document.querySelector('.modal-container').style.display = 'none';
  document.querySelector('#submit-edit').style.display = 'none';
  document.querySelector('#submit-add').style.display = 'none';
  document.querySelector('.blur').style.display = 'none';
}

function renderAddForm() {
  const header = document.querySelector('#header-title')
  const blur = document.querySelector('.blur');
  const rootnode = document.querySelector('.modal-container');
  const submitAdd = rootnode.querySelector('#submit-add');
  const date = rootnode.querySelector('#form-date');
  formController.setCssVariables('add');
  header.textContent = 'add task';
  blur.style.display = 'flex';
  rootnode.style.display = 'flex';
  submitAdd.style.display = 'flex';
  date.value = '';
}

function renderEditForm(id) {
  const task = taskController.getTaskById(id)
  const header = document.querySelector('#header-title')
  const blur = document.querySelector('.blur');
  const rootnode = document.querySelector('.modal-container');
  const name = rootnode.querySelector('.form-text');
  const submitAdd = rootnode.querySelector('#submit-edit');
  const description = rootnode.querySelector('#desc');
  const date = rootnode.querySelector('#form-date');
  const prio = rootnode.querySelector('#select-prio');
  rootnode.classList.add(id);
  header.textContent = `edit: ${task.name}`;
  formController.setCssVariables('edit');
  blur.style.display = 'flex';
  rootnode.style.display = 'flex';
  description.value = task.description;
  date.value = task.dueDate;
  if (!description.value === '') {
    description.classList.add('focus');
  }
  prio.value = task.priority;
  name.value = task.name;
  submitAdd.style.display = 'flex';
}

function clearForm() {
  const rootnode = document.querySelector('.modal-container');
  const inputs = rootnode.querySelectorAll('input');
  const desc = rootnode.querySelector('textarea');
  inputs.forEach(e => {
    e.value = '';
  });
  desc.value = '';
}



const formView = {
  setListeners,
  renderAddForm,
  renderEditForm,
  hideForms
}

export default formView;