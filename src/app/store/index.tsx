/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import { useGetPersistedStore, useSetPersistStore } from "@/lib/helpers/store.helper"
import { createContext, useContext, useState } from "react"

const StoreContext = createContext(null)

type StoreContextProviderProps = {
    children: React.ReactNode
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {

    const [store, setStore] = useState(useGetPersistedStore())
    useSetPersistStore(store)
    return (
        <StoreContext.Provider value={{ store, setStore, ...store }}>
            {children}
        </StoreContext.Provider>

    )
}

const useStoreContext = () => useContext(StoreContext)!

export { StoreContextProvider, useStoreContext }
