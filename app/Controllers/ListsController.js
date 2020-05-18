import _listsService from "../Services/ListsService.js";
import _store from "../store.js"

function _draw() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

export default class ListsController {
  constructor() {
    _draw();
  }

  addList(e) {
    e.preventDefault();
    let rawList = {
      name: e.target.name.value
    }
    _listsService.addList(rawList)
    _draw();
  }
  deleteList(id) {
    _listsService.deleteList(id);
    _draw();
  }
  addTodo(e, listId) {
    e.preventDefault();
    let todo = e.target.todo.value
    try {
      _listsService.addTodo(todo, listId)
    }
    catch (error) {
      alert(error.message)
    }
    _draw();
  }
  deleteTodo(listId, index) {
    _listsService.deleteTodo(listId, index)
    _draw();
  }
}
