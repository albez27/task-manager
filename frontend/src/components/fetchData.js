// fetchData.js
import axios from 'axios';

export const fetchData = async (menuItem) => {
  try {
    const response = await axios.get(`https://api.example.com/${menuItem}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
