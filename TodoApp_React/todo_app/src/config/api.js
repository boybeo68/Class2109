import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://61b02a623e2aba0017c49636.mockapi.io/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
