const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

const outputPreviousContent = output.textContent;

input.addEventListener('input', (evt) => {
    if (!evt.currentTarget.value.trim()) {
        output.textContent = outputPreviousContent;
    } else {
        output.textContent = evt.currentTarget.value.trim();
    }
});