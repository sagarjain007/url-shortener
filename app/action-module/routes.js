const express = require("express");
const router = express.Router();
const {
  generateShortUrl,
  redirectToOriginal,
} = require("../delegate-module/url-delegate");

router.get("/ping", (req, res) => {
  res.status(200).json({ status: "I am working" });
});

router.route("/generateShortUrl").post(generateShortUrl);

router.route("/:urlCode").get(redirectToOriginal);

module.exports = router;
