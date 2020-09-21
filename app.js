import express from 'express';
const app = express();

require('dotenv').config();

const TEST = process.env.TEST_ENV_VARIABLE || 'DEFAULT'

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.get(`/test`, (req, res) => res.send(JSON.stringify(process.env, null, 2)));

const server = app.listen(3000, () => console.log('App listening on port 3000'));