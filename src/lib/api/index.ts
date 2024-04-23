import { env } from '@/env';
import axios, { type AxiosInstance } from 'axios';

interface IApiInstance {
    GiddaaApiInstance: AxiosInstance;
}

const ApiInstance = {} as IApiInstance;

export const GiddaBaseApiUrl = env.NEXT_PUBLIC_BASE_API_URL;

ApiInstance.GiddaaApiInstance = axios.create({
    baseURL: GiddaBaseApiUrl,
});

// ApiInstance.GiddaaApiInstance.interceptors.request.use(
//     async (request) => {
//         const session = await getSession();
//         console.log('session', session);
//         if (session) {
//             request.headers.Authorization = `Bearer ${session.accessToken}`;
//         }
//         return request;
//     }
// )

export default ApiInstance;


