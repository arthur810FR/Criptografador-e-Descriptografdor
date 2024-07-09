function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Deslocamento fixo de 3
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += inputText.charAt(i);
        }
    }

    document.getElementById('inputText').value = result;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Deslocamento fixo de 3
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            result += inputText.charAt(i);
        }
    }

    document.getElementById('inputText').value = result;
}
