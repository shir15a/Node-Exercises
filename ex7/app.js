const axios = require('axios');
const request = require('request');
const superagent = require('superagent');


const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

// • Fetch data using axios
axios.get(url)
    .then(function (res) {
        console.log(res);
    }).catch(function (error) {
        console.log(error, 'error');
    })


// • fetch data using the request module
request({ url: url, json: true }, (error, res) => {
    console.log(res.body);
})


//• Fetch data using another 3rd party module
superagent
    .get(url)
    .then((res) =>
        console.log("superagent response: ", res.body)
    )
    .catch((error) => console.log(error));