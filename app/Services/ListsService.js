import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListsService {
  addTodo(todo, listId) {
    let list = _store.State.lists.find(l => l.id == listId)
    if (list.todos.length > 20) {
      throw new Error("Too many todo's. Please create a seperate list.")
    }
    list.todos.push(todo)
    _store.saveState();
  }
  addList(rawList) {
    let list = new List(rawList)
    _store.State.lists.push(list)
    _store.saveState();
  }
  deleteTodo(listId, index) {
    let list = _store.State.lists.find(p => p.id == listId)
    list.todos.splice(index, 1)
    _store.saveState();
  }
  deleteList(id) {
    if (window.confirm("You sure?")) {
      _store.State.lists = _store.State.lists.filter(l => l.id != id)
      _store.saveState();
    }
  }
}

const LISTS_SERVICE = new ListsService();
export default LISTS_SERVICE;
