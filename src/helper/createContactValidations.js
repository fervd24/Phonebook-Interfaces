const createContactValidations = (form) => {
    let errors = {};
    const nameRegex = /^[A-Za-z0-9\s]+$/;
    const phoneRegex = /^[0-9]+$/;
    

    if(!form.name) {
        errors.name = "Please enter a name.";
    }else if(!nameRegex.test(form.name)){
        errors.name = "The name cannot contain numbers.";
    }
    
    if(!form.phone) {
        errors.phone = "Please enter a phone number";
    }else if(!phoneRegex.test(form.phone)) {
        errors.phone = "The phone number only can have numbers.";
    }else if(form.phone.length < 8) {
        errors.phone = "The phone number at least must have 8 digits.";
    }

    return errors;
}

export default createContactValidations;