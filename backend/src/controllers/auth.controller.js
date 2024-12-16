import { User } from "../models/index.js";
import { EncriptyPasswordProvider } from "../providers/encryptPassword.provaider.js";
import { TokenProvider } from "../providers/token.provider.js";

export class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            // Verifica se o usuário existe no banco (mock)
            if (!user) return res.status(401).json({ error: 'Usuário ou senha inválidos' });
            
            // Verifica a senha
            const isPasswordValid = await EncriptyPasswordProvider.comparePassword(password, user.password);
            if (!isPasswordValid) return res.status(401).json({ error: 'Usuário ou senha inválidos' });

            // Gera um token JWT
            const token = TokenProvider.generateToken({ id: user._id });

            res.json({ token });
        } catch (err) {
            res.status(500).json({ error: 'Usuário ou senha inválidos' });
        }
        
    }
}