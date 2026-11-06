const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const contactByPhone = document.getElementById("contactByPhone");
const phoneContainer = document.getElementById("phoneContainer");
const phoneInput = document.getElementById("phone");

contactByPhone.addEventListener("change", function () {
  if (this.checked) {
    phoneContainer.style.display = "block";
    phoneInput.required = true;
  } else {
    phoneContainer.style.display = "none";
    phoneInput.required = false;
    phoneInput.value = "";
  }
});
