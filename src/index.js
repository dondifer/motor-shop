window.onload = function () {
  setSelectedClass();
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
