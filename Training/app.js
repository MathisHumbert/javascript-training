// My Way
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  console.log(myConsonants);

  return myConsonants !== null
    ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
    : str.concat('way');
}

console.log(translatePigLatin('consonant'));
