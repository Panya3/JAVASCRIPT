function validateForm() {
    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();
    let email = document.getElementById('email').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let educationQualification = document.getElementById('educationQualification').value.trim();

    if (!validateName(name)) {
        alert('Please enter a valid name.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Please enter a valid password.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (!validateEducationQualification(educationQualification)) {
        alert('Please select a valid education qualification.');
        return false;
    }

    return true;
}

function validateName(name) {
    let nameRegex = /^[a-zA-Z]+$/;
    return name.length >= 6 && nameRegex.test(name);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    let phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}

function validateEducationQualification(educationQualification) {
    let options = document.getElementById('educationQualification').options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            return true;
        }
    }
    return false;
}