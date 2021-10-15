function classroom(teacher) {
  return function study() {
    console.log(`${teacher}, says to study ${this.topic}`);
  };
}

let assignement = classroom('Kyle');

let homework = {
  topic: 'JS',
  assignement: assignement,
};

let otherHomwork = {
  topic: 'Math',
};

homework.assignement();
assignement.call(otherHomwork);
