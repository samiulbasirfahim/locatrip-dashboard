"use client";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { UserTable } from "@/components/common/user-table";
import { UserMiniType } from "@/types/user";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const users: UserMiniType[] = [
    {
        id: "1a2b3c4d",
        username: "alice_wonderland",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: "2b3c4d5e",
        username: "bob_the_builder",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: "3c4d5e6f",
        username: "charlie_adventurer",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: "4d5e6f7g",
        username: "david_mountain_climber",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: "5e6f7g8h",
        username: "eve_cyber_guardian",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: "6f7g8h9i",
        username: "frank_the_tank",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: "7g8h9i0j",
        username: "grace_harmony_smith",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: "8h9i0j1k",
        username: "heidi_the_strategist",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
        id: "9i0j1k2l",
        username: "ivan_master_coder",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: "0j1k2l3m",
        username: "judy_the_juggler",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=10",
    },

    {
        id: "1a2b3c4d",
        username: "alice_wonderland",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: "2b3c4d5e",
        username: "bob_the_builder",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: "3c4d5e6f",
        username: "charlie_adventurer",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: "4d5e6f7g",
        username: "david_mountain_climber",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: "5e6f7g8h",
        username: "eve_cyber_guardian",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: "6f7g8h9i",
        username: "frank_the_tank",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: "7g8h9i0j",
        username: "grace_harmony_smith",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: "8h9i0j1k",
        username: "heidi_the_strategist",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
        id: "9i0j1k2l",
        username: "ivan_master_coder",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: "0j1k2l3m",
        username: "judy_the_juggler",
        status: "offline",
        avatar: "https://i.pravatar.cc/150?img=10",
    },
];

export default function AllUsersPage() {
    return (
        <div className="space-y-8">
            <div className="flex gap-6 h-12">
                <div className="relative w-full h-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search ..."
                        className="pl-10 bg-muted-background h-full"
                    />
                </div>
                <Select defaultValue="all" onValueChange={(select_input) => { }}>
                    <SelectTrigger className="w-32 !h-full">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="deactive">Deactive</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <UserTable users={users} />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
