const check_input = document.querySelector("#text-input");
const check_btn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

check_btn.addEventListener("click", () => {
  // empty input value
  if (!check_input.value) {
    alert("Please input a value");
    result.innerHTML = ``;
    return;
  }
  // input value lowercase
  const str = check_input.value.toLowerCase().replace(/[\W_]+/g, "");
  // input value reversed
  const str_reverse = str.split('').reverse().join('')
  // check if values are equal
  if (str === str_reverse) {
    result.innerHTML = `${check_input.value} is a palindrome`;
    result.style.color="antiquewhite";
  } else {
    result.innerHTML = `${check_input.value} is not a palindrome`;
    result.style.color="orangered";
  }
})

