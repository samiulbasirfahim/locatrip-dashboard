import { Delete, Edit, MoreVertical, Trash2, Users } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { UserMiniType } from "@/types/user";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Switch } from "../ui/switch";
import { useState } from "react";
import PreferenceModal from "./preference-modal";
import { Preference } from "@/app/(dashboard)/management/preference/page";
import { ConfirmationDialog } from "./confirmation-dialog";

type Props = {
    preferences: Preference[];
    toggleCheck: (id: string) => void;
    onShowModal: (id: string) => void;
};

export default function PreferenceTable({
    preferences,
    toggleCheck,
    onShowModal,
}: Props) {
    return (
        <div className=" overflow-hidden">
            <Table className="rounded-xl">
                <TableHeader className="text-muted-foreground bg-muted-background !rounded-4xl">
                    <TableRow>
                        <TableHead className="text-muted-foreground">Preference</TableHead>
                        <TableHead className="text-muted-foreground">Category</TableHead>
                        <TableHead className="text-muted-foreground">Usage</TableHead>
                        <TableHead className="text-muted-foreground">Status</TableHead>
                        <TableHead className="text-end text-muted-foreground">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {preferences.map((pref) => (
                        <TableRow
                            key={pref.id}
                            className="hover:bg-muted-background cursor-pointer"
                        >
                            <TableCell className="text-lg">{pref.title}</TableCell>
                            <TableCell className="text-lg">{pref.category}</TableCell>
                            <TableCell className="flex items-center gap-4 text-lg">
                                <Users strokeWidth={1.5} />
                                <span>{pref.usage}</span>
                            </TableCell>
                            <TableCell className="">
                                <div className="flex items-center gap-4">
                                    <Switch
                                        className=" cursor-pointer"
                                        checked={pref.status}
                                        onCheckedChange={() => toggleCheck(pref.id)}
                                    />
                                    <span>Active</span>
                                </div>
                            </TableCell>
                            <TableCell className="relative">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-muted-background/40 rounded-2xl">
                                        <MoreVertical className="w-6" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                setTimeout(() => onShowModal(pref.id), 120)
                                            }
                                        >
                                            <span className="flex items-center gap-2 cursor-pointer">
                                                <Edit />
                                                Edit
                                            </span>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem onClick={() => { }}>
                                            <span className="flex items-center gap-2 cursor-pointer">
                                                <Trash2 className="text-red-500" />
                                                Delete
                                            </span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination className="flex justify-end items-center border-t p-4">
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
