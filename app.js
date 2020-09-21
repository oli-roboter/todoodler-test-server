import express from 'express';
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.get(`/test`, (req, res) => res.send('Test successfull, environment variable is:', process.env.TEST_ENV_VARIABLE));

const server = app.listen(3000, () => console.log('App listening on port 3000'));