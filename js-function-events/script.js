// Function to be triggered on button click
function changeText() {
  // Get the paragraph element by its id
  let paragraph = document.getElementById("myParagraph");

  // Change the text content of the paragraph
  paragraph.textContent = "Text changed by clicking the button!";
}

// Attach an event listener to the button
document.getElementById("myButton").addEventListener("click", changeText);
