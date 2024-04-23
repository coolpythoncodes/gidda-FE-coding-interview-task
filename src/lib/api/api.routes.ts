import { type GetSummaryResponse } from '@/types/api.routes.types';
import { type AxiosResponse } from 'axios';
import ApiInstance from '.';

interface IGiddaaApi {
    getSummary: () => Promise<AxiosResponse<GetSummaryResponse>>;
}

const GiddaaApi = {} as IGiddaaApi;

GiddaaApi.getSummary = async () =>
    await ApiInstance.GiddaaApiInstance.get('/developer/transaction/get-summary');

export default GiddaaApi;
