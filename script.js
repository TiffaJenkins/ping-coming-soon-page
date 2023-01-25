//capture classes in variables----------------------------
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-box");

//event listener type (submit) for form------------------------------
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    //if the input is not a valid email display an error------
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get("email"))) {
        errorMsg.classList.add('show');
        input.classList.add('error');
    } else {
        errorMsg.classList.remove('show');
        input.classList.remove('error');
    }
});