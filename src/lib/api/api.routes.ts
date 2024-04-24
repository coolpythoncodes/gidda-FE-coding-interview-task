import {
    type GetDefaultsResponse,
    type GetExpectedResponse,
    type GetSuccessfullResponse,
    type GetSummaryResponse,
    type LoginFormData,
} from '@/types/api.routes.types';
import { type AxiosResponse } from 'axios';
import ApiInstance from '.';

interface IGiddaaApi {
    login: (data: LoginFormData) => Promise<AxiosResponse>;
    getSummary: () => Promise<AxiosResponse<GetSummaryResponse>>;
    getDefaults: () => Promise<AxiosResponse<GetDefaultsResponse>>;
    getSuccessful: () => Promise<AxiosResponse<GetSuccessfullResponse>>;
    getExpected: () => Promise<AxiosResponse<GetExpectedResponse>>;
}

const GiddaaApi = {} as IGiddaaApi;

GiddaaApi.login = async (data: LoginFormData) =>
    await ApiInstance.GiddaaApiInstance.post('/account/login', data);

GiddaaApi.getSummary = async () =>
    await ApiInstance.GiddaaApiInstance.get('/developer/transaction/get-summary');

GiddaaApi.getDefaults = async () =>
    await ApiInstance.GiddaaApiInstance.get(
        '/developer/transaction/get-missed-payments'
    );

GiddaaApi.getSuccessful = async () =>
    await ApiInstance.GiddaaApiInstance.get(
        '/developer/transaction/get-succesful-payments'
    );

GiddaaApi.getExpected = async () =>
    await ApiInstance.GiddaaApiInstance.get(
        '/developer/transaction/get-expected-payments'
    );

export default GiddaaApi;
