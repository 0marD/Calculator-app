const display = document.querySelector(".display");
const keyNumber = document.querySelectorAll("#keyNumber");
const keyOperator = document.querySelectorAll("#keyOperator");
const keyResults = document.querySelector(".key__inner__results");
const keyDel = document.querySelector(".key__inner__del");

keyNumber.forEach((keyNumber) => {
  keyNumber.addEventListener("click", () => {
    if (keyNumber.value === "." && display.value.includes(".")) return;

    display.value += keyNumber.value;
  });
});

keyOperator.forEach((keyOperator) => {
  keyOperator.addEventListener("click", () => {
    if (keyOperator.value === "+" && display.value.includes("+")) return;
    if (keyOperator.value === "/" && display.value.includes("/")) return;
    if (keyOperator.value === "x" && display.value.includes("x")) return;
    if (keyOperator.value === "-" && display.value.includes("-")) return;
    display.value += keyOperator.value;
  });
});

keyResults.addEventListener("click", () => {
  display.value = eval(display.value);
});

keyDel.addEventListener("click", () => {
  let value = display.value;
  display.value = value.substr(0, value.length - 1);
});

// ! change themes
const themeSelector = document.querySelectorAll(".theme-toggle__selector");
const themeOne = document.querySelector("#theme-1");
const themeTwo = document.querySelector("#theme-2");
const themeThree = document.querySelector("#theme-3");
const body = document.querySelector("body");

body.addEventListener("click", () => {
  console.log("se hizo click");
});

themeOne.addEventListener("click", () => {
  themeOne.classList.add("selector-active");
  themeTwo.classList.remove("selector-active");
  themeThree.classList.remove("selector-active");
  body.classList.add("theme1");
  body.classList.remove("theme2");
  body.classList.remove("theme3");
});

themeTwo.addEventListener("click", () => {
  themeOne.classList.remove("selector-active");
  themeTwo.classList.add("selector-active");
  themeThree.classList.remove("selector-active");
  body.classList.add("theme2");
  body.classList.remove("theme1");
  body.classList.remove("theme3");
});

themeThree.addEventListener("click", () => {
  themeOne.classList.remove("selector-active");
  themeTwo.classList.remove("selector-active");
  themeThree.classList.add("selector-active");
  body.classList.add("theme3");
  body.classList.remove("theme2");
  body.classList.remove("theme1");
});
