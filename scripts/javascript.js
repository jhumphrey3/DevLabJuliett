const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const add = document.getElementById('add');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pnum = document.getElementById('pnum');


form.addEventListener('submit', e => {
    e.preventDefault();

    var fname = document.getElementById('fname').value

    console.log(fname)

    var lname = document.getElementById('lname').value

    console.log(lname)

    var add = document.getElementById('add').value

    console.log(add)

    var email = document.getElementById('email').value

    console.log(email)

    var password = document.getElementById('password').value

    console.log(password)

    var pnum = document.getElementById('phonenumber').value

    console.log(pnum)


    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const addValue = add.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    

    if(fnameValue === '') {
        setError(fname, 'First name is required');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last name is required');
    } else {
        setSuccess(lname);
    }

    if(addValue === '') {
        setError(add, 'Address is required');
    } else {
        setSuccess(add);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(phonenumberValue === '') {
        setError(phonenumber, 'Phone number is required');
    } else if (phonenumberValue.length < 11 ) {
        setError(phonenumber, 'Phone number must be at least 10-11 digits.')
    } else {
        setSuccess(phonenumber);
    }


};
