let homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  },
};

let jsHomework = Object.create(homework);
let mathHomework = Object.create(homework);
jsHomework.topic = 'Js';
jsHomework.study();
mathHomework.topic = 'Math';
mathHomework.study();
