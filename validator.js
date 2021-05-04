function validate() {
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("verifyPassword").value;

    // Check if password matches
    if (password !== passwordConfirm) {
        showMessage("Passwords do not match!", "Validation Failed!");
        return;
    }

    // Check for any symbols
    if (password.match(/[!"£$%^&*()\-_=+\[{\]};:'@#~|\\?/,<.>]/)) {
        showMessage("Password cannot contain special characters!", "Validation Failed!");
        return;
    }


    // Check for capital letters
    if (password.match(/[A-Z]/)) {
        showMessage("Password cannot contain uppercase letters!", "Validation Failed!");
        return;
    }

    // Check if password contains any numbers
    if (password.match(/[0-9]/)) {
        showMessage("Password cannot contain any numbers!", "Validation Failed!");
        return;
    }

    // Check for length
    if (password.length > 4) {
        showMessage("Password cannot be longer than 4 characters!", "Validation Failed!");
        return;
    }

    // Check for any letters at all
    if (password.match(/[a-z]/)) {
        showMessage("Password cannot contain lowercase letters!", "Validation Failed!");
        return;
    }

    // Now there's nothing left
    showMessage("Password field is required!", "Validation Failed!");
}

function clear() {
    document.getElementById("password").value = "";
    document.getElementById("verifyPassword").value = "";
}

function showMessage(message, title) {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))
    document.getElementById("myModalBody").innerText = message;
    document.getElementById("myModalLabel").innerText = title;
    myModal.show();
}