const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/upload', uploadRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
