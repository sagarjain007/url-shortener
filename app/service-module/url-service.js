require("dotenv").config();

const UrlModel = require("../models/url.model");
const shortid = require("shortid");

module.exports.generateShortUrlService = async (originalUrl) => {
  const urlCode = shortid.generate();

  let url = await UrlModel.findOne({ originalUrl });
  if (url) {
    return url;
  } else {
    const shortenedUrl = process.env.BASE_URL + "/" + urlCode;
    url = new UrlModel({
      originalUrl,
      shortenedUrl,
      urlCode,
    });
    await url.save();
    return url;
  }
};

module.exports.findUrlByCode = async (urlCode) => {
  try {
    let result = await UrlModel.findOne({ urlCode });
    return result;
  } catch (error) {
    throw error;
  }
};
