/* eslint-disable func-names */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const BUILD_DIR = path.join(__dirname, '/build');
const HTML_FILE = path.join(BUILD_DIR, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(BUILD_DIR));
  app.get('*', (req, res) => res.sendFile(HTML_FILE));
}
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
