module todo.viewcontrols {
    export class SingleViewControl extends plat.ui.ViewControl {
        constructor(private todosRepository: repositories.TodosRepository,
            private utils: plat.IUtils) {
            super();
        }

        context: models.ITodo;

        navigatedTo(todo: models.ITodo) {
            this.context = todo;
        }

        goBack() {
            this.navigator.goBack();
        }

        templateUrl = 'viewcontrols/single/single.viewcontrol.html';
    }

    plat.register.viewControl('single', SingleViewControl, [
        repositories.TodosRepository,
        plat.IUtils
    ]);
}