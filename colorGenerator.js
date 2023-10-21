function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.querySelector(".clrCode").innerText = randomCode;
}

document.querySelector(".btn").addEventListener("click", getColor);
getColor(); // Initial call to set a random color
