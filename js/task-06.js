const inputRef = document.querySelector("#validation-input");
const inputLength = Number(inputRef.getAttribute("data-length"));

const isValidLength = () =>
    inputRef.value.length !== inputLength
        ? inputRef.classList.add("valid") ||
          inputRef.classList.remove("invalid")
        : inputRef.classList.add("invalid") ||
          inputRef.classList.replace("invalid", "valid");

inputRef.addEventListener("blur", isValidLength);
