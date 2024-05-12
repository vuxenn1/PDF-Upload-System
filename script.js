// Function to handle file upload
function handleFileUpload(event) {
    const files = event.target.files; // Get uploaded files

    // Iterate through uploaded files
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Check if the uploaded file is a PDF
        if (file.type === 'application/pdf') {
            // Create a new table row
            const newRow = document.createElement('tr');

            // Create table data cells for file name, year, and exam type
            const fileNameCell = document.createElement('td');
            fileNameCell.textContent = file.name; // Set file name as cell content

            const yearCell = document.createElement('td');
            yearCell.textContent = 'Unknown'; // You can add logic to determine the year

            const examTypeCell = document.createElement('td');
            examTypeCell.textContent = 'Unknown'; // You can add logic to determine the exam type

            // Append cells to the new row
            newRow.appendChild(fileNameCell);
            newRow.appendChild(yearCell);
            newRow.appendChild(examTypeCell);

            // Append the new row to the table body
            document.querySelector('.pdf-table tbody').appendChild(newRow);
        }
    }
}

// Add event listener to the file input element
document.getElementById('fileInput').addEventListener('change', handleFileUpload);
