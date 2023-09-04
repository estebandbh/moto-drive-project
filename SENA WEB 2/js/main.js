let closeModal = document.querySelector(".close-modal");
let modalRegister = document.querySelector(".modal-register");
let btnRegister = document.querySelector(".btn-register");

window.addEventListener("DOMContentLoaded", () => {
  btnRegister.addEventListener("click", () => {
    modalRegister.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    modalRegister.classList.remove("active");
  });
});

// btn modal trip
let btnTrip = document.querySelector(".trip-button");
let modalTrip = document.querySelector(".modal-trip");

btnTrip.addEventListener("click", () => {
  modalTrip.classList.toggle("active");
});

/*============submodal======================*/

