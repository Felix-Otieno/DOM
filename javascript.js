//select the DOM element
const header = document.getElementById('header');
const button = document.getElementById('changeTextButton');

//add an eventlistener to the button
button.addEventListener ('click', () => {
    header.textContent ='Hello, DOM!';
});