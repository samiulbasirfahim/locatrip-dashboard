"use client";
import { ReactNode, useState } from "react";

import React from "react";
import { createContext } from "vm";
type User = {};
type AuthContextType = {
    User: null | User;
    setUser: (user: User) => void;
};

const AuhtContext = createContext(undefined)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);


}
