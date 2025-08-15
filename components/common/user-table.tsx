"use client";
import { UserMiniType } from "@/types/user";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { H4 } from "../ui/typography";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export function UserTable({ users }: { users: UserMiniType[] }) {
    return (
        <div className="shadow-lg shadow-black/20 rounded-lg overflow-hidden py-4">
            <Table className="rounded-xl">
                <TableHeader>
                    <TableRow className="bg-muted-background h-12 hover:bg-muted-background text-base">
                        <TableHead className="text-muted-foreground w-1/2">
                            User Name
                        </TableHead>
                        <TableHead className="text-muted-foreground">Status</TableHead>
                        <TableHead className="text-end text-muted-foreground">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow
                            key={i}
                            className="hover:bg-gray-200/40 cursor-pointer"
                        >
                            <TableCell className="flex items-center gap-2">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={user.avatar} />
                                </Avatar>
                                <p className="">{user.username}</p>
                            </TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell className="relative">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-muted-background/40 rounded-2xl">
                                        <MoreVertical className="w-6" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <span className="flex items-center gap-2 cursor-pointer">Deactive</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
