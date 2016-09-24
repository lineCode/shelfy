import path from 'path'

export const shelfList = state => state.shelfList

export const currentShelf = state => state.currentShelf

export const relativePath = state => state.relativePath

export const absolutePath = state => {
  if (state.currentShelf) return path.resolve(state.currentShelf.path, state.relativePath);
  return ''
}
