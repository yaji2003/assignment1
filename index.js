const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3001; // Change 3001 to the desired port number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});