const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/chatbot', chatbotRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/businessRegistration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});