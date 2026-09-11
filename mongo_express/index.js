const express = require("express");
const app = express();
const methodOverride = require("method-override");

let port = 3000;                  // use browser and type localhost:8080/
app.listen(port, () => {
    console.log(`Server is Listening to port ${port}`);
});
app.get("/", (req, res) => {
    res.send("Server is working well...");
});

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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

const Chat = require("./models/chats.js");

const chat1 = new Chat({
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
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working");
    res.render("index.ejs", {chats});
});

//new route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//create route
app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
    });
    newChat.save().then((data) =>{
        console.log("chat was saved");
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async(req, res) => {
    let {id} = req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

app.put("/chats/:id", async(req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let newChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true} );
    console.log(newChat);
    res.redirect("/chats");
});

app.delete("/chats/:id", async(req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});