import Book from "../models/book.js";

class BookController {
    static async listBooks(req, res) {
        const listBooks = await Book.find({});
        res.status(200).json(listBooks);
    }
};

export default BookController;