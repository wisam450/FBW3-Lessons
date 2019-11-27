const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // receive a chunk of data
    resp.on('data', (chunk) => {
        data += chunk; 
    }); 

    // the whole resp has been received
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.log("Something went wrong: " + err.message);
});