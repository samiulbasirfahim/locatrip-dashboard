"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { H1, P } from "shadcn-typography";

const ForgetPasswordPage = () => {
    const [value, setValue] = useState<string>("");

    const router = useRouter();

    function handleSubmit() {
        router.push("/reset-password");
    }

    return (
        <div className="flex-1 flex justify-center flex-col items-center">
            <div className="max-w-xl w-full space-y-8">
                <div className="flex flex-col items-center font-roboto pb-8 w-full gap-4">
                    <H1 className="to-black from-primary bg-linear-to-r bg-clip-text text-transparent mb-0">
                        Verify Your Identity
                    </H1>
                    <P className="text-muted-foreground text-center !mt-0 text-xl">
                        We’ve sent a one-time password (OTP) to your email. Enter the code
                        below and get started!
                    </P>

                    <InputOTP
                        maxLength={4}
                        value={value}
                        onChange={(value) => {
                            setValue(value);
                            if (value.length === 4) handleSubmit();
                        }}
                    >
                        <InputOTPGroup className="flex gap-4">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
