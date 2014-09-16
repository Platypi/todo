module todo.viewcontrols {
    export class TodoViewControl extends plat.ui.ViewControl {
        templateUrl = 'viewcontrols/todo/todo.viewcontrol.html';
        context = {
		    newTodo: '',
		    todos: []
		};

		createTodo() {
		    var context = this.context,
		        newTodo = {
		        title: context.newTodo.trim(),
		        completed: false,
		        created: new Date()
		    };

		    context.todos.push(newTodo);
		    context.newTodo = '';
		}
      }

      plat.register.viewControl('todo', TodoViewControl);
}