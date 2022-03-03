const list = document.querySelector(".list");
list.style.display = "none";

const menuToggler = document.querySelector(".menuToggler");
menuToggler.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
