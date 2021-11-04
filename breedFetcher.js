const request = require('request');

let args = process.argv;
args = args.slice(2);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
request(url, (error, response, body) => {
  if (error) {
    console.log(error.code);
  } else if (body.length === 2) {
    console.log('Breed was not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});