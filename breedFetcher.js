const request = require('request');

let args = process.argv;
args = args.slice(2);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed was not found');
  } else {
    console.log(data[0].description);
  }
});