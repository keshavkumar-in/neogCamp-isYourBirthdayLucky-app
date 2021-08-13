const dateOfBirth = document.querySelector("#TxtDob");
const luckyNumber = document.querySelector("#TxtLuckyNo");

const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const close = document.querySelector(".close");

const checkBtn = document.querySelector("#checkBtn");

const checkBirthdateIsLucky = () => {
  const dob = dateOfBirth.value;
  const number = luckyNumber.value;
  const sum = calculateSum(dob);

  if (dob === "" || number === "") {
    modalBody.innerHTML = `<div><h2>Please fill out the Date of Birth and Your Lucky Number</h2></div>`;
    modal.style.display = "block";
  } else {
    if (sum % number === 0) {
      modalBody.innerHTML = `<div><img src="./Happy.gif" width="100%"/></div><div><h2>WooHoo! Your birthday is lucky!!</h2></div>`;
      modal.style.display = "block";
    } else {
      modalBody.innerHTML = `<div><img src="./Sad.gif" width="80%"/></div><div><h2>Ohoo! Your birthday is not lucky!!</h2></div>`;
      modal.style.display = "block";
    }
  }
};

const calculateSum = (dob) => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
};

checkBtn.addEventListener("click", checkBirthdateIsLucky);

close.onclick = () => {
  modal.style.display = "none";
  modalBody.innerHTML = "";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  }
};
