function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        window.location.href = "index.html";
    } else {
        alert("Please enter both username and password.");
    }
}
