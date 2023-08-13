const questions = [
  {
    que: "which of the following is a markup language.",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "which of the following is a object oriented programming language.",
    a: "JAVA",
    b: "HTML",
    c: "CSS",
    d: "PHP",
    correct: "a",
  },
  {
    que: "which of the following is a functional language.",
    a: "CSS",
    b: "HTML",
    c: "JavaScript",
    d: "None of these",
    correct: "c",
  },
];

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
let quesBox = document.getElementById("queBox");
let optionInput = document.getElementsByClassName("option");
const box = document.getElementById("box");
const loadQuestions = () => {
  const data = questions[index];
  if (index === total) {
    return endquiz();
  }
  resetInput();
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const ans = getAnswer();

  const data = questions[index];
  console.log(ans);
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestions();
};

const getAnswer = () => {
  let answer;
  Array.from(optionInput).forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const resetInput = () => {
  Array.from(optionInput).forEach((input) => {
    input.checked = false;
  });
};

const endquiz = () => {
  box.innerHTML = `<h2>Thank you for playing...</h2>
    <h3>You have answered ${right}/${total} correct answers</h3>`;
};

const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", submitQuiz);
loadQuestions();
