const btnFirst = document.getElementById("first_btn");
const btnSecond = document.getElementById("second_btn");
const btnThird = document.getElementById("third_btn");
const background = document.querySelector("body");

function changeBodyBgFirst() {
  if (background.style.background == "red") {
    background.style.background = "white";
  } else {
    background.style.background = "red";
  }
}

function changeBodyBgSecond() {
  if (background.style.background == "green") {
    background.style.background = "white";
  } else {
    background.style.background = "green";
  }
}

function changeBodyBgFirst() {
  if (background.style.background == "red") {
    background.style.background = "white";
  } else {
    background.style.background = "red";
  }
}

function changeBodyBgThird() {
  if (background.style.background == "blue") {
    background.style.background = "white";
  } else {
    background.style.background = "blue";
  }
}

btnFirst.onclick = changeBodyBgFirst;
btnSecond.onclick = changeBodyBgSecond;
btnThird.onclick = changeBodyBgThird;
