function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSymbol) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+=-{}";

    let allowedchars = "";
    let password = "";

    allowedchars += includeUppercase ? uppercase : "";
    allowedchars += includeLowercase ? lowercase : "";
    allowedchars += includeNumber ? numbers : "";
    allowedchars += includeSymbol ? symbols : "";

    if (passwordLength <= 0) {
        return `Password must be at least 1 character long.`;
    }

    if (allowedchars.length === 0) {
        return `At least one option must be selected.`;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}

document.getElementById('button').addEventListener('click', function() {
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = document.getElementById('Uppercase').checked;
    const includeLowercase = document.getElementById('LowerCase').checked;
    const includeNumber = document.getElementById('Number').checked;
    const includeSymbol = document.getElementById('Symbols').checked;

    const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSymbol);

    const resultPassword = document.getElementById('resultPassword');
    resultPassword.textContent = password;
});

document.getElementById('password-card').addEventListener('click', function() {
    const password = document.getElementById('resultPassword').textContent;

    navigator.clipboard.writeText(password).then(function() {
        alert("Password copied to clipboard!");
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
