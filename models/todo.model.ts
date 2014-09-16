module todo.models {
    export class Todo implements ITodo {
    	static createTodo(todo: ITodo): ITodo {
            if (Todo.utils.isNull(todo)) {
                return;
            }
            return new Todo(todo.title, todo.completed, todo.created);
        }

        static utils: plat.IUtils;
        created: Date;

        constructor(title: string, completed: boolean, created?: Date);
        constructor(title: string, completed: boolean, created?: string);
        constructor(public title: string, public completed: boolean, created?: any) { 
            if (Todo.utils.isString(created)) {
                this.created = new Date(created);
            } else if (Todo.utils.isNull(created)) {
                this.created = new Date();
            } else {
                this.created = created;
            }
        }
    }

    export interface ITodo {
        title: string;
        completed: boolean;
        created?: Date;
    }

    export interface ITodoFactory {
        createTodo(todo: ITodo): ITodo;
    }

    export function ITodoFactory(utils: plat.IUtils) {
	    Todo.utils = utils;
	    return Todo;
	}

	plat.register.injectable('todoFactory', ITodoFactory, [
	    plat.IUtils
	], plat.register.injectable.FACTORY);
}