import path from 'path'
import storage from 'electron-json-storage'
import types from './mutation-types'

function findShelf(shelfList, shelfId) {
  for (const shelf of shelfList) {
    if (shelf.id === shelfId) return shelf;
  }
  return null;
}

export const changeRoute = ({ dispatch, state }, route) => {
  dispatch(types.CHANGE_ROUTE, route.path);
  return new Promise((resolve, reject) => {
    if (route.params.shelfId) {
      const shelf = findShelf(state.shelfList, route.params.shelfId);
      dispatch(types.CHANGE_SHELF, shelf);
      dispatch(types.CHANGE_RELATIVE_PATH, route.params.relativePath || '');

      if (shelf == null) {
        reject(`Shelf not found: ${route.params.shelfId}`);
        return;
      }
    } else {
      dispatch(types.CHANGE_SHELF, null);
      dispatch(types.CHANGE_RELATIVE_PATH, '');
    }
    resolve();
  });
}

export const loadShelfList = (store) =>
  new Promise((resolve, reject) => {
    storage.get('shelf-list', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const shelfList = Object.keys(data).length ? data : [];
      store.dispatch(types.UPDATE_SHELF_LIST, shelfList);
      resolve();
    })
  });

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
  setTimeout(() => {
    storage.set('shelf-list', newShelfList, err => {
      if (err) throw err;
    });
  }, 0);
  return Promise.resolve(shelf);
}
