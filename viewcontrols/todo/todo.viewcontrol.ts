module todo.viewcontrols {
    export class TodoViewControl extends plat.ui.ViewControl {
        templateUrl = 'viewcontrols/todo/todo.viewcontrol.html';
        context = {
            title: 'Todo List'
        };
      }

      plat.register.viewControl('todo', TodoViewControl);
}