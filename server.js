const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files
const publicFiles = path.join(__dirname, 'public');
server.use(express.static(publicFiles));

// Route to handle Mad Lib form submission
server.post('/ITC505/lab-7', (req, res) => {
    const { noun, adjective, verb, place, pluralNoun } = req.body;

    if (!noun || !adjective || !verb || !place || !pluralNoun) {
        res.send(`
            <h1>Missing Fields</h1>
            <p>Please fill out all the fields before submitting.</p>
            <a href="/ITC505/lab-7/index.html">Go back to form</a>
        `);
        return;
    }

    const story = `
        Once upon a time in ${place}, there was a ${adjective} ${noun}.
        Every day, it loved to ${verb} with a bunch of ${pluralNoun}.
        People in ${place} could hear them laughing all day long!
    `;

    res.send(`
        <h1>Your Mad Lib Story</h1>
        <p>${story}</p>
        <a href="/ITC505/lab-7/index.html">Create another story</a>
    `);
});

// Default port setup
let port = 80;
if (process.argv[2] === 'local') {
    port = 8080;
}

server.listen(port, () => console.log('Server ready on port', port));
