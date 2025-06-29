// Write your code here!
// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Abubakar is the champion'; // Replace YOUR-NAME with your actual name

// Add the new <h1> to the document body
document.body.appendChild(newHeader);