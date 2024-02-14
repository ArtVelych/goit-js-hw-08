const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const email = evt.currentTarget.elements.email.value.trim();
    const password = evt.currentTarget.elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
    } else {
        const userData = {
        email,
        password,
        };

        console.log(userData);
    }

    evt.currentTarget.reset();
}