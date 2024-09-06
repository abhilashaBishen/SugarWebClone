const express = require('express');
const cors = require('cors');  // Fixed typo here

const dotenv = require('dotenv');
const router = require('./routes/base');
dotenv.config();

const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'  // Allow requests from this origin
}));


app.use('/api', router);

// Optional: You can uncomment this if you want to test your server
// app.get('/', (req, res) => {
//     res.send('Backend server started....here');
// });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
