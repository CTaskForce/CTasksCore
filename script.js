function encrypt(text, s) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-Z]/)) {
            result += String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
        } else if (char.match(/[a-z]/)) {
            result += String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
        } else {
            result += char;
        }
    }
    return result;
}
function decryptWithKey(cipher, key) {
    let result = '';
    for (let i = 0; i < cipher.length; i++) {
        let char = cipher[i];
        if (char.match(/[A-Z]/)) {
            result += String.fromCharCode((char.charCodeAt(0) - key + 26 - 65) % 26 + 65);
        } else if (char.match(/[a-z]/)) {
            result += String.fromCharCode((char.charCodeAt(0) - key + 26 - 97) % 26 + 97);
        } else {
            result += char;
        }
    }
    return result;
}
function getPasswordAndEncrypt() {
    let password = prompt('Enter password:');
    if (password === 'Cropican.Task.Force') {
        let operation = prompt('Encrypt or Decrypt?');
        let text = prompt('Enter text:');
        let key, result;
        if (operation === 'Encrypt') {
            key = Math.floor(Math.random() * 26);
            result = encrypt(text, key);
            alert('Encrypted Text: ' + result + '\nKey: ' + key);
        } else if (operation === 'Decrypt') {
            key = parseInt(prompt('Enter key:'));
            result = decryptWithKey(text, key);
            alert('Decrypted Text: ' + result);
        } else {
            alert('Invalid operation');
        }
    } else {
        alert('Invalid password');
    }
}
