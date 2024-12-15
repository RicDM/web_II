import jwt from 'jsonwebtoken';
import { secrets } from '../config/secrets.js';

export class TokenProvider {
    static generateToken(payload) {
        return jwt.sign(payload, secrets.token_secret, { expiresIn: secrets.token_timeout });
    }

    static verifyToken(token) {
        const decoded = jwt.verify(token, secrets.token_secret);
        return decoded;
    }
}