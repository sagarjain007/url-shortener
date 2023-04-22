require("dotenv").config();

const UrlModel = require("../models/url.model");
const shortid = require("shortid");

module.exports.generateShortUrlService = async (originalUrl) => {
  const urlCode = shortid.generate();
  let url = await UrlModel.findOneAndUpdate(
    { originalUrl },  // Filter
    { $inc: { clicks: 1 } },          // Update
    { new: true }                      // Options
  )
  // let url = await UrlModel.findOne({ originalUrl });
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

// const findAndUpdateClick = async () => {
//   let result = 
//   return result;
// }