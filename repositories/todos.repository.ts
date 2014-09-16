module todo.repositories {
    export class TodosRepository implements ITodosRepository {
        constructor(private todoFactory: models.ITodoFactory,
            private storage: plat.storage.ILocalStorage,
            private utils: plat.IUtils,
            private Promise: plat.async.IPromise) { }

        private todos: Array<models.ITodo> = [];
        private id = 'plat-todos';

        addTodo(title: string): models.ITodo {
            var todo = this._createTodo({title: title, completed: false});
            this.todos.push(todo);
            return this._createTodo(todo);
        }

        setTodos(todos: Array<models.ITodo>): void {
            this.todos = this._createTodos(todos);
            this.storage.setItem(this.id, JSON.stringify(todos));
        }

        getTodos() {
            return new this.Promise<Array<models.ITodo>>((resolve, reject) => {
                if (this.todos.length === 0) {
                    this.todos = JSON.parse(this.storage.getItem<string>(this.id) || '[]');    
                }
                resolve(this._createTodos(this.todos));
            });
        }

        private _createTodo(todo: models.ITodo) {
            return this.todoFactory.createTodo(todo);
        }

        private _createTodos(todos: Array<models.ITodo>): Array<models.ITodo> {
            return this.utils.map(todos, (todo) => {
                return this._createTodo(todo);
            });
        }
    }

    export interface ITodosRepository {
        addTodo(title: string): models.ITodo;
        setTodos(todos: Array<models.ITodo>): void;
        getTodos(): plat.async.IThenable<Array<models.ITodo>>;
    }

    plat.register.injectable('todoRepository', TodosRepository, [
        models.ITodoFactory,
        plat.storage.ILocalStorage,
        plat.IUtils,
        plat.async.IPromise
    ]);
}