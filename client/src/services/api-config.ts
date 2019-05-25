const API_HOST = process.env.REACT_APP_API_HOST || 'https://machinestream.herokuapp.com';
const API_NS = process.env.REACT_APP_API_NS || "api";

export const apiUrl = `${API_HOST}/${API_NS}`;