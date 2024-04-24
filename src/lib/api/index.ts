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
//         const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImQ2MDhjMWZmLWMzMTktNDgwMC04MTNlLWFmZmFlMTRmMDkyNiIsIk5hbWUiOiJMb3JkIFZvbGRlbW9ydCIsIlJvbGVJZCI6IkRFVkVMT1BFUl9BRE1JTl9ST0xFIiwiRW1haWwiOiJpbmZvQHRoZXZpZXcuY29tIiwiZXhwIjoxNzE0NTAzNzg0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcxOTAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxOTAifQ.YXR6FwDrMlebnNutOjaWlfNTB0FQCdHk1Tv8tbumTWE"

//         request.headers.Authorization = `Bearer ${token}`;

//         return request;
//     }
// )

export default ApiInstance;


