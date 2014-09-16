module todo.viewcontrols {
    export class TodoViewControl extends plat.ui.ViewControl {
        templateUrl = 'viewcontrols/todo/todo.viewcontrol.html';
        context = {
		    newTodo: '',
		    todos: []
		};

		constructor(private todosRepository: repositories.TodosRepository,
			private utils: plat.IUtils) {
			super();
		}

		initialize() {
		    this.todosRepository.getTodos().then((todos) => {
		        this.context.todos = todos;
		    });
		}

		createTodo(todo: string) {
		    var context = this.context;
		    context.todos.push(this.todosRepository.addTodo(todo.trim()));
		    this.storeTodos();
		    context.newTodo = '';
		}

		storeTodos() {
		    this.todosRepository.setTodos(this.context.todos);
		}

		viewTodo(todo: models.ITodo) {
		    this.navigator.navigate(viewcontrols.SingleViewControl, {
		        parameter: todo
		    });
		}

		markComplete(created: Date) {
		    this.utils.forEach(this.context.todos, (todo: models.ITodo) => {
		        if (todo.created === created) {
		            todo.completed = !todo.completed;
		        }
		    });

		    this.storeTodos();
		}

		deleteTodo(index: number) {
		    this.context.todos.splice(index, 1);
		    this.storeTodos();
		}
    }

	plat.register.viewControl('todo', TodoViewControl, [
		repositories.TodosRepository,
		plat.IUtils
	]);
}