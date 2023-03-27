let button = document.getElementsByTagName("button");
let result = document.getElementById("input");
for (i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    let input = this.innerText;
    display(input);
  };
}
function display(input) {
  let current = result.innerText;
  if (input != "DEL" && input != "C" && input != "=") {
    // result.innerText = "";
    result.innerText = current + input;
  }
  if (input == "DEL") {
    result.innerText = current.substring(0, current.length - 1);
  }
  if (input == "C") {
    result.innerText = "";
  }
  if (input == "=") {
    result.innerText = eval(current);
  }
}
