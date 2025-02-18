export class ImageLocalProvider {
    static getFileUrl(filesName, req) {
        if (!filesName) {
            throw new Error('Nome do arquivo não pode estar vazio.');
        }

        // Gera a URL completa usando as informações da requisição
        const serverUrl = `${req.protocol}://${req.get('host')}`;

        // Retorna o caminho completo da imagem
        return filesName.map(fileName => `${serverUrl}/images/${fileName}`)
    }
};
