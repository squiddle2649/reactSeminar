import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App></App>)
const date = new Date(2023,11,17);
console.log(date.getDay)
