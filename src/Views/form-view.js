import formController from "../Controllers/form-controller";

function setListeners() {
  const container = document.querySelector('.modal-container');
  const name = document.querySelector('#name');
  const description = document.querySelector('#desc');
  const date = document.querySelector('#form-date');
  const prio = document.querySelector('#select-prio');
  const submit = document.querySelector('.submit');
  const closeButton = document.querySelector('.close');
  const descLabel = document.querySelector('.desc-label');
  const blur = document.querySelector('.blur');
  window.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      if (container.style.display === 'flex') {
        e.preventDefault();
        submit.click();
      }
    }
  });

  container.addEventListener('click', e => {
    e.stopPropagation()
  });
  date.value = formController.getTodayDate();
  description.addEventListener('click', () => {
    descLabel.classList.add('focus');
  });
  description.addEventListener('focusout', () => {
    if (description.value === '') {
      descLabel.classList.toggle('focus');
    };
  });
  blur.addEventListener('click', hideForms);
  closeButton.addEventListener('click', hideForms)
  submit.addEventListener('click', () => {
    if (name.value === '') {
      alert('Name must be filled out');
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
  document.querySelector('.modal-container').style.display = 'none';
  document.querySelector('.submit').style.display = 'none';
  document.querySelector('.blur').style.display = 'none';
}

function renderAddForm() {
  const blur = document.querySelector('.blur');
  const rootnode = document.querySelector('.modal-container');
  const submitAdd = document.querySelector('#submit-add');
  formController.setCssVariables('green');
  blur.style.display = 'flex';
  rootnode.style.display = 'flex';
  submitAdd.style.display = 'flex';
}

function renderEditForm() {
  formController.setCssVariables('blue');
}



const formView = {
  setListeners,
  renderAddForm,
  renderEditForm,
  hideForms
}

export default formView;