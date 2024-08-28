const idInput = document.querySelector('#signup-id');
const passwordInput = document.querySelector('#signup-password');
const passwordCheckInput = document.querySelector('#password-check');
const signupButton = document.querySelector('#signup-btn');
const idError = document.querySelector('#id-error');
const passwordError = document.querySelector('#password-error');
const passwordLengthError = document.querySelector('#password-length-error');
const passwordCheckError = document.querySelector('#password-check-error');

function validateId() {
    const idValue = idInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (idValue === '') {
        idInput.classList.add('invalid-after-focus');
        idError.style.display = 'block';
    } else if (!emailPattern.test(idValue)) {
        idInput.classList.add('invalid-after-focus');
        idError.style.display = 'none';
        idFormatError.style.display = 'block';
    } else {
        idInput.classList.remove('invalid-after-focus');
        idError.style.display = 'none';
        idFormatError.style.display = 'none';
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue === '') {
        passwordInput.classList.add('invalid-after-focus');
        passwordError.style.display = 'block';
        passwordLengthError.style.display = 'none'
    } else if (passwordValue.length < 8) {
        passwordInput.classList.add('invalid-after-focus');
        passwordError.style.display = 'none';
        passwordLengthError.style.display = 'block';
    } else {
        passwordInput.classList.remove('invalid-after-focus');
        passwordError.style.display = 'none';
        passwordLengthError.style.display = 'none';
    }
}

function validatePasswordCheck() {
    const passwordValue = passwordInput.value;
    const passwordCheckValue = passwordCheckInput.value;

    if (passwordValue !== passwordCheckValue) {
        passwordCheckInput.classList.add('invalid-after-focus');
        passwordCheckError.style.display = 'block';
    } else {
        passwordCheckInput.classList.remove('invalid-after-focus');
        passwordCheckError.style.display = 'none';
    }
}

function checkInputs() {
    const isIdValid = idInput.value !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idInput.value);
    const isPasswordValid = passwordInput.value !== '' && passwordInput.value.length >= 8;
    const isPasswordCheckValid = passwordInput.value === passwordCheckInput.value;

    if (isIdValid && isPasswordValid && isPasswordCheckValid) {
        signupButton.disabled = false;
    } else {
        signupButton.disabled = true;
    }
}

idInput.addEventListener('blur', () => {
    validateId();
    checkInputs();
});

passwordInput.addEventListener('blur', () => {
    validatePassword();
    validatePasswordCheck();
    checkInputs();
});

passwordCheckInput.addEventListener('blur', () => {
    validatePasswordCheck();
    checkInputs();
});

signupButton.addEventListener('click', () => {
    if (!signupButton.disabled) {
        window.location.href = '/items';
    }
});
