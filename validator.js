function validate() {
    let password = document.getElementById("password").value;
    showError(password);
}

/**
 * Function to show an error message to the user.
 * @param message The message to display.
 */
function showError(message) {
    alert(message);
}