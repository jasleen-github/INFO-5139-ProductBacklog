const express = require('express');
const app = express();
const PORT = 5000;

const data = [
  { id: 1, title: 'Search Result 1' },
  { id: 2, title: 'Search Result 2' },
  { id: 3, title: 'Search Result 3' }
];


app.get('/api/search', (req, res) => {
  const query = req.query.q;
  const results = data.filter(item => item.title.includes(query));
  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});