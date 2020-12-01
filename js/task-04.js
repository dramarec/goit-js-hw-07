const spanValueRef = document.querySelector('#value');
const decrementRef = document.querySelector(`button[data-action="decrement"]`);
const incrementRef = document.querySelector(`button[data-action="increment"]`);

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);

let counterValue = 0;
function decrement() {
    counterValue -= 1;
    return (spanValueRef.textContent = counterValue);
}
function increment() {
    counterValue += 1;
    return (spanValueRef.textContent = counterValue);
}
