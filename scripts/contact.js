// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const contactButton = document.querySelector("#submit-button");
const headingA = document.querySelector("#contact-page");

contactButton.onclick = () => {
    headingA.classList.add('thanks');
    headingA.textContent = ("Thank you for your message!");
}


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

