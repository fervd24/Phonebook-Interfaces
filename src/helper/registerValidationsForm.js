const registerValidationsForm = (form) => {
    let errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


    if(!form.name.trim()) {
        errors.name = "Please enter a name.";
    }else if(!nameRegex.test(form.name)){
        errors.name = "The name cannot contain numbers.";
    }

    if(!form.email.trim()) {
        errors.email = "The email is required."
    }else if(!regexEmail.test(form.email)) {
        errors.email = "The email doesn't have the correct format.";
    }

    if(!form.password.trim()) {
        errors.password = "The password is required."
    }else if(form.password.length < 8) {
        errors.password = "The password must have at least 8 characters."
    }

    if(form.confPassword !== form.password) {
        errors.confPassword = "The confirmation and password don't match."
    }

    return errors;
}

export default registerValidationsForm;