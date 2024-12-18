import { User } from "../../db/mongoose/index.js";
import { UserRepository } from "../user.repository.js";

export class UserMongooseRepository extends UserRepository {
    static async getAllUsers() {  
        return await User.find();
    }

    static async getUserById(id) {  
        return await User.findById(id);
    }

    static async createUser(user) {  
        return await User.create(user);
    }

    static async getUserByEmail(email) {  
        return await User.findOne({ email });
    }

    static async updateUser(id, user) {  
        return await User.findByIdAndUpdate(id, user, { new: true });
    }
    
}