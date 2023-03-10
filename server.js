require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const bodyParser = require('body-parser');
const path = require('path')

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'));
app.use('/api/payment', cors({ origin: 'http://localhost:3000' }), require('./routes/payment'))
app.use('/api/lawyers', require('./routes/lawyers'))

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (request, response) =>  response.send('Development Mode'))
}

const server = app.listen(process.env.PORT, () => console.log('Server is running on port 5000'));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
});