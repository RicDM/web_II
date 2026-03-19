import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: `${baseURL}/rental`,
    timeout: 5000
});

export const getRentals = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar aluguéis:", error);
        return [];
    }
};

export const getOneRental = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar aluguel ${id}:`, error);
        return null;
    }
};
