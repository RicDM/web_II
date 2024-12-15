import { Rental, User } from "../models";
import { EncriptyPasswordProvider } from "../providers/encryptPassword.provaider.js";
import { TokenProvider } from "../providers/token.provider.js";

class AuthController {
    static async login(req, res) {
        const { login, password } = req.body;

        const user = await User.find({ login  });
        // Verifica se o usuário existe no banco (mock)
        if (!user) return res.status(401).json({ error: 'Usuário ou senha inválidos' });
        
        // Verifica a senha
        const isPasswordValid = await EncriptyPasswordProvider.comparePassword(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Usuário ou senha inválidos' });

        // Gera um token JWT
        const token = TokenProvider.generateToken({ id: user._id });

        res.json({ token });
    }
}