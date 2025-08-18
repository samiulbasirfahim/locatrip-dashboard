"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { H2, H3, H4 } from "@/components/ui/typography";
import { Edit, MoreVertical, Plus, Trash2 } from "lucide-react";
import EventModal from "@/components/common/event-modal";

export type EventType = {
    id: string;
    title: string;
    numberOfEvents: number;
};

export default function Events() {
    const [events, setEvents] = useState<EventType[]>([
        { id: "1", title: "Hiking", numberOfEvents: 10 },
        { id: "2", title: "Swimming", numberOfEvents: 10 },
        { id: "3", title: "Riding", numberOfEvents: 10 },
        { id: "4", title: "Adventure", numberOfEvents: 10 },
        { id: "5", title: "Hiking", numberOfEvents: 10 },
        { id: "6", title: "Hiking", numberOfEvents: 10 },
        { id: "7", title: "Hiking", numberOfEvents: 10 },
        { id: "8", title: "HikingHikingHikingHiking", numberOfEvents: 10 },
    ]);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedEv, setSelectedEv] = useState<EventType | null>(null);

    return (
        <div className="space-y-8">
            <Card>
                <CardContent>
                    <H4 className="text-muted-foreground">Total Event</H4>
                    <H2>100</H2>
                    <small className="text-muted-foreground text-sm">
                        Overall events across all categories
                    </small>
                </CardContent>
            </Card>

            <div className="flex justify-between">
                <H3>Event Categories</H3>
                <Button
                    className="flex items-center gap-2"
                    onClick={() => {
                        setShowModal(true);
                        setSelectedEv(null);
                    }}
                >
                    <Plus color="white" strokeWidth={3} />
                    Add Categories
                </Button>
            </div>

            <Table className="overflow-hidden">
                <TableHeader className="text-muted-foreground bg-muted-background !rounded-4xl">
                    <TableRow>
                        <TableHead className="text-muted-foreground">
                            Category Name
                        </TableHead>
                        <TableHead className="text-muted-foreground ">
                            Number of Events
                        </TableHead>
                        <TableHead className="text-muted-foreground w-full text-end">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events.map((event) => (
                        <TableRow className="" key={event.id}>
                            <TableCell className="text-lg">{event.title}</TableCell>
                            <TableCell className="text-lg">{event.numberOfEvents}</TableCell>
                            <TableCell className="relative">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-muted-background/40 rounded-2xl">
                                        <MoreVertical className="w-6" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                setTimeout(() => {
                                                    setShowModal(true);
                                                    setSelectedEv(
                                                        events.find((pref) => pref.id === event.id) ?? null,
                                                    );
                                                }, 120)
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

            <EventModal
                isOpen={showModal}
                selectedPref={selectedEv}
                onClose={() => {
                    setShowModal(false);
                    setSelectedEv(null);
                }}
                onCreatePref={() => { }}
                onUpdatePref={() => { }}
            />
        </div>
    );
}
