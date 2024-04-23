"use client"
import React from "react"
import { Provider } from "react-redux"
import store from "@/redux/atore"

interface Provider {
    children: React.ReactNode
}


const ReduxProvider:React.FC<Provider> = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider