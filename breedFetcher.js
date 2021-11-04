const request = require('request');

const fetchBreedDescription = (breedname, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (body.length === 2) {
      callback(null, 'Breed was not found');
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };