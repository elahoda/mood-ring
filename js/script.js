var moods = document.querySelector("#moods");
var body = document.querySelector("body");

moods.addEventListener("change", function (e) {
  var feeling = e.target.value;
  if (feeling === "happy") {
    body.classList.add("happy");
    body.classList.remove("sad");
    body.classList.remove("passionate");
  } else if (feeling === "sad") {
    body.classList.add("sad");
    body.classList.remove("happy");
    body.classList.remove("passionate");
  } else if (feeling === "passionate") {
    body.classList.add("passionate");
    body.classList.remove("sad");
    body.classList.remove("happy");
  }
});
