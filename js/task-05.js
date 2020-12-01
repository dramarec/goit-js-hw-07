const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const handleInputChange = event => {
    event.target.value
        ? (outputRef.textContent = event.target.value)
        : (outputRef.textContent = 'незнакомец');
};
inputRef.addEventListener(`input`, handleInputChange);
