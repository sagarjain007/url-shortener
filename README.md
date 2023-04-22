# Node URL Shortener Service

A Node.js backend service for generating short URLs. The application is built using Express and MongoDB.

---
## Description
URL Shortener Service is a web application that allows users to generate short, easy-to-use URLs from long input URLs. When a user provides a long URL, the application generates a unique non-sequential ID and a new short URL. The original URL and the new shortened URL are then stored in MongoDB. When a user clicks on the shortened URL, the application retrieves the corresponding document from MongoDB and redirects the user to the original URL. The application also tracks and maintains the number of clicks on the URL.


## Installation and Usage
For a quick start guide check out the [SETUP.md](https://github.com/sagarjain007/url-shortener/blob/master/SETUP.md)

## Technologies Used
- Node
- Express
- MongoDB


### Swagger
- For swagger docs visit `http://localhost:3000/api-docs`
