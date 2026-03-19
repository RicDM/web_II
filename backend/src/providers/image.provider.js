export class ImageLocalProvider {
    static getFileUrl(filesName, req) {
        if (!filesName) {
            throw new Error('Nome do arquivo não pode estar vazio.');
        }
        // Retorna o caminho root-relativo para buscar do frontend/public
        return filesName.map(fileName => fileName.startsWith('/') ? fileName : `/${fileName}`);
    }
};
