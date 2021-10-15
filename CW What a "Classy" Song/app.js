class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listener = [];
  }

  howMany(arr) {
    let listeners = this.listener.length;

    for (let val of arr) {
      if (!this.listener.includes(val.toLowerCase()))
        this.listener.push(val.toLowerCase());
    }

    return this.listener.length - listeners;
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));
