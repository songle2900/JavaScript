"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeFunc = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openFunc = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openFunc);
}

btnCloseModal.addEventListener("click", closeFunc);
overlay.addEventListener("click", closeFunc);

document.addEventListener("keydown", function (e) {
  // check if modal has hidden class
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeFunc();
  }
});
