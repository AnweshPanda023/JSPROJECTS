const counterTag = document.getElementById("container");
let counter = 0;

const clicked = () => {
  counter++;
  counterTag.innerHTML = `Counter = ${counter}`;
};
