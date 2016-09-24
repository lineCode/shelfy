import path from 'path'
import storage from 'electron-json-storage'
import types from './mutation-types'

function findShelf(shelfList, shelfId) {
  for (const shelf of shelfList) {
    if (shelf.id === shelfId) return shelf;
  }
  return null;
}

export const changeRoute = ({ dispatch, state }, { params }) => {
  if (!params) return;
  const shelf = findShelf(state.shelfList, params.shelfId);
  dispatch(types.CHANGE_SHELF, shelf);
  dispatch(types.CHANGE_RELATIVE_PATH, params.relativePath || '');
}

export const loadShelfList = (store, route) => {
  storage.get('shelf-list', (err, data) => {
    if (err) throw err;
    const shelfList = Object.keys(data).length ? data : [];
    store.dispatch(types.UPDATE_SHELF_LIST, shelfList);
    changeRoute(store, route);
  });
}

function convertToShelf(shelfList, directory) {
  const name = path.basename(directory);

  // create shelf id by the lower case name.
  // if duplecated, add a number suffix.
  const lowerName = name.toLowerCase();
  const findId = (suffix) => {
    const id = suffix ? lowerName + suffix : lowerName;
    for (const shelf of shelfList) {
      if (shelf.id === id) return findId(suffix + 1);
    }
    return id;
  };

  return /* Shelf */ {
    id: findId(0),
    path: directory,
    name,
  };
}

export const pushShelfList = ({ dispatch, state }, directory) => {
  const shelf = convertToShelf(state.shelfList, directory);
  const newShelfList = state.shelfList.concat([shelf]);
  dispatch(types.UPDATE_SHELF_LIST, newShelfList);
  storage.set('shelf-list', newShelfList, err => {
    if (err) throw err;
  });
}
