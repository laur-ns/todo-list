import filterPrio from '../Controllers/filter';
import sortDate from '../Controllers/sort';
import taskView from '../Views/task-view';

function setListeners() {
  const filter = document.querySelector('#filter-prio');
  const sort = document.querySelector('#sort-date');
  filter.addEventListener('change', () => filterPrio(filter));
  sort.addEventListener('change', () => sortDate(sort));
}

function resetFilters() {
  const controls = document.querySelectorAll('#control select.focus, #control input.focus');
  const tasks = taskView.selectAllTasks();
  controls.forEach(e => {
    e.classList.remove('focus');
    e.value = 'none';
  });
  tasks.forEach(e => e.style.display = 'flex');
}

export default {setListeners, resetFilters}