const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
 app.get('/home', (req, res) => {
   res.send('Welcome to the Home page!');
 });
 
 app.get('/about', (req, res) => {
   res.send('About us page.');
 });
 
 app.get('/contact', (req, res) => {
   res.send('Contact us at contact@example.com');
 });
 
 app.get('/service', (req, res) => {
   res.send('Our Services page.');
 });

app.get('/manish', (req, res) => {
   res.send('Our Manish page.');
});

app.get('/sujeet', (req, res) => {
   res.send('Our Sujeet page.');
});

app.get('/roobee', (req, res) => {
   res.send('Our Roobee page.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
