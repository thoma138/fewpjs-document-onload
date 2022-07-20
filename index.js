function changeText() {
  document.getElementById("text").innerHTML = "This is really cool!";
}

addEventListener("DOMContentLoaded", function (event) {
  event = changeText();
});
