export const validation = () => {

    //Patterns
    let login = /[a-z]/;
    let email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let name = /[a-zA-zа-яА-я]/;


    //Inputs
    let inputLogin = document.querySelector('#login');

    let inputName = document.querySelector('#name');

    let inputEmails = document.querySelectorAll('.email');
    

    //form button
    let btn = document.querySelector('#formBtn');



    //functions

    function validateFunc(element, reg) {
        if(btn && element) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if(!valid(reg, element.value)) {
                    console.log('error');
                    element.parentElement.classList.add('not-valid');
                    element.parentElement.classList.remove('valid');
                } else {
                    console.log('success');
                    element.parentElement.classList.add('valid');
                    element.parentElement.classList.remove('not-valid');
                }
            });
        }
    }

    //valid function
    function valid(regex, inp) {
        return regex.test(inp);
    }

    validateFunc(inputLogin, login);

    if(inputEmails.length > 0) {
        inputEmails.forEach(inputEmail => {
            validateFunc(inputEmail, email);
        });
    }
    
    validateFunc(inputName, name);
    


    //email function

    


    
    
};