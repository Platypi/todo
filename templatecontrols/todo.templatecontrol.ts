module todo.templatecontrols {
    export class TodoItem extends plat.ui.TemplateControl {
	    templateUrl = 'templatecontrols/todo.templatecontrol.html';
	}

    plat.register.control('todo-item', TodoItem);
}