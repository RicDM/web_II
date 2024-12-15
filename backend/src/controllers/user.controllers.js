import { Rental, User } from "../models/index.js";
import { EncriptyPasswordProvider } from "../providers/encryptPassword.provaider.js";


export class UserController {
    static async readAll (req, res) {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    static async getRental (req, res) {
        try {
            const { id } = req.user
            const events = await Rental.find({ "users._id": id })
            res.status(200).json(events)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    static async updated (req, res) {
        try {
            const { id } = req.user
            const  { nome, curso, instituicao, grupo } = req.body
            const updateUser = await User.findByIdAndUpdate(
                {_id: id}, 
                {nome, curso, instituicao, grupo},
                { new: true }
            )
            res.status(201).json({message: "book Success updated successfully", User: updateUser})
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
        
    }

    static async read (req, res) {
        try { 
            const { id } = req.params
            if (!id && !req.user) return res.status(400).json({message: 'Invalid data.'})
            const user = id ? await User.findById(id) : req.user 
            console.log(user)
            res.status(200).json(user)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }
    static async create (req, res) {
        try {
            const { nome, email, password: normalPassword } = req.body
            const password = await EncriptyPasswordProvider.hashPassword(password)
            const user = await User.create({ nome, email, password, grupo: "usuario"  })
            console.log(user)
            res.status(201).json({message: "Success", user})
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }

    }
    static async destroy (req, res) {
        try {
            const { id } = req.user
            if (!id) return res.status(400).json({message: 'Invalid data.'})
            
            await User.findByIdAndDelete(id)
            await Rental.updateMany(
                {"users._id": id }, 
                { $pull: { users: { _id: [id] }}}
            )
            return res.status(204).json({message: 'book deleted successfully'})
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
        
    }

}