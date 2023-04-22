# Node URL Shortener Service

A Node.js web application for generating short URLs.

## Installation

1. Clone the repository: `https://github.com/sagarjain007/url-shortener.git`
2. Note switch to master branch in your code 
3. Install dependencies: `npm install`
4. Run the server: `npm run start`
5. Make sure you have mongoDB installed and running.

## Usage

### POST /generateShortUrl
- Make a post request to for example -  localhost:3000/generateShortUrl
- Send the input url in the request body as a json.
    ```
    {
        "originalUrl": "<input long url>"
    }
    ```
- Copy the `shortenedUrl` from the response and paste it in your browser.
- You will get redirected to your original url.
