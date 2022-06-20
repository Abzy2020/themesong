import express from 'express';
import axios from 'axios';
import { config } from 'dotenv';

config({path: "../.env"});
const app = express();
const port = process.env.PORT || 3001;

//request lyrics
app.get('/results/:artist/:track', (req, res) => {

    const options = {
        method: "GET",
        url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
        params: {
            q_artist: req.params.artist,
            q_track: req.params.track,
            apikey: process.env.API_KEY
        },
    };

    const getLyrics = async () => {
        const response = await axios.request(options);
        data = response.data.message.body.lyrics.lyrics_body;
    
        console.log(data);
        res.send(data);
    }
    getLyrics();
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
