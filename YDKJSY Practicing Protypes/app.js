// This is my solution for YDKJSY practice

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) * max;
}

let reel = {
  symbols: ['X', 'Y', 'Z', 'W', '$', '*', '<', '@'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.pos = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

let slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach((reel) => reel.spin());
  },
  display() {
    let lines = [];

    for (let linePos = -1; linePos <= 1; linePos++) {
      let line = this.reels.map((reel) => {
        let slot = Object.create(reel);
        slot.position =
          (reel.symbols.length + reel.position + linePos) % reel.symbols.length;
        return slot.display();
      });
      lines.push(line.join(' | '));
    }
    return lines.join('\n');
  },
};

slotMachine.spin();

console.log(slotMachine.display());
