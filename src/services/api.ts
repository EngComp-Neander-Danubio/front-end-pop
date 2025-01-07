import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const popService = {
  async getPops() {
    const response = await axios.get(`${API_BASE_URL}/pops`);
    return response.data;
  },

  async getPopById(id: number) {
    const response = await axios.get(`${API_BASE_URL}/pops/${id}`);
    return response.data;
  },

  async createPop(data: any) {
    const response = await axios.post(`${API_BASE_URL}/pops`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Caso tenha upload de arquivos
      },
    });
    return response.data;
  },

  async updatePop(id: number, data: any) {
    const response = await axios.put(`${API_BASE_URL}/pops/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Caso tenha upload de arquivos
      },
    });
    return response.data;
  },

  async deletePop(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/pops/${id}`);
    return response.data;
  },
};
