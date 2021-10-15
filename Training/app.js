function greet(msg) {
  return function who(name) {
    console.log(`${msg}, ${name}`);
  };
}

let hello = greet('hello');
hello('Mathis');
hello('Lisa');

function counter(step = 1) {
  let count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

let incBy1 = counter(1);
incBy1();
incBy1();

let incBy7 = counter(7);
incBy7();
incBy7();

function getSomeData(url) {
  ajax(url, function onResponse(resp) {
    console.log(`Response (from ${url}): ${resp}`);
  });
}

function addA(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = addA(5);
let add10 = addA(10);
console.log(add5(5));
console.log(add10(3));

let creerCompteur = function () {
  let compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function () {
      changeValeur(1);
    },
    decrement: function () {
      changeValeur(-1);
    },
    valeur: function () {
      return compteurPrive;
    },
  };
};

let compteur1 = creerCompteur();
console.log(compteur1.valeur());
compteur1.increment();
compteur1.increment();
console.log(compteur1.valeur());
compteur1.decrement();
console.log(compteur1.valeur());
