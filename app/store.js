import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(pojoList => new List(pojoList));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }


  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const STORE = new Store();
export default STORE;
