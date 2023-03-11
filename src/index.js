window.onload = function () {
  setSelectedClass();
  setClickInSwitch();
};
document.querySelector("#header").classList.add("selected-border");

function setSelectedClass() {
  const elements = document.querySelectorAll("#menu-list li");
  const elArray = [...elements];
  elArray.forEach((li) => {
    li.addEventListener("click", (e) => {
      deleteClassArray(elArray);
      e.target.classList.add("selected");
    });
  });
}

function deleteClassArray(array) {
  array.forEach((li) => {
    li.classList = [];
  });
}

function toggleClass() {
  document.querySelector(".header").classList.toggle("--dark-theme");
  document.querySelector(".main").classList.toggle("--dark-theme");
  document.querySelector(".footer-content").classList.toggle("--dark-theme");
}

function setClickInSwitch() {
  document.querySelector(".input-checkbox").addEventListener("click", () => {
    toggleClass();
  });
}
