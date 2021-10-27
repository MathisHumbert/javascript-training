function queueTime(customers, n) {
  let w = new Array(n).fill(0);

  for (let i of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += i;
  }
  return Math.max(...w);
}

queueTime([2, 3, 10], 2);
