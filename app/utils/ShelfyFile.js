import path from 'path'
import jetpack from 'fs-jetpack'

export default class {

  constructor(filepath, name) {
    this.filepath = filepath;
    this.name = name;
  }

  isDirectory() {
    return jetpack.exists(this.filepath) === 'dir';
  }

  isImage() {
    const ext = path.extname(this.filepath);
    if (ext === '.jpg'
      || ext === '.png') {
      return true;
    }
    return false;
  }

  imageData() {
    if (this.isImage()) {
      return jetpack.readAsync(this.filepath, 'buffer')
        .then(buf => buf.toString('base64'));
    }
    return Promise.reject('Image not found.');
  }

  extention() {
    return path.extname(this.filepath);
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
