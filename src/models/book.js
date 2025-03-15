import mongoose, { version } from "mongoose";

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
    versionKey: false
});

const Book = mongoose.model("Book", bookSchema);

export default Book;