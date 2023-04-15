const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log("middleware connection successful");
  next();
};

// Mount middleware for all routes
app.use(myMiddleware);

module.exports = myMiddleware;