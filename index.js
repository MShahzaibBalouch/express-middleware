const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

// Middleware
app.use(loggerMiddleware);

// Routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
