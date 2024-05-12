const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Serve static files from the 'uploadPanel' directory
app.use(express.static(path.join(__dirname)));

// Set up multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
});

// Route for handling file upload
app.post('/upload', upload.single('pdfFile'), (req, res) =>{
  //console.log(32332);

  if (req.file)
    {
    res.send('File uploaded successfully.');
  }
  else
  {
    res.status(400).send('Error uploading file.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});