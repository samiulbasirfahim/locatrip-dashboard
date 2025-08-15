import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getDateObj } from "@/lib/date";
import { H2, P } from "../ui/typography";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { ProfileModal } from "./profile-modal";
import { useState } from "react";

export function DashboardHeader() {
    const [showOpen, setShowOpen] = useState(false);
    const dateObj = getDateObj();

    return (
        <header className="px-4 py-2 sticky top-0 bg-background z-[50] class flex justify-between border-b-1 border-primary w-full">
            <div className="flex items-baseline gap-2 font-sans">
                <H2>{dateObj.dayName}</H2>
                <P className="text-muted-foreground">
                    {dateObj.date} {dateObj.month}, {dateObj.year}
                </P>
            </div>
            <div className="flex items-center gap-4">
                <Link
                    className="h-10 w-10 p-2 bg-muted-background rounded-full"
                    href={"/notifications"}
                >
                    <Bell className="w-full h-full text-primary" strokeWidth={2} />
                </Link>
                <div className="flex items-center gap-2 justify-between">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer flex gap-2 items-center">
                            <Link href={"/profile"}>
                                <Avatar className="rounded-full h-10 w-10">
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                        className=""
                                    />
                                    <AvatarFallback>user avatar</AvatarFallback>
                                </Avatar>
                            </Link>

                            <ChevronDown className="w-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <span
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => {
                                        setTimeout(() => {
                                            setShowOpen(true);
                                        }, 120);
                                    }}
                                >
                                    <User />
                                    Profile
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/logout"}>
                                    <span className="flex items-center gap-2">
                                        <LogOut className="text-primary" />
                                        Log Out
                                    </span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <ProfileModal
                showModal={showOpen}
                onClose={() => {
                    setShowOpen(false);
                    console.log("CLOSSING");
                }}
            />
        </header>
    );
}
