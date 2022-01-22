import filterPrio from '../Controllers/filter';
import searchTasks from '../Controllers/search';
import sortDate from '../Controllers/sort';
import taskView from '../Views/task-view';

function setListeners() {
  const filter = document.querySelector('#filter-prio');
  const sort = document.querySelector('#sort-date');
  const search = document.querySelector('input[type="search"]');
  filter.addEventListener('change', () => filterPrio(filter));
  sort.addEventListener('change', () => sortDate(sort));
  search.addEventListener('keyup', () => searchTasks(search));
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