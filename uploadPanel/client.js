// Function to handle form submission
function uploadFile() {
    // Get form element
    const form = document.getElementById('uploadForm');
    
    // Create FormData object to store form data
    const formData = new FormData(form);
  
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set up event listener to handle response
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('File uploaded successfully.');
        // Clear form after successful upload (if needed)
        form.reset();
      } else {
        alert('Error uploading file.');
      }
    };
  
    // Open POST request to upload endpoint
    xhr.open('POST', '/upload');
  
    // Send FormData object
    xhr.send(formData);
  }
  
  // Connect uploadFile function to the Upload button
  const uploadButton = document.getElementById('uploadButton');
  uploadButton.addEventListener('click', uploadFile);  

// Generate years from 2010 to 2024
const yearSelect = document.getElementById('examYear');
for (let year = 2010; year <= 2024; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}