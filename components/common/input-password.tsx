"use client";

import { ComponentProps, useState } from "react";
import { Input as InputShadcn } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type Props = {
    label: string;
    id: string;
} & ComponentProps<"input">;

const PasswordInput = ({ label, id, ...props }: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="grid w-full items-center gap-1">
            <Label htmlFor={id}>
                {label}
            </Label>
            <div className="relative h-12">
                <InputShadcn
                    {...props}
                    id={id}
                    name={id}
                    type={showPassword ? "text" : "password"}
                    className={cn([
                        "bg-muted-background absolute top-0 left-0 h-full placeholder:text-muted-foreground/60",
                        props.className,
                    ])}
                />
                <span
                    className="z-[9999] text-primary absolute top-1/2 -translate-y-1/2 right-4"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </span>
            </div>
        </div>
    );
};

export default PasswordInput;
