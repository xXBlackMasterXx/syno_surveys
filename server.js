const express = require('express');
const app = express();

app.use(express.static("public"));
app.use('/custom', express.static("custom"));

app.listen(8080);