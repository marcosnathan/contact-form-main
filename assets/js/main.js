const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const rbGeneralEnquiry = document.getElementById("general-enquiry");
const rbSupportRequest = document.getElementById("support-request");
const taMessage = document.getElementById("text-area");
const cbTos = document.getElementById("tos-agree");
const submit = document.getElementById("submit");
const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
const toastMessage = document.getElementById('toast-success');

function showToast() {
    toastMessage.classList.add("show-toast");
    setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
    toastMessage.classList.remove("show-toast");
}


submit.addEventListener('click', (ev) => {
    ev.preventDefault();
    let isValid = true;
    let firstNameError = document.querySelector("#first-name + span.error-required");
    if (firstName.value.trim() === "") {
        firstNameError.style.display = "block";
        isValid = false;
    }
    else {
        firstNameError.style.display = "none";
    }

    let lastNameError = document.querySelector("#last-name + span.error-required");
    if (lastName.value.trim() === "") {
        isValid = false;
        lastNameError.style.display = "block";
    }
    else {
        lastNameError.style.display = "none";
    }
    let emailErrorRequired = document.querySelector("#email + span.error-required");
    if (email.value.trim() === "") {
        isValid = false;
        emailErrorRequired.style.display = "block";
    }
    else {
        emailErrorRequired.style.display = "none";
        let emailErrorInvalid = document.querySelector("span.invalid-email");
        if (emailRegex.test(email.value)) {
            emailErrorInvalid.style.display = "none";
        }
        else {
            isValid = false;
            emailErrorInvalid.style.display = "block";
        }
    }

    let queryTypeError = document.querySelector("label.rb-box ~ span");
    if (!(rbSupportRequest.checked || rbGeneralEnquiry.checked)) {
        isValid = false;
        queryTypeError.style.display = "block";
    }
    else {
        queryTypeError.style.display = "none";
    }

    let messageError = document.querySelector("#text-area + span.error-required");
    if(taMessage.value.trim() === ""){
        isValid = false;
        messageError.style.display = "block";
    }
    else {
        messageError.style.display = "none";
    }

    let tosError = document.querySelector("div.tos-agree span.error-required");
    if(!cbTos.checked){
        isValid = false;
        tosError.style.display = "block";
    }
    else {
        tosError.style.display = "none";
    }

    if(isValid){
        console.log(isValid);
        showToast();
    }

});
const rbBoxGeneralEnquiry = rbGeneralEnquiry.parentElement;
const rbBoxSupportEnquiry = rbSupportRequest.parentElement;
const queriesType = document.querySelectorAll('input[name="query-type"]');
queriesType.forEach(rb => {
    rb.addEventListener("change", (event) => {
        if(event.target.parentElement == rbBoxGeneralEnquiry){
            rbBoxGeneralEnquiry.classList.add("active");
            rbBoxSupportEnquiry.classList.remove("active");
        }
        else if(event.target.parentElement == rbBoxSupportEnquiry) {
            rbBoxSupportEnquiry.classList.add("active");
            rbBoxGeneralEnquiry.classList.remove("active");
        }
    });
})

document.querySelector(".close-button").addEventListener('click', (ev) => {
    toastMessage.classList.remove('show-toast');
});






