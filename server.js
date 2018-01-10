const express = require('express')
const app = express()

app.use('/', express.static('src/client'));
app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data/carrier_cards.json');
});

app.listen(3000, () => console.log('Listening on port 3000'))