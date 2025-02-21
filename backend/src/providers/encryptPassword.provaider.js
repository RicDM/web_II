import bcrypt from 'bcrypt';

export class EncriptyPasswordProvider {
    static async hashPassword(password) {
        const saltRounds = 10; // Número de saltos (padrão recomendado)
        return await bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
}