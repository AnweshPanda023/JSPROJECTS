const endDate = "20 sept 2023 08:19 am";
document.getElementById("end-date").innerText = "End Date : " + endDate;
const inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) {
    inputs[0].value = 0;
    inputs[1].value = 0;
    inputs[2].value = 0;
    inputs[3].value = 0;
    return;
  }
  // console.log(end);
  // console.log(now);
  // console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};
setInterval(() => {
  clock();
}, 1000);
