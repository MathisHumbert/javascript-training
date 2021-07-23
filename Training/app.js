function countOnline(usersObj) {
  let total = 0;
  for (let i in usersObj) {
    if (usersObj[i].online === true) {
      total++;
    }
  }
  return total;
}

console.log(
  countOnline({
    Alan: { online: false },
    Jeff: { online: true },
    Sarah: { online: false },
  })
);
