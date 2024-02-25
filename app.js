// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/nodejsCrudApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
