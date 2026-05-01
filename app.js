const express = require('express');
const app = express();
const db = require('./src/db/connection');
const courseRoutes = require('./src/routes/courseRoutes');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test endpoint
app.get('/', (req, res) => {
  res.send('Server berjalan dan terhubung ke database ✅');
});

// pakai router
app.use('/course', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
