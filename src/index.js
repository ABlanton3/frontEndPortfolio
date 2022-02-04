import React from 'react';
import express from 'express';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = express()

app.listen(4242, () => {
  console.log("The server is running.");
})
