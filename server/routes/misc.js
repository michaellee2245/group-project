const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');

router.use((req,res,next) => {
  req.db = req.app.get('db');
  next();
});

router.post('',isAuthenticated)