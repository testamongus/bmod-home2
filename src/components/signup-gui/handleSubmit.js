function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    let errorMessage;

    function displayError(message) {
        const errorText = document.getElementById('signup-error-message');
        errorText.style.display = "block";
        errorText.innerText = String(message);
        console.error(String(message));
    }

    if (username.length < 3) {
        errorMessage = "Username must be at least 3 characters long.";
        displayError(errorMessage);
        return;
    }

    if (username.length > 20) {
        errorMessage = "Username must be shorter than 20 characters long."
        displayError(errorMessage);
        return;
    }

    if (/\s/.test(username)) {
        errorMessage = "Username must not include any spaces.";
        displayError(errorMessage);
        return;
    }
    
    console.log("Your username and Password:", { username, password });
    displayError("Just to let you know, this doesn't do anything");
    document.getElementById('signup-error-message').style.color = "yellow"
}

export default handleSubmit;