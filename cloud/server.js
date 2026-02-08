const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloud Service - hstarsp.net</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Outfit', sans-serif;
                background-color: #050510;
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                text-align: center;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            h1 { color: #00d2ff; margin-bottom: 1rem; }
            p { opacity: 0.8; }
            a { color: #3a7bd5; text-decoration: none; margin-top: 1rem; display: inline-block; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Cloud Service</h1>
            <p>Welcome to the Cloud Storage Subdomain.</p>
            <p>URL: ${process.env.SELF_URL || 'https://cloud.hstarsp.net'}</p>
            <a href="${process.env.MAIN_URL || 'https://hstarsp.net'}">← Back to Main</a>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Cloud Service listening on port ${port}`);
});
