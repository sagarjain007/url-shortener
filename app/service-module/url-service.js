const UrlModel = require("../models/url.model");
const shortid = require("shortid");

async function getUrlsService() {
  try {
    let result = await UrlModel.find({});
    return result;
  } catch (error) {
    throw err;
  }
}

module.exports.generateShortUrlService = async (originalUrl) => {
  baseUrl = "localhost:3000";
  const urlCode = shortid.generate();

  let url = await UrlModel.findOne({ originalUrl });
  if (url) {
    return url;
  } else {
    const shortenedUrl = baseUrl + "/" + urlCode;
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
