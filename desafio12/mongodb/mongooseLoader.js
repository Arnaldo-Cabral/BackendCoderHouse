const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb+srv://arnaldo32065:BIEAE5yMhPRj1V6U@cluster0.txrozxj.mongodb.net/ecommerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('[Mongoose] - connected in:', process.env.MONGODB_URL);
});

mongoose.connection.on('error', (err) => {
  console.log('[Mongoose] - error:', err);
});

module.exports = connection;