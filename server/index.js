const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/../public`));

const port = process.env.PORT || 3001;

//Zack's API
app.get('/pictures', (req, res) => {
  const url = 'http://13.56.229.226' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/reviewPhotos', (req, res) => {
  const url = 'http://13.56.229.226' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

//Rita's API
app.get('/reviews/*', (req,res) => {
  const url = 'http://etsy-reviews.rvrita.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/review-summary/*', (req,res) => {
  const url = 'http://etsy-reviews.rvrita.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/review-list/*', (req,res) => {
  const url = 'http://etsy-reviews.rvrita.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/reviews-pictures/*', (req,res) => {
  const url = 'http://etsy-reviews.rvrita.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

//Val's API
app.get('/itemDetails/*', (req, res) => {
  const url = 'http://ec2-3-133-108-106.us-east-2.compute.amazonaws.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/info/*', (req, res) => {
  const url = 'http://ec2-3-133-108-106.us-east-2.compute.amazonaws.com' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data)
    })
    .catch((err) => {
      res.send(err)
    })
})

//Tammy's API
app.get('shipping-api/*', (req, res) => {
  const url = 'http://3.95.162.236' + req.url;
  axios.get(url)
    .then((resp) => {
      res.send(resp.data)
    })
    .catch((err) => {
      res.send(err)
    })
})

//Render html page
app.get('/:id', (req,res) => {
  console.log('/:id',req.params)
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
})