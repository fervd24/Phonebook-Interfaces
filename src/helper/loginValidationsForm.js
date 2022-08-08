const loginValidationsForm = (form) => {
    let errors = {};
    const {email, password} = form;

    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!email) {
        errors.email = "The email is required."
    }else if(!regexEmail.test(email)) {
        errors.email = "The email doesn't have the correct format.";
    }

     if(!password) {
         errors.password = "The password is required"
     }else if(password.length < 8) {
         errors.password = "The password must have at least 8 characters."
     }

    return errors;
}

export default loginValidationsForm;