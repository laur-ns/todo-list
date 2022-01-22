import dateController from './Controllers/date';
import mainController from './Controllers/main';
import projectController from './Controllers/project';
import { getStorageProjects } from './Models/project';
import { getStorageTasks } from './Models/task';
import controls from './Views/controls';
import formView from './Views/form';
import mainView from './Views/main';

// -- init -- //
getStorageTasks();
getStorageProjects();
mainController.showAllTasks();
projectController.showAllProjects();
mainView.setStaticListeners();
formView.setListeners();
controls.setListeners();
dateController.setHeaderDate();
mainView.toggleDropdown();