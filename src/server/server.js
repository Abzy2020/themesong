const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/results/:artist/:track', (req, res) => {

    const options = {
        method: "GET",
        url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
        params: {
            q_artist: req.params.artist,
            q_track: req.params.track,
            apikey: "b7fae0ed351f31816949da88d7cf2e09"
        },
    };
    axios.request(options).then((response) => {
        data = response.data.message.body.lyrics.lyrics_body
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
