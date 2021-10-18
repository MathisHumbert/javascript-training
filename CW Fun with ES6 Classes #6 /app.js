class File {
  constructor(fullName, contents) {
    this.contents = contents;
    Object.defineProperty(this, 'fullName', {
      writable: false,
      value: fullName,
    });
    Object.defineProperty(this, 'filename', {
      writable: false,
      value: fullName
        .split('.')
        .splice(0, fullName.split('.').length - 1)
        .join('.'),
    });
    Object.defineProperty(this, 'extension', {
      writable: false,
      value: fullName
        .split('.')
        .splice(fullName.split('.').length - 1, 1)
        .join(''),
    });
    this.counterC = -1;
    this.contentArr = this.contents.split('');
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    if (this.contents.length === 0) {
      this.contents += str;
      this.contentArr = this.contents.split('');
    } else {
      let space = '';
      console.log();
      this.contents += `\n${str}`;
      this.contentArr = this.contents.split('');
    }
  }

  getc() {
    this.counterC++;
    if (this.counterC > this.contents.length) return undefined;
    else return this.contents[this.counterC];
  }

  gets() {
    let line = '';
    if (this.contentArr.includes('\n')) {
      line = this.contentArr.splice(0, this.contentArr.indexOf('\n'));
      this.contentArr.splice(0, 1);
      return line.join('');
    }

    if (this.contentArr.length === 0) {
      return undefined;
    } else {
      line = this.contentArr;
      this.contentArr = [];
      return line.join('');
    }
  }
}
