const mongoose = require("mongoose");

// Schema design of collection (table)
const chatSchema = new mongoose.Schema({
   from:{
    type: String,
    require: true,
   },

   to:{
    type: String,
    require: true,
   },

   msg:{
    type: String,
    maxLength:50,
   },

   createdAt:{
      type: Date,
   },
});

//Note: model (cptl-first, singular) we created is chat and by default it wil be stored as chats (small & plural)
//model initialised down here
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;