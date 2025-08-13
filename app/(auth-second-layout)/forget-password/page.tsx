"use client";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { H1, P } from "shadcn-typography";

import { useRouter } from "next/navigation";

const ForgetPasswordPage = () => {
    const router = useRouter();
    return (
        <div className="flex-1 flex justify-center flex-col items-center">
            <form
                className="max-w-xl w-full space-y-8"
                onSubmit={(e) => {
                    e.preventDefault();
                    router.push("/verify-otp");
                }}
            >
                <div className="flex flex-col items-center font-roboto pb-8 w-full gap-4">
                    <H1 className="to-black from-primary bg-linear-to-r bg-clip-text text-transparent mb-0">
                        Veify Your Identity
                    </H1>
                    <P className="text-muted-foreground text-center !mt-0 text-xl">
                        No worries! Just enter your email address below, and we’ll send you
                        a link to reset your password.
                    </P>
                </div>

                <Input
                    name="email"
                    label="Email Address"
                    id="email"
                    type="email"
                    className="bg-background"
                    placeholder="Your email address"
                />

                <Link href={"/verify-otp"}>
                    <Button
                        size="lg"
                        className="w-full h-12 text-xl font-bold font-roboto cursor-pointer rounded-2xl"
                    >
                        Log In
                    </Button>
                </Link>
            </form>
        </div>
    );
};

export default ForgetPasswordPage;
