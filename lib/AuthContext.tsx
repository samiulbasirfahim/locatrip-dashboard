"use client";
import { ReactNode, useState, createContext, useContext } from "react";

import React from "react";
type User = {
    id: string;
};
type AuthContextType = {
    user: null | User;
    setUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>({ id: "" });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth has to be used within <AuthContext.Provider>");
    return context;
};
