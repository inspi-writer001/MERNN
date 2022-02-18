const express = require("express");
const route = express.Router();
const userVideo = require("./userVideos");

route.get("/video", (req, res) => {
  return res.status(200).json({ success: "gotten userVideo" });
});

route.post("/video", (req, res) => {
  const newVideo = new userVideo({
    comment: "HEy there",
    vidUrl: "some random text",
    bgSong: "may Paul",
  });
  newVideo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
  // return res
  //   .status(200)
  //   .json({ success: "youve successfully pushed", data: `${newVideo}` });
});

module.exports = route;
