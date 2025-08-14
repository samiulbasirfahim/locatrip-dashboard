import Apple from "@/public/apple.png";
import Google from "@/public/google.png";

import Input from "@/components/common/input";
import PasswordInput from "@/components/common/input-password";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { H1, P } from "@/components/ui/typography";
import Image from "next/image";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="space-y-4 max-w-lg w-full flex flex-col items-center">
                <div className="flex flex-col items-center font-sans pb-8">
                    <H1 className="to-black from-primary bg-linear-to-r bg-clip-text text-transparent mb-0">
                        Create an account
                    </H1>
                    <P className="text-muted-foreground text-center !mt-0 text-xl">
                        Please register to start browsing
                    </P>
                </div>
                <form className="w-full text-muted-foreground  space-y-4">
                    <Input
                        label="Full Name"
                        id="name"
                        type="text"
                        placeholder="Enter full name"
                    />

                    <Input
                        label="Email Address"
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="********"
                        type="password"
                        id="password"
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="********"
                        type="password"
                        id="confrim-password"
                    />

                    <Button
                        size="lg"
                        className="w-full h-12 text-xl font-bold font-sans cursor-pointer rounded-2xl"
                    >
                        Log In
                    </Button>
                </form>
                <div className="w-full">
                    <div className="text-divider">Or Login With</div>
                </div>
                <div className="flex justify-center gap-8">
                    <Button variant={"outline"} className="w-16 h-16">
                        <Image src={Google} alt="Google" />
                    </Button>

                    <Button variant={"outline"} className="w-16 h-16">
                        <Image src={Apple} alt="Google" />
                    </Button>
                </div>

                <Link href={"/login"} className="mt-4">
                    Already have an account? <span className="text-primary">Login</span>
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
