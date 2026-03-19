export const getRentals = async () => {
    try {
        const response = await fetch('/db.json');
        if (!response.ok) throw new Error('Erro ao buscar db.json');
        const data = await response.json();
        
        return data.imoveis.map(rental => {
            const r = { ...rental, _id: rental.id };
            r.images = (r.imgSrc || []).map(fileName => fileName.startsWith('/') ? fileName : `/${fileName}`);
            return r;
        });
    } catch (error) {
        console.error("Erro ao buscar aluguéis locais:", error);
        return [];
    }
};

export const getOneRental = async (id) => {
    try {
        const response = await fetch('/db.json');
        if (!response.ok) throw new Error('Erro ao buscar db.json');
        const data = await response.json();
        
        const rental = data.imoveis.find(r => String(r.id) === String(id));
        if (!rental) return null;

        const r = { ...rental, _id: rental.id };
        r.images = (r.imgSrc || []).map(fileName => fileName.startsWith('/') ? fileName : `/${fileName}`);
        return r;
    } catch (error) {
        console.error(`Erro ao buscar aluguel ${id}:`, error);
        return null;
    }
};
