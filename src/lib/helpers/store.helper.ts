"use client"

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react';

const initialState = {
    access_token: null,
    isLoggedIn: false,
};

const useSetPersistStore = (store: {}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('persist-giddaa', JSON.stringify(store));
        }
        //eslint-disable-next-line
    }, [store]);
};

const useGetPersistedStore = () =>
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem('persist-giddaa')!) || initialState : initialState;

export { initialState, useGetPersistedStore, useSetPersistStore };

