import AuthImage from "@/public/auth-image.png";
import Image from "next/image";
import { ReactNode } from "react";

type PropsType = {
    children: ReactNode;
};

export default function AuthLayout({ children }: PropsType) {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="relative w-full">
                <div className="fixed top-0 left-0 w-1/2 h-screen flex items-center justify-center bg-muted-background">
                    <Image src={AuthImage} alt="Auth Image" className="h-5/6 w-auto" />
                </div>
            </div>
            {children}
        </div>
    );
}
