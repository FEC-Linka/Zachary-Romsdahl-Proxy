const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/../public`));

const port = process.env.PORT || 3001;

app.get('/:id', (req,res) => {
  console.log(req.params)
  res.sendFile(path.join(__dirname, '../public/index.html'));
})
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
})