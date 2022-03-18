const express = require("express");
const route = express.Router();
const userVideo = require("./userVideos");

route.get("/video", (req, res) => {
  return res.status(200).json({ success: "gotten userVideo" });
});

route.post("/video", (req, res) => {
  const newVideo = userVideo({
    ...req.body, //defactoring req.body into an array and then assigning it,this takes time though for the first implementation
    // comment: req.body.comment,
    // vidUrl: req.body.vidUrl,
    // bgSong: req.body.bgSong,
    // channel: req.body.channel,
    // likes: req.body.likes,
    // description: req.body.description,
    // shares: req.body.shares,
  });

  //const newVideo = req.body;
  newVideo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  // return res
  //   .status(200)
  //   .json({ success: "youve successfully pushed", data: `${newVideo}` });
});

module.exports = route;
