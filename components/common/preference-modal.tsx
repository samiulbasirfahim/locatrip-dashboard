import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "../ui/dialog";
import { H3, P } from "../ui/typography";
import Input from "./input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import { Preference } from "@/app/(dashboard)/management/preference/page";
import { Button } from "../ui/button";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    selectedPref: Preference | null;
    onCreatePref: () => void;
    onUpdatePref: () => void;
};

export default function PreferenceModal({
    isOpen,
    onClose,
    selectedPref,
}: Props) {
    const [formData, setFormData] = useState({
        category: "",
        description: "",
        title: "",
    });

    useEffect(() => {
        if (selectedPref)
            setFormData({
                ...(selectedPref as unknown as typeof formData),
            });
        else
            setFormData({
                category: "",
                description: "",
                title: "",
            });
    }, [selectedPref]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl">
                <DialogTitle className="flex items-start gap-1 justify-between w-auto flex-col">
                    <div>
                        <H3 className="mb-0">Add Preference</H3>
                        <P className="!mt-0 text-muted-foreground">
                            Create a new preference option within a category.
                        </P>
                    </div>
                </DialogTitle>

                <form className="flex flex-col mt-10 gap-4">
                    <div className="grid w-full items-center gap-1">
                        <Label htmlFor="category">Category</Label>

                        <Select defaultValue={formData.category}>
                            <SelectTrigger className="w-full bg-muted-background placeholder:text-muted-foreground/60 border-none">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Cateogry</SelectLabel>
                                    <SelectItem value="nature">Nature</SelectItem>
                                    <SelectItem value="water-sports">Water Sports</SelectItem>
                                    <SelectItem value="cultural">Clutural</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <Input
                        label="Preference Name"
                        id="preference-name"
                        placeholder="Preference Name"
                        defaultValue={formData.title}
                    />

                    <div className="grid w-full items-center gap-1">
                        <Label htmlFor="description">Description (Optional)</Label>

                        <Textarea
                            defaultValue={formData.description}
                            placeholder="Write here"
                            className="bg-muted-background placeholder:text-muted-foreground/60 border-none"
                        ></Textarea>
                    </div>

                    <div className="flex items-center justify-center">
                        <Button>{selectedPref === null ? "Confirm" : "Save Change"}</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
