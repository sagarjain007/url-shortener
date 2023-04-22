const {
  generateShortUrlService,
  findUrlByCode,
} = require("../service-module/url-service");
const validUrl = require("valid-url");

module.exports.generateShortUrl = async (req, res) => {
  const originalUrl = req.body.originalUrl;

  if (validUrl.isUri(originalUrl)) {
    try {
      let result = await generateShortUrlService(originalUrl);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json(`URL: ${originalUrl} is invalid`);
  }
};

module.exports.redirectToOriginal = async (req, res) => {
  try {
    console.log(req.params.urlCode);
    const url = await findUrlByCode(req.params.urlCode);
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};
