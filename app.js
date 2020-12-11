const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();

    if(emailValue === '') {
        email.classList.add('email-error')
        } else if(!isEmail(emailValue)) {
            email.classList.add('email-error');
        } else {
            alert('Success!');
            email.value = '';
            email.className = "email"
        }
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}