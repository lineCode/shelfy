import jetpack from 'fs-jetpack'

export default class {

  constructor(path, name) {
    this.path = path;
    this.name = name;
  }

  isDirectory() {
    return jetpack.exists(this.path) === 'dir';
  }

  static compare(lhs, rhs) {
    if (lhs.isDirectory() && !rhs.isDirectory()) {
      return -1;
    }
    if (!lhs.isDirectory() && rhs.isDirectory()) {
      return 1;
    }
    return lhs.name.localeCompare(rhs.name);
  }
}
