import taskView from "../Views/task";

export default function searchTasks(node) {
  const tasks = taskView.selectAllTasks();
  tasks.forEach(e => e.style.display = 'flex')
  if (node.value == '') {
    return;
  }
  tasks.forEach(e => {
    const text = e.querySelector('p').textContent.toLocaleLowerCase();
    if (!text.includes(node.value)) {
      e.style.display = 'none';
    }
  });
}