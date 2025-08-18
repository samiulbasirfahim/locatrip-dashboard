"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/typography";
import { Plus, Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import PreferenceTable from "@/components/common/preference-table";
import { useState } from "react";
import PreferenceModal from "@/components/common/preference-modal";

export type Preference = {
    id: string;
    title: string;
    category: string;
    usage: number;
    status: boolean;
    description?: string;
};

export default function Page() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedPref, setSelectedPref] = useState<Preference | null>(null);
    const [preferences, setPreferences] = useState<Preference[]>([
        {
            id: "1",
            title: "Hiking",
            category: "Adventure",
            usage: 1240,
            status: true,
            description:
                "Exploring trails and mountains on foot, perfect for nature lovers.",
        },
        {
            id: "2",
            title: "Swimming",
            category: "Water Sports",
            usage: 980,
            status: true,
            description:
                "Enjoying pools, lakes, or the ocean while staying active and refreshed.",
        },
        {
            id: "3",
            title: "City Tours",
            category: "Sightseeing",
            usage: 860,
            status: true,
            description:
                "Discovering landmarks, history, and culture in urban environments.",
        },
        {
            id: "4",
            title: "Camping",
            category: "Outdoor",
            usage: 420,
            status: false,
            description:
                "Staying overnight in nature with tents or cabins for a rustic experience.",
        },
        {
            id: "5",
            title: "Art & Culture",
            category: "Cultural",
            usage: 670,
            status: true,
            description:
                "Exploring museums, galleries, performances, and cultural traditions.",
        },
        {
            id: "6",
            title: "Food Tasting",
            category: "Culinary",
            usage: 530,
            status: true,
            description:
                "Sampling local and international cuisines for a flavorful adventure.",
        },
        {
            id: "7",
            title: "Scuba Diving",
            category: "Water Sports",
            usage: 310,
            status: false,
            description:
                "Exploring underwater worlds and marine life through diving experiences.",
        },
        {
            id: "8",
            title: "Wildlife Safari",
            category: "Nature",
            usage: 740,
            status: true,
            description:
                "Observing wild animals in their natural habitats on guided tours.",
        },
        {
            id: "9",
            title: "Cycling",
            category: "Adventure",
            usage: 460,
            status: false,
            description:
                "Riding bicycles for fitness, fun, or exploring scenic routes.",
        },
        {
            id: "10",
            title: "Museum Visits",
            category: "Cultural",
            usage: 590,
            status: true,
            description:
                "Learning about history, art, and science through curated exhibitions.",
        },
    ]);

    const toggleCheck = (id: string) => {
        setPreferences(
            preferences.map((pref) =>
                pref.id === id ? { ...pref, status: !pref.status } : pref,
            ),
        );
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <H2>Preference Management</H2>
                <Button
                    className="flex items-center gap-2"
                    onClick={() => {
                        setShowModal(true);
                        setSelectedPref(null);
                    }}
                >
                    <Plus color="white" strokeWidth={3} />
                    Add Preference
                </Button>
            </div>
            <div className="flex gap-6 h-12">
                <div className="relative w-full max-w-2xl h-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search..."
                        className="pl-12 bg-muted-background h-full rounded-4xl border-none"
                    />
                </div>
                <Select defaultValue="all" onValueChange={(select_input) => { }}>
                    <SelectTrigger className="w-32 !h-full">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem defaultChecked value="all">
                            All Categories
                        </SelectItem>
                        <SelectItem value="new">Interest</SelectItem>
                        <SelectItem value="active">Trip</SelectItem>
                        <SelectItem value="deactive">Budget</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <PreferenceTable
                    preferences={preferences}
                    toggleCheck={toggleCheck}
                    onShowModal={(id: string) => {
                        setShowModal(true);
                        setSelectedPref(preferences.find((pref) => pref.id === id) ?? null);
                    }}
                />
            </div>

            <PreferenceModal
                selectedPref={selectedPref}
                onClose={() => {
                    setShowModal(false);
                    setSelectedPref(null);
                }}
                isOpen={showModal}
                onCreatePref={() => { }}
                onUpdatePref={() => { }}
            />
        </div>
    );
}
