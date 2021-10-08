function yesNo(arr) {
  let yesOrNo = true;
  for (let i = 0; i < arr.length; i++) {
    if (yesOrNo) yesOrNo = !yesOrNo;
    else {
      yesOrNo = !yesOrNo;
      arr.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

yesNo(['this', 'code', 'is', 'right', 'the']);
yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
