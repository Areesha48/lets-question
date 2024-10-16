const wrapper = document.querySelector( '.wrapper');
const question = document.querySelector( '.question');
const btnyes = document.querySelector( '.btn-yes');
const btnno = document.querySelector( '.btn-no');



const answer = document.querySelector('.answer');

let moveNoButton;  // To hold the interval reference

// Function to move the 'No' button up and down continuously
function startMovingButton() {
    moveNoButton = setInterval(() => {
        btnno.classList.toggle('move');
    }, 300); // Move every 300 milliseconds
}

// When 'Yes' button is clicked
btnyes.addEventListener('click', function() {
    answer.textContent = "I love you to!";
    answer.style.color = '#ff0000';
    
    // Stop moving the 'No' button
    clearInterval(moveNoButton);
    btnno.classList.remove('move');  // Ensure the movement stops
});

// When 'No' button is clicked (or hovered)
btnno.addEventListener('click', function() {
    startMovingButton();  // Start moving when clicked
});



 // Show flowers//
 flowerContainer.innerHTML = `
 <img src="rain-lily-small-hybrid-01-510x510.jpg" alt="Flower">
 <img src="https://cdn-icons-png.flaticon.com/512/3799/3799946.png" alt="Flower">
 <img src="https://cdn-icons-png.flaticon.com/512/3799/3799946.png" alt="Flower">
`;
flowerContainer.style.display = 'flex'; // Display the flower container//


// When 'No' button is clicked (or hovered)
btnno.addEventListener('click', function() {
startMovingButton();  // Start moving when clicked
});