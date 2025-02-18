import axios from 'axios';

const baseURL = 'http://localhost:3000';

// Função de login
export const login = async ({ email, password }) => {
    try {
        const { data } = await axios.post(`${baseURL}/login`, { email, password });
        return data; // Retorna o token caso o login seja bem-sucedido
    } catch (error) {
        console.error("Erro no login:", error);
        return { token: null }; // Retorna null em caso de erro
    }
};

// Hook para gerenciar requisições do usuário
export const useUser = (token) => {
    const userReq = axios.create({
        baseURL: `${baseURL}/user`,
        timeout: 5000, // Aumentado o tempo limite
        headers: { 'Authorization': token }
    });

    const userRentalReq = axios.create({
        baseURL: `${baseURL}/rental`,
        timeout: 5000, // Aumentado o tempo limite
        headers: { 'Authorization': token }
    });

    // Métodos da API
    return {
        getRentals: async () => {
            try {
                const response = await userRentalReq.get('/');
                return response.data;
            } catch (error) {
                console.error("Erro ao buscar aluguéis:", error);
                return null;
            }
        },

        getOneRental: async (id) => {
            try {
                const response = await userRentalReq.get(`/${id}`);
                return response.data;
            } catch (error) {
                console.error(`Erro ao buscar aluguel ${id}:`, error);
                return null;
            }
        },

        createRental: async (data) => {
            try {
                const response = await userRentalReq.post('/', data);
                return response.data;
            } catch (error) {
                console.error("Erro ao criar aluguel:", error);
                return null;
            }
        }
    };
};

