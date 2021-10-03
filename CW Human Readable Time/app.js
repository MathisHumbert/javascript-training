function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  console.log(hours.toString().length);

  return `${hours.toString().length === 2 ? hours : `0${hours}`}:${
    minutes.toString().length === 2 ? minutes : `0${minutes}`
  }:${seconds.toString().length === 2 ? seconds : `0${seconds}`}`;
}

console.log(humanReadable(86399));
console.log(humanReadable(42357));
console.log(humanReadable(60));
