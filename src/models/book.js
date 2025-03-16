import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    pages: {
        type: Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    versionKey: false
});

const Book = mongoose.model("Book", bookSchema);

export default Book;