const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

// mongoose.connect(process.env.MONGO_URI, (err, res) => {
//   if (err) {
//     console.log(`something went wrong while connecting to Database`);
//   }
//   console.log(
//     `connected to ${path.basename(process.env.MONGO_URI)} Successfully`
//   );
// });

const video = mongoose.Schema({
  comment: {
    type: String,
  },
  vidUrl: {
    type: String,
    required: true,
  },
  bgSong: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  channel: String,
  likes: String,
  description: String,
  shares: String,
});

module.exports = mongoose.model("videoData", video);
