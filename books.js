const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // we can change the database test to college or whichever we need it...

main().then((res)=> {console.log("Connection Successful") 
})
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    book: {
        type:String,
        require: true,
    },
    author: {
       type: String,
    },
    price: {
      type:Number,
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics Xii",
    author: "RD Sharma",
    price: 1099,
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});