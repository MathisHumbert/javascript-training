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
  }
}

var myFile = new File('class.phptester.php', 'Hello World');
var file1 = new File('hello_world.txt', 'Hello World');

console.log(myFile.filename);
console.log(myFile.extension);
console.log(file1.filename);
console.log(file1.extension);
