// var inputImage = document.getElementById("input--image");
// var displayImage = document.getElementById("display--image");

var inputImage = document.querySelector(".input--image");
var inputImage = document.querySelector(".display--image");

inputImage.addEventListener("change", function () {
  var file = inputImage.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    displayImage.src = e.target.result;
    displayImage.style.display = "block";
  };
  reader.readAsDataURL(file);
});

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = link.getAttribute("href");
    var target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
