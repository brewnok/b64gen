function convertImageToBase64() {
      const fileInput = document.getElementById('image-upload');
      const file = fileInput.files[0];

      if (file) {
          const reader = new FileReader();
          reader.onloadend = function () {
              const base64String = reader.result.split(',')[1];  // remove the "data:image/jpeg;base64," part
              document.getElementById('image-base64').value = base64String;
          };
          reader.readAsDataURL(file);
      } else {
          alert("Please select an image file first.");
      }
  }

  // Function to convert text to Base64
  function convertTextToBase64() {
      const text = document.getElementById('text-input').value;
      if (text) {
          const base64String = btoa(text);
          document.getElementById('text-base64').value = base64String;
      } else {
          alert("Please enter some text to convert.");
      }
  }

  // Function to copy content to clipboard
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

      const inputFile = document.getElementById('image-upload');
      inputFile.value = '';
  }