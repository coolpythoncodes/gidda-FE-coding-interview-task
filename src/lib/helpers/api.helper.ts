/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type GetSummaryResponse } from '@/types/api.routes.types';
import axios from 'axios';
import GiddaaApi from '../api/api.routes';

export class ApiError extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const getSummary = async (): Promise<GetSummaryResponse> => {
    try {
        const res = await GiddaaApi.getSummary();
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new ApiError(error.response!.status, error.response?.data);
        } else {
            throw error;
        }
    }
};
