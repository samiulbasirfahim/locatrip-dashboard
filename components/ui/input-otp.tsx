"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function InputOTP({
    className,
    containerClassName,
    ...props
}: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}) {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <OTPInput
            ref={inputRef}
            data-slot="input-otp"
            containerClassName={cn(
                "flex items-center gap-2 has-disabled:opacity-50",
                containerClassName,
            )}
            className={cn("disabled:cursor-not-allowed", className)}
            {...props}
        />
    );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="input-otp-group"
            className={cn("flex items-center", className)}
            {...props}
        />
    );
}

function InputOTPSlot({
    index,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    index: number;
}) {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

    return (
        <div
            data-slot="input-otp-slot"
            data-active={isActive}
            className={cn(
                "w-14 h-14 rounded-lg bg-white data-[active=true]:shadow-lg data-[active=true]:shadow-gray-200/60 data-[active=true]:bg-primary data-[active=true]:z-10 transition-all text-2xl flex items-center justify-center relative",
                className,
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="animate-caret-blink h-6 w-0.5 duration-1000 bg-white" />
                </div>
            )}
        </div>
    );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
    return (
        <div data-slot="input-otp-separator" role="separator" {...props}>
            <MinusIcon />
        </div>
    );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
