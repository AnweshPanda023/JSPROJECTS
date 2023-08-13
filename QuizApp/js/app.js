const questions = [
  {
    que: "which of the following is a markup language",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "which of the following is a markup language",
    a: "JAVA",
    b: "HTML",
    c: "JavaScript",
    d: "PHP",
    correct: "b",
  },
  {
    que: "which of the following is a markup language",
    a: "CSS",
    b: "HTML",
    c: "JavaScript",
    d: "PHP",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

let quesBox = document.getElementById("queBox");
let optionInputs = document.querySelectorAll(".option");

const loadQuestion = () => {
  const data = questions[index];
  if (index === total) {
    return endQuiz();
  }
  reset();
  console.log(data);
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const ans = getAnswer();
  const data = questions[index];

  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById(
    "box"
  ).innerHTML = `<h3>Thank you for playing my quiz</h3>
    <h2>${right}/${total} are correct</h2>`;
};

const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", submitQuiz);

loadQuestion();
