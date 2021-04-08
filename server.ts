import express from 'express';
import { promises } from 'fs';

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    promises.readFile('./content/index.html').then((data: Buffer) => {
        res.send(data.toString())
    })
})

app.listen(80, () => console.log("started."))