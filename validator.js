function validate() {
    let password = document.getElementById("password").value;

    // Check for any symbols
    if (password.match(/[!"£$%^&*()\-_=+\[{\]};:'@#~|\\?/]/)) {
        showError("Password cannot contain any symbols!");
        return;
    }

    // Check if password contains any numbers
    if (password.match(/[0-9]/)) {
        showError("Password cannot contain any numbers!");
        return;
    }

    // Check for capital letters
    if (password.match(/[A-Z]/)) {
        showError("Password cannot contain capital letters!");
        return;
    }

    // Check for length
    if (password.length > 4) {
        showError("Password cannot be longer than 4 characters!");
        return;
    }

    // Check for any letters at all
    if (password.match(/[a-z]/)) {
        showError("Password cannot contain letters!")
        return;
    }

    // Only if there is nothing left in the box do we show success
    showSuccess("Password validated!")
}

/**
 * Function to show an error message to the user.
 * For now this just wraps alert, but later it will add a visually appealing error.
 * @param message
 */
function showError(message) {
    alert(message);
}

/**
 * Function to communicate success to the user.
 * Currently wraps alert, but will later add a visually appealing message to the screen.
 * @param message
 */
function showSuccess(message) {
    alert(message)
}