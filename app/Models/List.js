import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name
    /**
     * @type {String[]}
     */
    this.todos = data.todos || []
  }
  get Template() {
    return /*html*/`
    <div class="col-3">
    <div class="card shadow">
        <div class="card-body d-flex flex-column">
        
            <i class="fas fa-times text-danger align-self-end action"
                onclick="app.listsController.deleteList('${this.id}')"></i>

            <h4 class="card-title">Task: ${this.name}</h4>
            <ul class="pl-3">
                ${this.TodosTemplate}
            </ul>
            <form onsubmit="app.listsController.addTodo(event, '${this.id}')">
                <div class="form-group d-flex">
                    <input type="text" class="form-control" name="todo" id="todo"
                        aria-describedby="helpId" placeholder="Todo..." required>
                    <button type="submit" class="btn btn-outline-success ml-1"><i
                            class="fas fa-plus "></i></button>
                </div>
            </form>
        </div>
    </div>
</div>
    `
  }
  get TodosTemplate() {
    let template = ""
    this.todos.forEach((todo, index) => {
      template += /*html*/`
      <li>${todo}
          <i class="fas fa-times text-danger action"
              onclick="app.listsController.deleteTodo('${this.id}', ${index})"></i>
      </li>
      `
    })
    return template;
  }
}
