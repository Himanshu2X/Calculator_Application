var display = document.getElementById("display");
var buttons = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    display.value += this.value;
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    display.value += " " + this.value + " ";
  });
}

clear.addEventListener("click", function() {
  display.value = "";
});

equals.addEventListener("click", function() {
  display.value = eval(display.value);
});