const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector("h1");

function getDate() {
  const date= new Date();
  const years = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  dateTitle.innerText = `${years}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day}`;
}

function init() {
  getDate();
}

init();