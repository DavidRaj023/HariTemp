const express = require('express');
const cors = require('cors');

const studentRouter = require('./routers/student');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
