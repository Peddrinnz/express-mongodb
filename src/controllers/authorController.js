import { Author } from "../models/author.js";

class AuthorController {
    static async listAuthors(req, res) {
        try {
            const listAuthors = await Author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async listAuthorForId(req, res) {
        try {
            const id = req.params.id;
            const findAuthor = await Author.findById(id);
            res.status(200).json(findAuthor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async createAuthor(req, res) {
        try {
            const newAuthor = await Author.create(req.body);
            res.status(201).json({message: "Author created",newAuthor});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await Author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Author updated"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await Author.findByIdAndDelete(id);
            res.status(200).json({message: "Author deleted"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

export default AuthorController;