const inputFirst = document.getElementById("first_inp");
const inputSecond = document.getElementById("second_inp");
const inputThird = document.getElementById("third_inp");
const bkg = document.getElementsByClassName("main__box-right");
const spans = document.querySelectorAll("span");
const inputs = document.querySelectorAll("input");

let red = 0;
let green = 0;
let blue = 0;
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    let label = input.closest(".box__left-control").querySelector("label");
    if (input.value >= 0 && input.value <= 255) {
      input.style.borderColor = "green";
      if (label.innerText == "red") {
        red = +input.value;
      } else if (label.innerText == "green") {
        green = +input.value;
      } else {
        blue = +input.value;
      }
      spans[index].style.visibility = "hidden";
      bkg[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
      input.style.borderColor = "red";
      spans[index].style.visibility = "visible";
    }
  });
});

// inputs.forEach((input, index) => {
//   input.addEventListener("input", () => {
//     let label = input.closest(".box__left-control").querySelector("label");
//     const inputValue = input.value;
//     if (inputValue.length != 0 && inputValue.length <= 6) {
//       input.style.borderColor = "green";
//       if (label.innerText == "red") {
//         bkg[0].style.background = "red";
//       } else if (label.innerText == "green") {
//         bkg[0].style.background = "green";
//       } else {
//         bkg[0].style.background = "blue";
//       }
//       spans[index].style.visibility = "hidden";
//     } else {
//       input.style.borderColor = "red";
//       bkg[0].style.background = "none";
//       spans[index].style.visibility = "visible";
//     }
//   });
// });
