//Email input:
const emailInput = document.getElementById('email');
const emailErrorContainer = emailInput.nextElementSibling;

function validateEmail(){
    const isInvalid = !emailInput.validity.valid;
    const isEmpty = emailInput.value.length === 0;

    if (isInvalid || isEmpty) {
        emailErrorContainer.innerText = 'Please enter a valid e-mail adress!';
        return false;
    }

    emailErrorContainer.innerText = '';
    return true;
}

emailInput.addEventListener('input', validateEmail);


//Country input:
const countryInput = document.getElementById('country');
const countryErrorContainer = countryInput.nextElementSibling;

function validateCountry(){
    const isInvalid = !countryInput.validity.valid;
    const isEmpty = countryInput.value.length === 0;

    if(isInvalid || isEmpty) {
        countryErrorContainer.innerText = 'Please enter a valid country!';
        return false;
    }

    countryErrorContainer.innerText = '';
    return true;
}

countryInput.addEventListener('input', validateCountry);


//Zip code input:
const zipCodeInput = document.getElementById('zip-code');
const zipCodeErrorContainer = zipCodeInput.nextElementSibling;

function validateZipCode(){
    const isInvalid = !zipCodeInput.validity.valid;
    const isEmpty = zipCodeInput.value.length === 0;

    if(isInvalid || isEmpty) {
        zipCodeErrorContainer.innerText = 'Please enter a valid zip code!';
        return false;
    }

    zipCodeErrorContainer.innerText = '';
    return true;
}

zipCodeInput.addEventListener('input', validateZipCode);


//Password input:
const passwordInput = document.getElementById('password');
const passwordErrorContainer = passwordInput.nextElementSibling;

function validatePassword(){
    const isInvalid = !passwordInput.validity.valid;
    const isEmpty = passwordInput.value.length === 0;

    if(isInvalid || isEmpty) {
        passwordErrorContainer.innerText = 'Password must be at least eight characters long!';
        return false;
    }

    passwordErrorContainer.innerText = '';
    return true;
}

passwordInput.addEventListener('input', validatePassword);



//Password confirmation input:
const passwordConfirmationInput = document.getElementById('password-confirmation');
const passwordConfirmationErrorContainer = passwordConfirmationInput.nextElementSibling;

function validatePasswordConfirmation(){
    const passwordConfirmationIsDifferent = !(passwordConfirmationInput.value === passwordInput.value);
    const isEmpty = passwordInput.value.length === 0;

    if(passwordConfirmationIsDifferent || isEmpty) {
        passwordConfirmationErrorContainer.innerText = 'Password confirmation does not match!';
        passwordConfirmationInput.setAttribute("validity", "invalid");
        return false;
    }

    passwordConfirmationErrorContainer.innerText = '';
    passwordConfirmationInput.setAttribute("validity", "valid");
    return true;
}

passwordConfirmationInput.addEventListener('input', validatePasswordConfirmation);


function allInputsAreValid(){
    const emailIsValid = validateEmail();
    const countryIsValid = validateCountry();
    const zipCodeIsValid = validateZipCode();
    const passwordIsValid = validatePassword();
    const passwordConfirmationIsValid = validatePasswordConfirmation();

    return emailIsValid && countryIsValid && zipCodeIsValid && passwordIsValid && passwordConfirmationIsValid;
}


function displayCongratulationsMessage(){
    const body = document.querySelector('body');
    body.innerHTML = '';

    const congratulationsMessage = document.createElement("img");
    congratulationsMessage.id = "congratulations-cat";
    congratulationsMessage.src = './fist-bump-cat.png';
    congratulationsMessage.alt = "Cute cat requesting a fist-bump";

    body.appendChild(congratulationsMessage);
}

const submitButton = document.querySelector('form > button');
submitButton.addEventListener('click', ()=>{
    if(allInputsAreValid()){
        displayCongratulationsMessage();
    }
});