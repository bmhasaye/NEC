document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var addPostModal = document.getElementById("addPostModal");
    var closeModal = document.getElementById("closeModal");

    // Show modal when the "Add Post" button is clicked
    openModalBtn.onclick = function() {
        addPostModal.style.display = "flex";
    };

    // Close modal when the "x" button is clicked
    closeModal.onclick = function() {
        addPostModal.style.display = "none";
    };

    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == addPostModal) {
            addPostModal.style.display = "none";
        }
    };
});
