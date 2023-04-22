const express = require("express");
const router = express.Router();
const {
  generateShortUrl,
  redirectToOriginal,
} = require("../delegate-module/url-delegate");

router.get("/ping", (req, res) => {
  res.status(200).json({ status: "I am working" });
});

/**
 * @swagger
 * /generateShortUrl:
 *    post:
 *      description: Used to generate a short url
 *      parameters:
 *        - name: originalUrl
 *          in: body
 *          description: Url to be shortened
 *          schema:
 *            type: object
 *            required:
 *              - originalUrl
 *            properties:
 *              originalUrl:
 *                type: string
 *      responses:
 *        '201':
 *          description: Shortened URL generated Successfully
 */

router.route("/generateShortUrl").post(generateShortUrl);


/**
 * @swagger
 * /{urlCode}:
 *   get:
 *     description: Redirects to the original url
 *     parameters:
 *       - in: path
 *         name: urlCode   
 *         required: true
 *         type: string
 *         description: The url code.
 *     responses:
 *       302:
 *         description: Redirect
 *         headers:
 *           Access-Control-Allow-Origin:
 *             type: string
 *             description: Allows cross-origin requests from any domain
 *             example: "*"
 */

router.route("/:urlCode").get(redirectToOriginal);

module.exports = router;
