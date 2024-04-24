/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
    type GetDefaultsResponse,
    type GetExpectedResponse,
    type GetSuccessfullResponse,
    type GetSummaryResponse,
} from '@/types/api.routes.types';
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

export const getDefaults = async (): Promise<GetDefaultsResponse> => {
    try {
        const res = await GiddaaApi.getDefaults();
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new ApiError(error.response!.status, error.response?.data);
        } else {
            throw error;
        }
    }
};

export const getSuccessfull = async (): Promise<GetSuccessfullResponse> => {
    try {
        const res = await GiddaaApi.getSuccessful();
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new ApiError(error.response!.status, error.response?.data);
        } else {
            throw error;
        }
    }
};

export const getExpected = async (): Promise<GetExpectedResponse> => {
    try {
        const res = await GiddaaApi.getExpected();
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new ApiError(error.response!.status, error.response?.data);
        } else {
            throw error;
        }
    }
};
