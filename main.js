function convertImageToBase64() {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const base64String = reader.result.split(',')[1];
            document.getElementById('image-base64').value = base64String;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file first.");
    }
}

function convertTextToBase64() {
    const text = document.getElementById('text-input').value;
    if (text) {
        const base64String = btoa(text);
        document.getElementById('text-base64').value = base64String;
    } else {
        alert("Please enter some text to convert.");
    }
}

function copyToClipboard(id) {
    const textarea = document.getElementById(id);
    textarea.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
}

function clearTextBoxText() {
    const textInput = document.getElementById('text-input');
    textInput.value = '';
    const base64Text = document.getElementById('text-base64');
    base64Text.value = '';
}

function clearTextBoxImg() {

    const base64Text = document.getElementById('image-base64');
    base64Text.value = '';

    const inputFile = document.getElementById('uploaded-file-name');
    inputFile.innerHTML = '';
}

const fileInput = document.getElementById('image-upload');
const uploadedFileName = document.getElementById('uploaded-file-name');

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        uploadedFileName.innerHTML = `Filename: <strong>${file.name}</strong>`;
    } else {
        uploadedFileName.textContent = '';
    }
});