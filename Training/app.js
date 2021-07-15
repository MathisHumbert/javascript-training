// async function someFunction(){
//   await
// }

// const someFunction = async()=>{
//   await
// }

const heanding1 = document.querySelector('.one');
const heanding2 = document.querySelector('.two');
const heanding3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    await addColor(1000, heanding1, 'red');
    await addColor(1000, heanding2, 'green');
    await addColor(1000, heanding3, 'blue');
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
