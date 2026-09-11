const express = require("express");
const app = express();

let port = 8080;                  // use browser and type localhost:8080/
app.listen(port, () => {
    console.log(`Server is Listening to port ${port}`);
});
app.get("/", (req, res) => {
    res.send("Server is working well...");
});

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mongoose = require("mongoose");
main().then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// till now we have imported express, connected mongodb and joined path in the folder.

const chat = require("./models/chats.js");

const chat1 = new chat({
    from: "Zishan",
    to: "Sazib",
    msg: "Hii, ape thik hai",
    createdAt: new Date(),
});


// chat1.save().then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// });

// chat.deleteMany({from: "Zishan"}).then((data) => {
//     console.log(data);
// });

app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    res.send("working");
    res.render("index.ejs", {chats});
});