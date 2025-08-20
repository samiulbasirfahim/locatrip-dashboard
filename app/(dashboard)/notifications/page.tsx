"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { P, Small } from "@/components/ui/typography";
import { useState } from "react";

export default function Notifications() {
    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Button className="text-primary" variant={"ghost"}>
                    Mark all as read
                </Button>
            </div>

            <div className="bg-muted-background w-full rounded-lg flex p-4 gap-4 cursor-pointer shadow-sm shadow-black/10">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/evilrabbit.png" alt="Sumon" />
                    <AvatarFallback className="text-xl">P</AvatarFallback>
                </Avatar>
                <div>
                    <P className="!my-0">
                        <span className="font-semibold">John Doe</span> invited you to the
                        event Morning <span className="font-semibold">Yoga Session</span>
                    </P>
                    <Small className="text-muted-foreground">2h Ago</Small>
                </div>
            </div>
            <div className="w-full rounded-lg flex p-4 gap-4 cursor-pointer shadow-sm shadow-black/10">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/evilrabbit.png" alt="Sumon" />
                    <AvatarFallback className="text-xl">P</AvatarFallback>
                </Avatar>
                <div>
                    <P className="!my-0">
                        <span className="font-semibold">John Doe</span> invited you to the
                        event Morning <span className="font-semibold">Yoga Session</span>
                    </P>
                    <Small className="text-muted-foreground">2h Ago</Small>
                </div>
            </div>
        </div>
    );
}
