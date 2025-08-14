import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getDateObj } from "@/lib/date";
import { H2, H3, P } from "../ui/typography";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { ProfileModal } from "./profile-modal";
import { useState } from "react";
import { Button } from "../ui/button";

export function DashboardHeader() {
    const [showOpen, setShowOpen] = useState(false);
    const dateObj = getDateObj();

    return (
        <header className="p-4 class flex justify-between border-b-1 border-primary w-full">
            <div className="flex items-baseline gap-2 font-sans">
                <H2>{dateObj.dayName}</H2>
                <P>
                    {dateObj.date} {dateObj.month}, {dateObj.year}
                </P>
            </div>
            <div className="flex items-center gap-4">
                <Link
                    className="h-12 w-12 p-3 bg-muted-background rounded-full"
                    href={"/notifications"}
                >
                    <Bell className="w-full h-full text-primary" strokeWidth={2} />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center gap-2 justify-between cursor-pointer">
                            <Avatar className="rounded-full h-12 w-12">
                                <AvatarImage
                                    src="https://github.com/evilrabbit.png"
                                    alt="@evilrabbit"
                                    className=""
                                />
                                <AvatarFallback>user avatar</AvatarFallback>
                            </Avatar>
                            <ChevronDown />
                        </div>
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
                <ProfileModal
                    showModal={showOpen}
                    onClose={() => {
                        setShowOpen(false);
                        console.log("CLOSSING");
                    }}
                />
            </div>
        </header>
    );
}
