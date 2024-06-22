document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();


    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'Arjun214' && password === 'AK') {
        alert('Login successful!');

        window.location.href = 'Dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
