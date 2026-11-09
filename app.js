document.addEventListener("DOMContentLoaded", () => {

  const contactByPhone = document.getElementById("contactByPhone");
  const phoneContainer = document.getElementById("phoneContainer");
  const phoneField = document.getElementById("phone");

  if (!contactByPhone || !phoneContainer || !phoneField) {
    return;
  }

  contactByPhone.addEventListener("change", () => {

    if (contactByPhone.checked) {
      phoneContainer.style.display = "block";
      phoneField.required = true;
    } else {
      phoneContainer.style.display = "none";
      phoneField.required = false;
      phoneField.value = "";
    }

  });

});
