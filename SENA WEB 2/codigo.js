let submodal = document.getElementById("submodal1");
let submodal2 = document.getElementById("submodal2");

let btnBack1 = document.querySelector(".btn-back-modal1");
let btnBack2 = document.querySelector(".btn-back-modal2");
let btnR1 = document.querySelector("#btn-r1");
let btnR2 = document.querySelector("#btn-r2");

btnR1.addEventListener("click", () => {
  submodal.classList.add("active");
});

btnBack1.addEventListener("click", () => {
  submodal.classList.remove("active");
});

btnR2.addEventListener("click", () => {
    submodal2.classList.add("active");
  });
  
  btnBack2.addEventListener("click", () => {
    submodal2.classList.remove("active");
  });
  