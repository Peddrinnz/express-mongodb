import Book from "../models/book.js";

class BookController {
    static async listBooks(req, res) {
        try {
            const listBooks = await Book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async listBookForId(req, res) {
        try {
            const id = req.params.id;
            const findBook = await Book.findById(id);
            res.status(200).json(findBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async createBook(req, res) {
        try {
            const newBook = await Book.create(req.body);
            res.status(201).json({message: "Book created",newBook});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await Book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book updated"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await Book.findByIdAndDelete(id);
            res.status(200).json({message: "Book deleted"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

export default BookController;