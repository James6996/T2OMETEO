import { getRequest } from './api';

export const getAllCities = async () => getRequest('/api/cities');