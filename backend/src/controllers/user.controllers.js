import { Rental, User } from "../models/index.js";
import { EncriptyPasswordProvider } from "../providers/encryptPassword.provaider.js";


//crud
export class UserController {
    static async readAll (req, res) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    static async getRental (req, res) {
        try {
            const id = req.params.id ? req.params.id : req.user._id
             
            const events = await Rental.find({
                owner: id
            })
            res.status(200).json(events)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    static async updated (req, res) {
        try {
            const id = req.params.id ? req.params.id : req.user._id
            const  { nome, email, grupo: novoGrupo, password: newPassword } = req.body
            const grupo = req.user.grupo == "admin" 
                        ? novoGrupo
                        : null
            const password = req.user.grupo == "admin" 
                        ? await EncriptyPasswordProvider.hashPassword(newPassword)
                        : null
            const updateUser = await User.findByIdAndUpdate(
                {_id: id}, 
                { nome, email, grupo, password },
                { new: true }
            )
            res.status(201).json({message: "book Success updated successfully", user: updateUser})
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
        
    }

    static async updatedPassword (req, res) {
        try {
            const id = req.params.id ? req.params.id : req.user._id
            const  { password, newPassword } = req.body
            const user = req.params.id ? await User.findById(id) : req.user
            const isPasswordValid = await EncriptyPasswordProvider.comparePassword(password, user.password);
            if (!isPasswordValid) return res.status(401).json({ error: 'senha incorreta' });

            const updateUser = await User.findByIdAndUpdate(
                {_id: id}, 
                { password: newPassword },
                { new: true }
            )
            res.status(201).json({message: "book Success updated successfully", user: updateUser})
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
            //console.log(user)
            res.status(200).json(user)
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }

    static async create (req, res) {
        try {
            const { nome, email, password: normalPassword } = req.body
            const password = await EncriptyPasswordProvider.hashPassword(normalPassword)
            const user = await User.create({ nome, email, password, grupo: "usuario"})
            res.status(201).json({message: "Success", user})
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'Internal server error'})
        }
    }
    static async destroy (req, res) {
        try {
            const id = req.params.id ? req.params.id : req.user._id
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