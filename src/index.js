import dateController from './Controllers/date-controller';
import mainController from './Controllers/main-controller';
import projectController from './Controllers/project-controller';
import controls from './Views/controls';
import formView from './Views/form-view';
import mainView from './Views/main-view';

// -- init -- //
mainController.showAllTasks();
projectController.showAllProjects();
mainView.setStaticListeners();
formView.setListeners();
controls.setListeners();
dateController.setHeaderDate();
mainView.toggleDropdown();