require("dotenv").config();

const UrlModel = require("../models/url.model");
const shortid = require("shortid");

module.exports.generateShortUrlService = async (originalUrl) => {
  const urlCode = shortid.generate();
  let url = await UrlModel.findOneAndUpdate(
    { originalUrl },
    { $inc: { clicks: 1 } },
    { new: true }
  );
  if (url) {
    return url;
  } else {
    const shortenedUrl = process.env.BASE_URL + "/" + urlCode;
    url = new UrlModel({
      originalUrl,
      shortenedUrl,
      urlCode,
      clicks: 1,
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
