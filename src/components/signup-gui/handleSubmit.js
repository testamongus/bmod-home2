function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    let errorMessage;

    function displayError(message) {
        const errorText = document.getElementById('signup-error-message');
        errorText.style.display = "block";
        errorText.style.color = "red";
        errorText.innerText = String(message);
        console.error(String(message));
    }

    function displayWarn(message) {
        const errorText = document.getElementById('signup-error-message');
        errorText.style.display = "block";
        errorText.style.color = "yellow";
        errorText.innerText = String(message);
        console.warn(String(message));
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
    
    console.log("Your username, email and Password:", { username, email, password });
    displayWarn("Just to let you know, this doesn't actually do anything");
}

export default handleSubmit;