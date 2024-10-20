// Function to change the message after the cat arrives
function changeMessage() {
    const messageText = document.getElementById("messageText");
    messageText.innerHTML = "<p><strong>Hello, you have a new message!</strong></p><span class='timestamp'>Just now</span>";
}

// Set a timeout for 4 seconds (when the cat finishes running)
setTimeout(changeMessage, 4000);
