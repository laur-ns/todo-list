import controls from "../Views/controls";
import taskView from "../Views/task";

export default function filterPrio(node) {
  if (node.value === 'none') {
    controls.resetFilters();
    return;
  }
  node.classList.add('focus');
  const taskWrappers = taskView.selectAllTasks();
  taskWrappers.forEach(e => e.style.display = 'flex');
  taskWrappers.forEach(e => {
    if (!e.classList.contains(node.value)) {
      e.style.display = 'none';
    }
  });
  
}

//  const taskWrappers = document.querySelectorAll('.task-container:not(#add-task) p');
// use that for search