const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/?";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmmnopqrstuvwxyz";

const passwordBox = document.getElementById("pass-box");
const totalBox = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length <= totalBox.value) {
    return generatePassword(password);
  }
  passwordBox.innerText = truncateString(password, totalBox.value);
};

document.getElementById("btn").addEventListener("click", () => {
  if (
    !upperInput.checked &&
    !lowerInput.checked &&
    !numberInput.checked &&
    !symbolInput.checked
  ) {
    passwordBox.innerText = "Please Select a checkbox";
    return;
  } else {
    generatePassword();
  }
});
function truncateString(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
generatePassword();
