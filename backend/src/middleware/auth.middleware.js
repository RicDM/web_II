import { User } from "../models/user.js";
import { TokenProvider } from "../providers/token.provider.js";


export class AuthMiddleware {
  static async auth (req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Token não fornecido' });
    try {
      const { id:userId } = TokenProvider.verifyToken(token);
      const user = await User.findById(userId);
      req.user = user
      next();
    } catch (err) {
      res.status(401).json({ error: 'Token inválido ou expirado' });
    }
  }

  static async permission(req, res, next, group) {
    const { grupo } = req.user
    if (!grupo) return res.status(403).json({ error: 'Token não fornecido' });
    grupo == group 
    ? next() 
    : res.status(401).json({ error: 'Rota não autorizada' });
  }
}