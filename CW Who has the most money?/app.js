// My solution
function mostMoney(students) {
  let biggest = 0;

  for (let student of students) {
    let total = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    if (total > biggest) {
      biggest = total;
      person = student.name;
    } else if (total === biggest) person = 'all';
  }

  return person;
}

// CW solution
function mostMoney(s) {
  s.sort((x, y) => sum(y) - sum(x));
  if (s.length > 1 && sum(s[0]) == sum(s[1])) return 'all';
  return s[0].name;
}

const sum = (s) => s.fives * 5 + s.tens * 10 + s.twenties * 20;
mostMoney([cam, geoff]);
