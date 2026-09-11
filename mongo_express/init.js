const mongoose = require("mongoose");
const Chat = require("./models/chats.js"); 

main().then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//require the schema of collecion whatsapp
const allChat = [
   {from: "Zishan",
    to: "Umang",
    msg: "ThankYou Very much",
    createdAt: new Date(),
   },

   {from: "Zishan",
    to: "Saba",
    msg: "Glad to have you in my journey",
    createdAt: new Date(),
   },

   {from: "Saba",
    to: "Zishan",
    msg: "Happy to see you here, he's cute....",
    createdAt: new Date(),
   },

   {from: "Zishan",
    to: "Uday",
    msg: "Kab ayga Bhopal",
    createdAt: new Date(),
   },
];

// Chat.insertMany(allChat).then((data) => {
//     console.log(data);
// });