import { TokenProvider } from "../providers/token.provider.js";


export class AuthMiddleware {
    static async auth (req, res, next) {
        const token = req.headers['authorization'];
        if (!token) return res.status(403).json({ error: 'Token não fornecido' });
        try {
          const decoded = TokenProvider.verifyToken (token);
          req.user = decoded;
          next();
        } catch (err) {
          res.status(401).json({ error: 'Token inválido ou expirado' });
        }
    }
}