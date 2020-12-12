const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();

    if(emailValue === '') {
        email.classList.add('email-error')
        email.value = ''
        email.placeholder = 'Please enter a valid email address'
        } else if(!isEmail(emailValue)) {
            email.classList.add('email-error');
            email.value = ''
            email.placeholder = 'Please enter a valid email address'
        } else {
            alert('Success!');
            email.value = '';
            email.className = "email"
            email.placeholder = "Your email address..."
        }
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}